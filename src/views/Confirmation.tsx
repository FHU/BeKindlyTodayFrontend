//import { Link } from 'react-router-dom';
import 'daisyui/dist/full.css';
import '../index.css';
import Navbar from '../components/Nav';

function Confirmation() {
    return(
        <div className='flex flex-col gap-y-10 items-center pb-10 bg-white'>
            <Navbar/>

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

            {/* Card */}
            <div>
                <h2 className="text-3xl pb-2 text-black text-center font-extrabold">Today's Challenge</h2>
                <div className="card card-compact w-96 bg-base-100 shadow-xl bg-white">
                    <figure><img src="src/images/phone.jpg" alt="Challenges" /></figure>
                    <div className="card-body">
                        <p className='font-bold text-lg text-center text-black'>I sent a mom a video message telling her that I love her and appreciate her.</p>
                        <div className="card-actions justify-center pt-4">
                            <div className='w-3/4 text-center rounded-full text-xl bg-[#227C9D] text-white border-none py-2 px-4'>Achieved</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Confirmation;