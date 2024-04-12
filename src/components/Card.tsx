// ChallengeCard.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if you're using it
import { BsCheckCircle } from "react-icons/bs";
import 'daisyui/dist/full.css';


interface Post {
  challenge: string;
  visual: string;
}

interface CardProps {
  layoutType: 'home' | 'completion' | 'confirmation'
}

// setLayoutType allows for interaction
const Card: React.FC<CardProps> = ({layoutType}) => {
  const [internalLayoutType] = useState<'home' | 'completion' | 'confirmation'>(layoutType);
  
  const post: Post = {
    challenge: "Send a text to a loved one to show your appreciation.",
    visual: "src/images/phone.jpg"
  };

  let cardBody;
  switch(internalLayoutType) {
    case 'home':
      cardBody = (
        <div className="card-body">
          <p className='font-bold text-lg text-center text-black'>{post.challenge}</p>
          <p className='text-center font-semibold text-kindly-teal'>Make it a video or audio message instead of a regular text.</p>
          <div className="card-actions justify-center pt-4">
            <Link to='/completion' className="btn btn-block rounded-full text-xl bg-kindly-teal text-white border-none transition-colors duration-300 hover:bg-kindly-tealHover">
              <div><BsCheckCircle /></div>
              Complete
            </Link>
          </div>
        </div>
      );
      break;

    case 'completion':
      cardBody = (
        <div className="card-body bg-white rounded-b-2xl">
          <p className='font-bold text-lg text-center text-black'>{post.challenge}</p>
          <p className='text-center font-semibold text-kindly-teal'>Make it a video or audio message instead of a regular text.</p>
          <div className="card-actions justify-center">
            {/* Button for nav */}
            {/*<link to="/another-page" className='btn btn-primary'>Complete</link>*/}
          </div>
        </div>
      );
      break;

    case 'confirmation':
      cardBody = (
        <div className="card-body">
          <p className='font-bold text-lg text-center text-black'>I sent a mom a video message telling her that I love her and appreciate her.</p>
          <div className="card-actions justify-center pt-4">
            <div className='w-3/4 text-center rounded-full text-xl bg-kindly-teal text-white border-none py-2 px-4'>Achieved</div>
          </div>
        </div>
      );
      break;
    default:
    cardBody = null;
  }

  return (
    <div className={`card card-compact w-96 bg-base-100 shadow-xl bg-white ${layoutType === 'completion' ? 'custom-class' : ''}`}>
      <figure><img src={post.visual} alt='Challenges' /></figure>
      {cardBody}
    </div>
  );
};

export default Card;
