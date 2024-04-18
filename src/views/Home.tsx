import React, { useState } from 'react';
import Navbar from '../components/Nav';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
//import { BsCheckCircle } from "react-icons/bs";
import CountdownTimer from '../components/Timer';
import Card from '../components/Card';

const Home: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<'home' | 'completion' | 'confirmation'>('home');

    const handleCompletionButtonClick = () => {
        setCurrentPage('completion');
    };

    const handleConfirmationButtonClick = () => {
        setCurrentPage('confirmation');
    };

    return (
        <div className='flex flex-col gap-y-10 items-center bg-kindly-offWhite'>
            <Navbar/>

            {/* Stats Section */}
            <Stats />

            {/* Conditional Rendering based on currentPage */}
            {currentPage === 'home' && (
                <div>
                    <CountdownTimer />
                    <h2 className="text-3xl py-3 text-white text-center font-extrabold bg-kindly-blue rounded-t-2xl">
                        Today's Challenge
                    </h2>
                    <Card layoutType='home' handleButtonClick={handleCompletionButtonClick} />
                </div>
            )}
            {currentPage === 'completion' && (
                <div className="flex flex-col gap-y-10 items-center text-black bg-kindly-offWhite">
                    <div className="flex flex-col items-center gap-4 pb-10 bg-kindly-backgroundColor">
                        <CountdownTimer />
                        <div>
                            <h2 className="text-3xl py-3 text-white text-center font-extrabold bg-kindly-blue rounded-t-2xl">
                                Today's Challenge
                            </h2>
                            <Card layoutType="completion" handleButtonClick={handleConfirmationButtonClick} />
                        </div>
                    </div>
                </div>
            )}
            {currentPage === 'confirmation' && (
                <div className="flex flex-col gap-y-10 items-center pb-10 bg-kindly-offWhite">
                    <div>
                        <h2 className="text-3xl py-3 text-white text-center font-extrabold bg-kindly-blue rounded-t-2xl">
                            Completed Challenge
                        </h2>
                        <Card layoutType="confirmation" handleButtonClick={handleConfirmationButtonClick} />
                    </div>
                    <Card layoutType='staticFeed' handleButtonClick={handleConfirmationButtonClick}/>
                </div>
            )}
            <Footer/>
        </div>
    );
};

export default Home;
