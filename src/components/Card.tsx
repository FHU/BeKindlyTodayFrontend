// ChallengeCard.js
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { BsCheckCircle } from "react-icons/bs";
import 'daisyui/dist/full.css';
import ProfileBubble from '../components/ProfileBubble'; // Import the ProfileBubble component


interface Post {
  challenge: string;
  visual: string;
  experience:string;
}

interface CardProps {
  layoutType: 'home' | 'completion' | 'confirmation' | 'staticFeed';
  handleButtonClick: () => void;
  
}

const Card: React.FC<CardProps> = ({ layoutType, handleButtonClick }) => {
  const [internalLayoutType] = useState<'home' | 'completion' | 'confirmation' | 'staticFeed'>(layoutType);
  const [showShadow, setShowShadow] = useState<boolean>(false); // State to control shadow visibility
  const [textValue, setTextValue] = useState('');

  const post: Post = {
    challenge: "Send a text to a loved one to show your appreciation.",
    visual: "src/images/phone.jpg",
    experience: "I sent a mom a text and she really appreciated it"
  };


  const handleTextChange = (event: { target: { value: string } }) => {
    setTextValue(event.target.value.slice(0, 250));
  };

  let cardBody;
  switch (internalLayoutType) {
    case 'home':
      cardBody = (
        <div className="card-body">
          <p className='font-bold text-lg text-center text-black'>{post.challenge}</p>
          <p className='text-center font-semibold text-kindly-blue'>Make it a video or audio message instead of a regular text.</p>
          <div className="card-actions justify-center pt-4">
            <button onClick={handleButtonClick} className="btn btn-block rounded-full text-xl bg-kindly-blue text-white border-none transition-colors duration-300 hover:bg-kindly-royalBlue">
              <div><BsCheckCircle /></div>
              Complete
            </button>
          </div>
        </div>
      );
      break;

    case 'completion':
      cardBody = (
        <div className="card-body bg-white rounded-2xl">
          <p className='font-bold text-lg text-center text-black'>{post.challenge}</p>
          <p className='text-center font-semibold text-kindly-teal'>Make it a video or audio message instead of a regular text.</p>
          <div className="card-actions justify-center">
            {/* Button for nav */}
            {/*<link to="/another-page" className='btn btn-primary'>Complete</link>*/}
            <div className="my-6">
              <h2 className="text-2xl self-start">Experience</h2>
              <div className="relative">
                <form action="#" method="post" className="flex flex-col">
                  <textarea
                    className="w-80 border-2 border-black rounded-lg p-3 h-32 bg-kindly-offWhite"
                    value={textValue}
                    onChange={handleTextChange}
                  ></textarea>
                </form>
              </div>
              <div className="text-right p-1 text-sm">
                {`${textValue.length} / 250`}
              </div>
            </div>
            <button onClick={handleButtonClick} className="btn btn-block rounded-full text-xl bg-kindly-blue text-white border-none transition-colors duration-300 hover:bg-kindly-royalBlue">
              <div><BsCheckCircle /></div>
              Complete
            </button>
          </div>
        </div>
      );
      break;

      case 'confirmation':        
        cardBody = (
          <div className="card-body">
            <div className="text-black text-center py-6">
              <p className="text-lg font-semibold leading-tight">{post.experience}</p>
            </div>
            
          </div>
        );
        break;

      case 'staticFeed':
      cardBody = (
        <div className={`flex flex-col gap-y-4 ${showShadow ? 'shadow-lg' : 'shadow-none'}`}> {/* Dynamically apply shadow class based on state */}
          {/* ProfileBubble component with transparent background */}
          <div className="p-4 rounded-t-lg bg-kindly-offWhite">
            <ProfileBubble />
          </div>
          {/* Original card with transparent top part */}
          <div className="card-body bg-transparent border-t-0">
            <p className='font-bold text-lg text-center text-black'>{post.challenge}</p>
            {/* <p className='text-center font-semibold text-kindly-teal'>Make it a video or audio message instead of a regular text.</p> */}
          </div>
          <div className="bg-gray-300 text-black rounded-b-lg text-center py-2">Wow!</div> </div>
      
      );
      break;

    default:
      cardBody = null;
  }

  // Conditionally render the image based on layoutType
  const image = internalLayoutType !== 'staticFeed' && <figure className='rounded-none'><img src={post.visual} alt='Challenges' /></figure>;

  return (
    <div
    className={`card card-compact w-96 bg-base-100 bg-white ${layoutType === 'completion' ? 'custom-class' : ''}`}
    onMouseEnter={() => setShowShadow(true)}  // Show shadow on mouse enter
    onMouseLeave={() => setShowShadow(false)} // Hide shadow on mouse leave
  >
    {image}
    {cardBody}
  </div>
  );
};

export default Card;