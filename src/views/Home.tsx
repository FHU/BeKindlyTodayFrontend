//import React from 'react';
//import { Link } from 'react-router-dom';
import 'daisyui/dist/full.css';
import '../index.css';
import Navbar from '../components/Nav';
//import { BsCheckCircle } from "react-icons/bs";
import Card from '../components/Card';


function Home() {
    return(
        <div className='flex flex-col gap-y-10 items-center pb-10 bg-kindly-offWhite'>
            <Navbar/>
            {/* <div className="flex w-full h-24 text-2xl px-5 justify-between items-center" style={{ backgroundColor: '#227C9D', color: '#ffffff' }}>
                <img src={'src/assets/logo.png'} alt="Centered Image" style={{ width: '65px', height: '65px' }} />
                <h1 className='text-5xl'>BeKindly</h1>
                <div className="flex items-center">
                    <div className="text-6xl text-black"><CiCalendar /></div>
                    <div className="rounded-full bg-slate-100 p-7"></div>
                </div>
            </div> */}

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
                <h1 className='text-4xl font-bold mr-4'>04:43:07</h1>
            </div>

            {/* Card (component work) */}
            <div>
                <h2 className="text-3xl pb-2 text-black text-center font-extrabold">Today's Challenge</h2>
                <Card layoutType='home'/>
            </div>
            {/* <div>
                <h2 className="text-3xl pb-2 text-black text-center font-extrabold">Today's Challenge</h2>
                <div className="card card-compact w-96 bg-base-100 shadow-xl bg-white">
                    <figure><img src="src/images/phone.jpg" alt="Challenges" /></figure>
                    <div className="card-body">
                        <p className='font-bold text-lg text-center text-black'>Send a text to a mom expressing appreciation.</p>
                        <p className='text-center font-semibold text-kindly-teal'>Make it a video or audio message instead of a regular text.</p>
                        <div className="card-actions justify-center pt-4">
                            {/* Button for nav*
                            <Link to="/completion" className="btn btn-block rounded-full text-xl bg-kindly-teal text-white border-none transition-colors duration-300 hover:bg-kindly-tealHover">
                                <div><BsCheckCircle /></div>
                                Complete
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    )
}

export default Home;