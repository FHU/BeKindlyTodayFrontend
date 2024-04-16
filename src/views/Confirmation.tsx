//import { Link } from 'react-router-dom';
import 'daisyui/dist/full.css';
import '../index.css';
import Navbar from '../components/Nav';
import Card from '../components/Card';
import React, { useState, useEffect } from 'react';


function Confirmation() {
    const [fadeIn, setFadeIn] = useState(false);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      // On component mount, set fade in to true
      setFadeIn(true);
  
      // After 5 seconds, set fade in back to false to trigger fade-out
      const timeout = setTimeout(() => {
        setFadeIn(false);
      }, 5000);
  
      // After fade-out animation completes, hide the div
      const hideTimeout = setTimeout(() => {
        setVisible(false);
      }, 5500); // Duration of fade-out animation + 500ms buffer
  
      // Clean up timeouts to avoid memory leaks
      return () => {
        clearTimeout(timeout);
        clearTimeout(hideTimeout);
      };
    }, []); // Empty dependency array ensures this effect runs only once on component mount
  
    return(
        <div className='flex flex-col gap-y-10 items-center pb-10 bg-kindly-offWhite'>
            <Navbar/>
{/* animate height??????????? */}
            {/* alert for completed task */}
                {/* Conditionally render the fading element based on visibility */}
                {visible && (
                    <div className={`fade ${fadeIn ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 -mt-10`}>
                        <div className="bg-green-100 border border-green-400 text-green-700 px-12 py-3 rounded relative text-center" role="alert">
                            <strong className="font-bold ">Success! </strong>
                            <span className="block sm:inline">You Completed the task </span>
                        </div>
                    </div>
                 )}
 
            {/* Stats Section */}
            <div className='flex flex-row space-x-4 text-center'>
                <div className="stats shadow bg-white">
                    <div className="stat w-40 space-y-2">
                        <div className="stat-value text-black pt-2">89,400</div>
                        <div className="stat-title text-black whitespace-normal">Challenges Completed Globally</div>
                    </div>
                </div>

                <div className="stats shadow bg-white">
                    <div className="stat w-40 space-y-2">
                        <div className="stat-value text-black pt-2">8,400</div>
                        <div className="stat-title text-black whitespace-normal">Challenges Completed Today</div>
                    </div>
                </div>

                <div className="stats shadow bg-white">
                    <div className="stat w-40 space-y-2">
                        <div className="stat-value text-black pt-2">20</div>
                        <div className="stat-title text-black whitespace-normal">Challenges Completed By You</div>
                    </div>
                </div>
            </div>

            

            
            {/* Timer Section */}
            <div className='text-center text-black'>
                <h1 className='text-4xl font-bold mr-4 hidden'>04:43:07</h1>
            </div>

            {/* Card Component work */}
            <div>
            <h2 className="text-3xl py-3 text-white text-center font-extrabold bg-kindly-teal rounded-t-lg">Today's Challenge</h2>
               <Card layoutType='confirmation'/>
            </div>

            <div>
                <Card layoutType='staticFeed'/>
            </div>

            <div>
                <Card layoutType='staticFeed'/>
            </div>

            <div>
                <Card layoutType='staticFeed'/>
            </div>

            <div>
                <Card layoutType='staticFeed'/>
            </div>
            {/* Old Card */}
            {/* <div>
                <h2 className="text-3xl pb-2 text-black text-center font-extrabold">Today's Challenge</h2>
                <div className="card card-compact w-96 bg-base-100 shadow-xl bg-white">
                    <figure><img src="src/images/phone.jpg" alt="Challenges" /></figure>
                    <div className="card-body">
                        <p className='font-bold text-lg text-center text-black'>I sent a mom a video message telling her that I love her and appreciate her.</p>
                        <div className="card-actions justify-center pt-4">
                            <div className='w-3/4 text-center rounded-full text-xl bg-kindly-teal text-white border-none py-2 px-4'>Achieved</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    )
}

export default Confirmation;