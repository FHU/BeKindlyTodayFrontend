import React from 'react';
//import { Link } from 'react-router-dom';
import 'daisyui/dist/full.css';
import './Home.css';
import { CiCalendar } from "react-icons/ci";

function Home() {
    return(
        <div className='flex flex-col gap-y-10 items-center pb-10'>
            <div className="flex w-full h-24 text-2xl px-5 justify-between items-center" style={{ backgroundColor: '#227C9D', color: '#ffffff' }}>
                <img src={'src/assets/logo.png'} alt="Centered Image" style={{ width: '65px', height: '65px' }} />
                <h1 className='text-5xl'>BeKindly</h1>
                <div className="flex items-center">
                    <div className="text-6xl text-black"><CiCalendar /></div>
                    <div className="rounded-full bg-slate-100 p-7"></div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="stats stats-vertical lg:stats-horizontal shadow text-center">
  
                <div className="stat">
                    <div className="stat-value">10K</div>
                    <div className="stat-title">Challenges Completed Globally</div>
                    {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
                </div>
                
                <div className="stat">
                    <div className="stat-value">517</div>
                    <div className="stat-title">Challenges Completed Today</div>
                    {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
                </div>
                
                <div className="stat">
                    <div className="stat-value">12</div>
                    <div className="stat-title">Challenges Completed by You</div>
                    {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
                </div>
                
            </div>

            
            {/* Timer Section */}
            <div className='text-center'>
                <h1 className='text-4xl font-bold mr-4'>00:00:00</h1>
                {/* Add stats component here */}
            </div>

            {/* Card */}
            <h2 className="text-3xl">Today's Challenge</h2>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Challenges" /></figure>
                <div className="card-body">
                    <p className='font-bold text-lg text-center'>Send a text to a mom expressing appreciation.</p>
                    <p className='text-center'>Make it a video or audio message instead of a regular text.</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-wide" style={{ display: 'flex', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        Button
                    </button>

                        {/*<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>Complete</button>
                        {/*<button className="btn w-4/5 rounded-xl h-6 text-lg" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>Complete</button>*/}
                        {/* Button for nav */}
                        {/*<link to="/another-page" className='btn btn-primary'>Complete</link>*/}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;