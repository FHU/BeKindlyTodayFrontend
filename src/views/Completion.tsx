import React from 'react';
import Navbar from '../components/Nav';
import '../index.css';
import 'daisyui/dist/full.css';
import CountdownTimer from '../components/Timer';
import { Link } from 'react-router-dom';

interface Post {
  challenge: string;
}

const Completion: React.FC = () => {
  // Define a static post
  const post: Post = {
    challenge: "Send a text to a loved one to show your appreciation."
  };

  return (
    // Top-Parent Container
    <div className="flex flex-col gap-y-10 items-center text-black bg-kindly-offWhite">
        <Navbar/>
        {/* Header
        <div className="flex w-full h-24 text-2xl px-5 justify-between items-center" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>
            <img src={'src/assets/logo.png'} alt="Centered Image" style={{ width: '65px', height: '65px' }} />
            <h1>BeKindly</h1>
            <div className="flex items-center">
                <div className="text-6xl text-black"><CiCalendar /></div>
                <div className="rounded-full bg-slate-100 p-7"></div>
            </div>
        </div> */}

        {/* Main */}
        <div className="flex flex-col items-center gap-4 pb-10 bg-kindly-backgroundColor">

        {/* Timer */}
        <CountdownTimer />
        
        {/* <div className='text-center text-black'>
            <h1 className='text-4xl font-bold'>04:43:07</h1>
        </div> */}

        {/* <span className="countdown font-mono text-2xl">
            <span style={{"--value":10}}></span>:
            <span style={{"--value":24}}></span>:
            <span style={{"--value":51}}></span>
        </span> */}

            {/* Challenge */}
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="src/images/phone.jpg" alt="Challenges" /></figure>
                <div className="card-body bg-white rounded-b-2xl">
                    <p className='font-bold text-lg text-center text-black'>{post.challenge}</p>
                    <p className='text-center font-semibold text-kindly-teal'>Make it a video or audio message instead of a regular text.</p>
                    <div className="card-actions justify-center">
                        {/* Button for nav */}
                        {/*<link to="/another-page" className='btn btn-primary'>Complete</link>*/}
                    </div>
                </div>
            </div>

            {/* Experience */}
            <h2 className="text-2xl self-start mt-10">Experience</h2>
            <div className="mb-10">
                <form action="#" method="post" className="flex flex-col">
                        <textarea className="w-96 border-2 border-black rounded-lg p-2 h-32 bg-kindly-offWhite"></textarea>
                </form>
            </div>

            {/* Post */}
            <Link to="/confirmation">
                <div className="btn btn-lg rounded-lg text-xl bg-kindly-teal text-white text-center border-none transition-colors duration-300 hover:bg-kindly-tealHover">
                    <h2>Complete</h2>
                </div>
            </Link>
        </div>
        </div>
  );
};

export default Completion;
