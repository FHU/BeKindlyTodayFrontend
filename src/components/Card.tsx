import React, { useState } from "react";
import { BsCheckCircle, BsCheck2, BsCheck2All } from "react-icons/bs";
import "daisyui/dist/full.css";
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

let userInput = "";
interface Post {
  challenge: string;
  visual: string;
  experience: string;
}

interface CardProps {
  layoutType: "home" | "completion" | "confirmation" | "staticFeed" | undefined;
  handleButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ layoutType, handleButtonClick }) => {
  const inDev = import.meta.env.VITE_ENVIRONMENT === 'dev';

  const {  register, isAuthenticated } = useKindeAuth();
  const [showShadow, setShowShadow] = useState<boolean>(false);
  const [textValue, setTextValue] = useState("");

  console.log(showShadow);

  const post: Post = {
    challenge: "Send a text to a loved one to show your appreciation.",
    visual: "images/phone.jpg",
    experience: userInput,
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setTextValue(value.slice(0, 250)); // Limiting to 250 characters
    console.log("User input:", value); // Logging user input
    userInput = value; // Exporting user input by assigning it to userInput variable
  };

  let cardBody;
  switch (layoutType) {
    case "home":
      cardBody = (
        <div className="card-body">
          <div className="flex flex-row">
            <div className="text-3xl text-kindly-blue pr-2 pt-3">
              <BsCheck2 />
            </div>
            <p className="font-bold text-lg text-kindly-blue">
              {post.challenge}
            </p>
          </div>
          <div className="flex flex-row ">
            <div className="text-3xl text-kindly-blue pr-2 pt-1">
              <BsCheck2All />
            </div>
            <p className="font-semibold text-black">
              Make it a video or audio message instead of a regular text.
            </p>
          </div>
          <div className="card-actions justify-center pt-4">
        {inDev || isAuthenticated ? (
                    <button
                    onClick={handleButtonClick} // Changed to handleButtonClickInternal
                    className="btn btn-block rounded-full text-xl bg-kindly-blue text-white border-none transition-colors duration-300 hover:bg-kindly-royalBlue"
                  >
                    <div>
                      <BsCheckCircle />
                    </div>
                    Complete
                  </button>
        ) : (
          <button
          onClick={() => register()} 
          className="btn btn-block rounded-full text-xl bg-kindly-blue text-white border-none transition-colors duration-300 hover:bg-kindly-royalBlue"
        >
          <div>
            <BsCheckCircle />
          </div>
          Complete
        </button>
        )}

          </div>
        </div>
      );
      break;

    case undefined:
      cardBody = (
        <div className="card-body">
          <div className="flex justify-center items-center h-40">
            <p className="text-center">Loading Challenge...</p>
          </div>
          <div className="card-actions justify-center pt-4">
            <button
              onClick={handleButtonClick} // Changed to handleButtonClickInternal
              className="btn btn-block rounded-full text-xl bg-kindly-blue text-white border-none transition-colors duration-300 hover:bg-kindly-royalBlue"
              disabled
            >
              <div>
                <BsCheckCircle />
              </div>
              Complete
            </button>
          </div>
        </div>
      );
      break;

    case "completion":
      const isButtonDisabled = textValue.length === 0; // Check if textValue is empty
      cardBody = (
        <div className="card-body bg-white rounded-2xl">
          <div className="flex flex-row">
            <div className="text-3xl text-kindly-blue pr-2 pt-3">
              <BsCheck2 />
            </div>
            <p className="font-bold text-lg text-kindly-blue">
              {post.challenge}
            </p>
          </div>
          <div className="flex flex-row ">
            <div className="text-3xl text-kindly-blue pr-2 pt-1">
              <BsCheck2All />
            </div>
            <p className="font-semibold text-black">
              Make it a video or audio message instead of a regular text.
            </p>
          </div>
          <div className="card-actions justify-center">
            <div className="my-6">
              <h2 className="text-2xl self-start">Experience</h2>
              <div className="relative">
                <form action="#" method="post" className="flex flex-col">
                  <textarea
                    className="w-80 border-2 border-black rounded-lg p-3 h-32 bg-kindly-offWhite"
                    value={textValue}
                    onChange={handleTextChange}
                    placeholder="Write your experience here..."
                  ></textarea>
                </form>
              </div>
              <div className="text-right p-1 text-sm">
                {`${textValue.length} / 250`}
              </div>
            </div>
          <button
              onClick={handleButtonClick}
              className="btn btn-block rounded-full text-xl bg-kindly-blue text-white border-none transition-colors duration-300 hover:bg-kindly-royalBlue"
              name="completeChallenge"
              disabled={isButtonDisabled} // Disable the button if textValue is empty
            >
              <div>
                <BsCheckCircle />
              </div>
              Complete
            </button>

          </div>
        </div>
      );
      break;

    case "confirmation":
      cardBody = (
        <div className="card-body">
          <div className="text-black text-center py-6">
            <p className="text-lg font-semibold leading-tight">
              {post.experience}
            </p>
          </div>
        </div>
      );
      break;

    default:
      cardBody = null;
  }

  const image = (
    <figure className="rounded-none">
      <img src={post.visual} alt="Challenges" />
    </figure>
  );

  return (
    <div
      className={`card card-compact w-96 bg-base-100 bg-white ${
        layoutType === "completion" ? "custom-class" : ""
      }`}
      onMouseEnter={() => setShowShadow(true)}
      onMouseLeave={() => setShowShadow(false)}
    >
      {image}
      {cardBody}
    </div>
  );
};

export default Card;
