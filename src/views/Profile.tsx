import 'daisyui/dist/full.css';
import '../index.css';
import Navbar from '../components/Nav';

function Profile() {
    return (
        <div className='flex flex-col items-center pb-10 bg-kindly-offWhite'>
            <Navbar />

            <div className="profile-picture-container mt-6 flex flex-col items-center">
                <div className="profile-picture bg-gray-300 rounded-full w-20 h-20 flex items-center justify-center mb-2">
                    {/* Placeholder or actual profile image can be inserted here */}
<<<<<<< HEAD
                    <span className="text-lg font-bold text-gray-600">SF</span>
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Sam Flowers</h2>
                    <p className="text-sm text-gray-600">I just lost the game</p>
=======
                    <span className="text-lg font-bold text-gray-600">JD</span>
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-sm text-gray-600">Mission statement goes here...</p>
>>>>>>> d0c82385f0abd88a783906e9089d0577686f8e8b
                </div>
            </div>

            <div className='flex flex-row space-x-4 text-center mt-6'>
                <div className="stats shadow bg-white">
                    <div className="stat w-40 space-y-2">
                        <div className="stat-value text-black pt-2">1</div>
                        <div className="stat-title text-black whitespace-normal">Challenges Completed</div>
                    </div>
                </div>

                <div className="stats shadow bg-white">
                    <div className="stat w-40 space-y-2">
                        <div className="stat-value text-black pt-2">1</div>
                        <div className="stat-title text-black whitespace-normal">Twists Completed</div>
                    </div>
                </div>

                <div className="stats shadow bg-white">
                    <div className="stat w-40 space-y-2">
                        <div className="stat-value text-black pt-2">1</div>
                        <div className="stat-title text-black whitespace-normal">Current Streak</div>
                    </div>
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default Profile;
