// Profile.tsx
import { useEffect, useState } from "react";
import "daisyui/dist/full.css";
import "../index.css";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { BiMessageSquareEdit } from "react-icons/bi";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Carousel from "../components/Carousel";
import {
  getLoggedInUser,
  updateUserProfilePicture,
  User,
  getUserStats,
} from "../services";
import { useNavigate } from "react-router-dom";

export interface ProfilePicture {
  name: string;
  path: string;
}

function Profile() {
  const { logout, isAuthenticated, isLoading, getToken } = useKindeAuth();
  const [profilePictureClicked, setProfilePictureClicked] =
    useState<boolean>(false);
  const [selectedProfilePicture, setSelectedProfilePicture] = useState<
    string | undefined
  >();

  const [backendUser, setBackendUser] = useState<User | undefined>();
  const [savedToken, setSavedToken] = useState<string | undefined>();
  const [userCompletionsCount, setUserCompletionsCount] = useState<
    number | undefined
  >();
  const [userStreak, setUserStreak] = useState<number | undefined>();

  const [showLogin, setShowLogin] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      setShowLogin(false);
      getToken().then((token) => {
        if (token !== undefined) {
          setSavedToken(token);
          getLoggedInUser(token).then((user) => {
            setBackendUser(user);
            if (user.profilePicture !== null)
              setSelectedProfilePicture(user.profilePicture);
          });
          getUserStats(token).then((stats) => {
            setUserCompletionsCount(stats.user_completions_count);
            setUserStreak(stats.user_streak);
          });
        }
      });
    } else if (!isLoading) {
      navigate("/");
    }
  }, [isLoading]);

  const profilePictures: ProfilePicture[] = [
    { name: "Blue Profile", path: "images/Blue_Profile.png" },
    { name: "Red Profile", path: "images/Red_Profile.png" },
    { name: "Green Profile", path: "images/Green_Profile.png" },
    { name: "Pink Profile", path: "images/Pink_Profile.png" },
    { name: "Yellow Profile", path: "images/Yellow_Profile.png" },
    { name: "Purple Profile", path: "images/Purple_Profile.png" },
  ];

  const handleProfilePictureClick = () => {
    setProfilePictureClicked(!profilePictureClicked);
  };

  const handleProfilePictureChange = (profilePicture: string) => {
    if (savedToken) {
      updateUserProfilePicture(profilePicture, savedToken);
    }
    setSelectedProfilePicture(profilePicture);

    setProfilePictureClicked(false); // Reset profilePictureClicked state after selecting new profile picture
  };

  return (
    <div className="flex flex-col items-center justify-between bg-kindly-offWhite min-h-screen">
      <Navbar showLogin={showLogin} />

      <div className="profile-picture-container justify-between mt-6 flex flex-col items-center relative">
        <div
          className="profile-picture bg-blue-500 rounded-full w-30 h-30 flex items-center justify-center mb-2 relative"
          onClick={handleProfilePictureClick}
        >
          <img
            src={selectedProfilePicture}
            alt="Profile"
            className="rounded-full w-full h-full cursor-pointer"
            style={{ maxWidth: "200px", maxHeight: "200px" }} // Set max width and max height
          />
          <BiMessageSquareEdit className="absolute bottom-1 right-1 text-white bg-gray-800 rounded-full p-1 cursor-pointer" />
        </div>

        {profilePictureClicked && (
          <Carousel
            profilePictures={profilePictures}
            onProfilePictureChange={handleProfilePictureChange}
          />
        )}

        <div className="text-center">
          <h2 className="text-xl font-semibold text-black">
            {backendUser ? backendUser.username : "Loading Username..."}
          </h2>
        </div>
      </div>

      <div className="flex flex-row space-x-4 text-center mt-6">
        <div className="stats shadow bg-white">
          <div className="stat w-40 space-y-2">
            <div className="stat-value text-black pt-2">
              {userCompletionsCount !== undefined
                ? userCompletionsCount
                : "..."}
            </div>
            <div className="stat-title text-black whitespace-normal">
              Challenges Completed
            </div>
          </div>
        </div>

        <div className="stats shadow bg-white">
          <div className="stat w-40 space-y-2">
            <div className="stat-value text-black pt-2">
              {userStreak !== undefined ? userStreak : "..."}
            </div>
            <div className="stat-title text-black whitespace-normal">
              Current Streak
            </div>
          </div>
        </div>
      </div>
      <br />
      <button
        onClick={logout}
        type="button"
        className="btn text-xl text-white pt-2 bg-blue-500 border-hidden"
      >
        Logout
      </button>
      <Footer />
    </div>
  );
}

export default Profile;
