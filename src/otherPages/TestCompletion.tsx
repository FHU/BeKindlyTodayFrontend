import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Nav';
import CountdownTimer from '../components/Timer';
import Card from '../components/Card';

const TestCompletion: React.FC = () => {
  const [textValue, setTextValue] = useState('');

  const handleTextChange = (event: { target: { value: string } }) => {
    setTextValue(event.target.value.slice(0, 250));
  };

  return (
    <div className="flex flex-col gap-y-10 items-center text-black bg-kindly-offWhite">
      <Navbar />
      <div className="flex flex-col items-center gap-4 pb-10 bg-kindly-backgroundColor">
        <CountdownTimer />
        <div>
          <h2 className="text-3xl pb-2 text-black text-center font-extrabold">
            Today's Challenge
          </h2>
          <Card
            handleButtonClick={() => console.log('Clicked')}
            layoutType={'home'}
          />
        </div>
        <div className="my-6">
          <h2 className="text-2xl self-start">Experience</h2>
          <div className="relative">
            <form action="#" method="post" className="flex flex-col">
              <textarea
                className="w-96 border-2 border-black rounded-lg p-3 h-32 bg-kindly-offWhite"
                value={textValue}
                onChange={handleTextChange}
              ></textarea>
            </form>
          </div>
          <div className="text-right p-1 text-sm">
            {`${textValue.length} / 250`}
          </div>
        </div>
        {/* Update Link to point to TestConfirmation page */}
        <Link to={`/testconfirmation?text=${encodeURIComponent(textValue)}`}>
          <div className="btn btn-lg rounded-lg text-xl bg-kindly-blue text-white text-center border-none transition-colors duration-300 hover:bg-kindly-royalBlue">
            <h2>Complete</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TestCompletion;
