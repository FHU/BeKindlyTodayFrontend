// Carousel.tsx
import React from "react";
import { ProfilePicture } from "../views/Profile";

interface CarouselProps {
  profilePictures: ProfilePicture[];
  onProfilePictureChange: (profilePicture: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  profilePictures,
  onProfilePictureChange,
}) => {
  return (
    <div className="carousel carousel-center rounded-box flex gap-2">
      {profilePictures.map((profilePicture, index) => (
        <div
          className="carousel-item rounded-full bg-white w-40 h-40 flex items-center justify-center cursor-pointer"
          key={index}
          onClick={() => onProfilePictureChange(profilePicture.path)}
        >
          <img
            src={profilePicture.path}
            alt={profilePicture.name}
            className="rounded-full w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
