import { useState } from 'react';
import 'daisyui/dist/full.css';
import '../index.css';
import Navbar from '../components/Nav';
import { BiMessageSquareEdit } from "react-icons/bi";
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';


interface ProfilePicture {
    name: string;
    path: string;
}

function Profile() {
    const { logout} = useKindeAuth();
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
        <div className='flex flex-col items-center pb-10 bg-kindly-offWhite min-h-screen'>
            <Navbar />

            <div className="profile-picture-container mt-6 flex flex-col items-center relative">
                <div className="profile-picture bg-blue-500 rounded-full w-30 h-30 flex items-center justify-center mb-2 relative" onClick={() => setShowDropdown(!showDropdown)}>
                    <img
                        src={selectedProfilePicture.path}
                        alt="Profile"
                        className="rounded-full w-full h-full cursor-pointer"
                        style={{ maxWidth: '200px', maxHeight: '200px' }} // Set max width and max height
                    />
                    <BiMessageSquareEdit className="absolute bottom-1 right-1 text-white bg-gray-800 rounded-full p-1 cursor-pointer" />
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
                    <h2 className="text-xl font-semibold text-white">Sam Flowers</h2>
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
            <br />
            <button
              onClick={() => logout()}
              type="button"
              className="btn text-xl text-white pt-2 bg-blue-500 border-hidden"
            >
              Logout
            </button>
        </div>
    );
}

export default Profile;
