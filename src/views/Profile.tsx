import React, { useState } from 'react';
import 'daisyui/dist/full.css';
import '../index.css';
import Navbar from '../components/Nav';

interface ProfilePicture {
    name: string;
    path: string;
}

function Profile() {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [selectedProfilePicture, setSelectedProfilePicture] = useState<ProfilePicture>({
        name: 'Blue Profile',
        path: '../../public/images/Blue_Profile.png'
    });

    const profilePictures: ProfilePicture[] = [
        { name: 'Blue Profile', path: '../../public/images/Blue_Profile.png' },
        { name: 'Red Profile', path: '../../public/images/Red_Profile.png' },
        { name: 'Green Profile', path: '../../public/images/Green_Profile.png' },
        { name: 'Pink Profile', path: '../../public/images/Pink_Profile.png' },
        { name: 'Yellow Profile', path: '../../public/images/Yellow_Profile.png' },
        { name: 'Purple Profile', path: '../../public/images/Purple_Profile.png' }
    ];

    const handleProfilePictureChange = (profilePicture: ProfilePicture) => {
        setSelectedProfilePicture(profilePicture);
        setShowDropdown(false);
    };

    return (
        <div className='flex flex-col items-center pb-10 bg-kindly-offWhite'>
            <Navbar />

            <div className="profile-picture-container mt-6 flex flex-col items-center relative">
                <div className="profile-picture bg-gray-300 rounded-full w-30 h-30 flex items-center justify-center mb-2" onClick={() => setShowDropdown(!showDropdown)}>
                    <img
                        src={selectedProfilePicture.path}
                        alt="Profile"
                        className="rounded-full w-full h-full cursor-pointer"
                        style={{ maxWidth: '200px', maxHeight: '200px' }} // Set max width and max height
                    />
                </div>
                {showDropdown && (
                    <div className="dropdown-menu absolute top-12 right-5 bg-white shadow rounded-md">
                        <ul className="py-2">
                            {profilePictures.map((picture, index) => (
                                <li key={index} onClick={() => handleProfilePictureChange(picture)} className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center">
                                    <img src={picture.path} alt={picture.name} className="w-12 h-12 mr-2 rounded-full" />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Sam Flowers</h2>
                    <p className="text-sm text-gray-600">I just lost the game</p>
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
                        <div className="stat-title text-black whitespace-normal">Current Streak</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;