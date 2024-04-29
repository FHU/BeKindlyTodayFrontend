import React from "react";
import { ProfilePicture } from "../views/Profile";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface CarouselProps {
  profilePictures: ProfilePicture[];
  onProfilePictureChange: (profilePicture: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  profilePictures,
  onProfilePictureChange,
}) => {
  return (
    <div className="relative flex items-center max-w-full px-2">
      <div
        id="carousel-container"
        className="carousel carousel-center rounded-box flex gap-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {profilePictures.map((profilePicture, index) => (
          <div
            key={index}
            className="carousel-item rounded-full bg-white w-40 h-40 flex items-center justify-center cursor-pointer"
            onClick={() => onProfilePictureChange(profilePicture.path)}
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              src={profilePicture.path}
              alt={profilePicture.name}
              className="rounded-full w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
