import React, { useState } from 'react';
import Navbar from '../components/Nav';
import '../index.css';
import 'daisyui/dist/full.css';
import CountdownTimer from '../components/Timer';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
// import  Alert  from 'daisyui';

// interface Post {
//   challenge: string;
// } I put this in the card component

const Completion: React.FC = () => {
  // Define a static post I put this in the card component
  //   const post: Post = {
  //     challenge: "Send a text to a loved one to show your appreciation."
  //   };

  // State to track textarea value
  const [textValue, setTextValue] = useState('');

  // Handler to update state based on input
  const handleTextChange = (event: { target: { value: string } }) => {
    setTextValue(event.target.value.slice(0, 250)); // Ensures character limit is respected
  };

  return (
    // Top-Parent Container
    <div className="flex flex-col gap-y-10 items-center text-black bg-kindly-offWhite">
      <Navbar />

      {/* Main */}
      <div className="flex flex-col items-center gap-4 pb-10 bg-kindly-backgroundColor">
        {/* Timer */}
        <CountdownTimer />

        {/* Challenge component work */}
        <div>
          <h2 className="text-3xl pb-2 text-black text-center font-extrabold">
            Today's Challenge
          </h2>
          <Card layoutType="completion" />
        </div>

        {/* Old Challenge Card */}
        {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="src/images/phone.jpg" alt="Challenges" /></figure>
                <div className="card-body bg-white rounded-b-2xl">
                    <p className='font-bold text-lg text-center text-black'>{post.challenge}</p>
                    <p className='text-center font-semibold text-kindly-teal'>Make it a video or audio message instead of a regular text.</p>
                    <div className="card-actions justify-center">
                        {/* Button for nav 
                        {/*<link to="/another-page" className='btn btn-primary'>Complete</link>
                    </div>
                </div>
            </div> */}

        {/* Experience */}
        <div className="my-6">
          <h2 className="text-2xl self-start">Experience</h2>
          <div className="relative">
            {' '}
            {/* Relative positioning for character count */}
            <form action="#" method="post" className="flex flex-col">
              <textarea
                className="w-96 border-2 border-black rounded-lg p-3 h-32 bg-kindly-offWhite"
                value={textValue}
                onChange={handleTextChange}
              ></textarea>
            </form>
          </div>
          <div className="text-right p-1 text-sm">
            {`${textValue.length} / 250`} {/* Displaying character count */}
          </div>
        </div>

        {/* Post */}
        <Link to="/confirmation">
          <div className="btn btn-lg rounded-lg text-xl bg-kindly-blue text-white text-center border-none transition-colors duration-300 hover:bg-kindly-royalBlue">
            <h2>Complete</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Completion;