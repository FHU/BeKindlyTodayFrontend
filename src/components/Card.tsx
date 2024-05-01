import React, { useState } from 'react';
import { BsCheckCircle, BsCheck2, BsCheck2All } from 'react-icons/bs';
import 'daisyui/dist/full.css';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Challenge, Completion } from '../services';

// let userInput = '';

interface CardProps {
  layoutType: 'home' | 'completion' | 'confirmation' | 'staticFeed' | undefined;
  handleButtonClick: (description?: string) => void;
  challenge?: Challenge;
  completion: Completion | null;
}

const Card: React.FC<CardProps> = ({
  layoutType,
  handleButtonClick,
  challenge,
  completion,
}) => {
  const inDev = import.meta.env.VITE_ENVIRONMENT === 'dev';

  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { register, isAuthenticated } = useKindeAuth();
  const [textValue, setTextValue] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setTextValue(value.slice(0, 250)); // Limiting to 250 characters
    // userInput = value; // Exporting user input by assigning it to userInput variable
  };

  let cardBody;
  switch (layoutType) {
    case 'home':
      cardBody = (
        <div className="card card-body bg-white rounded-b-xlcard">
          <div className="flex flex-row items-center">
            <div className="text-3xl text-kindly-blue pr-2">
              <BsCheck2 />
            </div>
            <p className="font-bold text-lg text-kindly-blue">
              {challenge?.prompt}
            </p>
          </div>
          <div className="flex flex-row ">
            <div className="text-3xl text-kindly-blue pr-2 pt-1">
              <BsCheck2All />
            </div>
            <p className="font-semibold text-black">{challenge?.twist}</p>
          </div>
          <div className="card-actions justify-center pt-4">
            {inDev || isAuthenticated ? (
              <button
                onClick={() => handleButtonClick()} // Changed to handleButtonClickInternal
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
        <div className="card card-body bg-white rounded-b-lg">
          <div className="flex justify-center items-center h-40">
            <p className="text-center">Loading Challenge...</p>
          </div>
          <div className="card-actions justify-center pt-4">
            <button
              onClick={() => handleButtonClick()} // Changed to handleButtonClickInternal
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

    case 'completion':
      const isButtonDisabled = textValue.length === 0; // Check if textValue is empty
      cardBody = (
        <div className="card card-body bg-white rounded-b-xl">
          <div className="flex flex-row items-center">
            <div className="text-3xl text-kindly-blue pr-2">
              <BsCheck2 />
            </div>
            <p className="font-bold text-lg text-kindly-blue">
              {challenge?.prompt}
            </p>
          </div>
          <div className="flex flex-row ">
            <div className="text-3xl text-kindly-blue pr-2 pt-1">
              <BsCheck2All />
            </div>
            <p className="font-semibold text-black">{challenge?.twist}</p>
          </div>
          <div className="card-actions justify-center">
            <div className="my-6 w-80 mx-3 sm:mx-0">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl text-black">Experience</h2>
              </div>
              <div className="flex flex-col items-center">
                <form action="#" method="post" className="w-full">
                  <textarea
                    className="w-full border-2 border-black rounded-lg p-3 h-32 text-black bg-kindly-offWhite"
                    value={textValue}
                    onChange={handleTextChange}
                    placeholder="Write your experience here..."
                  ></textarea>
                  <div className="text-right p-1 text-sm text-black">
                    {`${textValue.length} / 250`}
                  </div>
                </form>
              </div>
            </div>
            <button
              onClick={() => handleButtonClick(textValue)}
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

    case 'confirmation':
      cardBody = (
        <div className="card card-body bg-white">
          <div className="text-black text-center py-6">
            <p className="text-lg font-semibold leading-tight">
              {completion?.description}
            </p>
          </div>
        </div>
      );
      break;

    default:
      cardBody = null;
  }

  const image = (
    <div className="flex justify-center rounded-none">
      <img
        src={backendURL + '/challenge_images/' + challenge?.image}
        alt="Challenges"
        className="max-w-full"
      />{' '}
      {/* FIXME need to implement images on the backend */}
    </div>
  );

  return (
    <div
      className={`card card-compact sm:w-96 w-80 bg-base-100 rounded-none bg-white ${
        layoutType === 'completion' ? 'custom-class' : ''
      }`}
    >
      {image}
      {cardBody}
    </div>
  );
};

export default Card;
