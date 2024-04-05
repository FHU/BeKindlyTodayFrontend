import React from 'react';
//import { Link } from 'react-router-dom';
import 'daisyui/dist/full.css';
//import './styles.css';

function Home() {
    return(
        <div className='flex-row pt-36 items-center justify-center'>
            {/* Timer Section */}
            <div className='flex-row mb-4 text-center'>
                <h1 className='text-4xl font-bold mr-4 pb-4'>00:00:00</h1>
                <h2 className="text-3xl">Today's Challenge</h2>
                {/* Add stats component here */}
            </div>

            {/* Card */}
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Challenges" /></figure>
                <div className="card-body">
                    <p className='font-bold text-lg text-center'>Send a text to a mom expressing appreciation.</p>
                    <p className='text-center'>Make it a video or audio message instead of a regular text.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary w-4/5 rounded-xl h-6">Complete</button>
                        {/* Button for nav */}
                        {/*<link to="/another-page" className='btn btn-primary'>Complete</link>*/}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;