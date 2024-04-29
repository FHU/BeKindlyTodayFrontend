import React from "react";
import { ProfilePicture } from "../views/Profile";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface CarouselProps {
  profilePictures: ProfilePicture[];
  onProfilePictureChange: (profilePicture: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  profilePictures,
  onProfilePictureChange,
}) => {
  const scrollLeft = () => {
    const container = document.getElementById("carousel-container");
    if (container) {
      container.scrollBy({
        left: -200, // Adjust this value according to your needs
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("carousel-container");
    if (container) {
      container.scrollBy({
        left: 200, // Adjust this value according to your needs
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-300"
      >
        <BiChevronLeft />
      </button>
      <div
        id="carousel-container"
        className="carousel carousel-center rounded-box flex gap-2 overflow-x-auto"
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
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-300"
      >
        <BiChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
