import React, { useState, useEffect } from "react";
import Navbar from "../components/Nav";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import CountdownTimer from "../components/Timer";
import Card from "../components/Card";
import Feed from "../components/Feed";
import { getHasCompleted } from "../services/CompletionService";

// import { userInput } from '../components/Card';

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "home" | "completion" | "confirmation"
  >();
  const [completedChallenge, setCompletedChallenge] = useState<boolean>(false);

  // Set completedChallenge using the getHasCompleted Service
  useEffect(() => {
    (async () => {
      const completion_response = await getHasCompleted();
      setCompletedChallenge(completion_response.completed);
    })();
  }, []);

  // Update current page based on completedChallenge
  useEffect(() => {
    const page = completedChallenge ? "confirmation" : "home";
    setCurrentPage(page);
  }, [completedChallenge]);

  const handleConfirmationButtonClick = () => {
    setCurrentPage("confirmation");
  };

  const handleOnClick = () => {
    if (currentPage === "home") {
      setCurrentPage("completion");
    } else if (currentPage === "completion") {
      setCompletedChallenge(true);
    }
  };

  return (
    <div className="flex flex-col gap-y-10 items-center bg-kindly-offWhite">
      <Navbar />

      {/* Conditional Rendering based on currentPage */}
      {currentPage === "home" && (
        <div>
          {/* Stats Section */}
          <div className="flex justify-center pb-6">
            <Stats />
          </div>
          <CountdownTimer />
          <h2 className="text-3xl py-3 text-white text-center font-extrabold bg-kindly-blue rounded-t-2xl">
            Today's Challenge
          </h2>
          <Card
            layoutType={currentPage}
            handleButtonClick={handleOnClick}
            completedChallenge={completedChallenge}
          />
        </div>
      )}
      {currentPage === "completion" && (
        <div className="flex flex-col gap-y-10 items-center text-black bg-kindly-offWhite">
          <div className="flex flex-col items-center gap-4 pb-10 bg-kindly-backgroundColor">
            {/* Stats Section */}
            <CountdownTimer />
            <div>
              <h2 className="text-3xl py-3 text-white text-center font-extrabold bg-kindly-blue rounded-t-2xl">
                Today's Challenge
              </h2>
              <Card
                layoutType="completion"
                handleButtonClick={handleOnClick}
                completedChallenge={completedChallenge}
              />
            </div>
          </div>
        </div>
      )}
      {currentPage === "confirmation" && (
        <div className="flex flex-col gap-y-10 items-center pb-10 bg-kindly-offWhite">
          <Stats />
          <div>
            <h2 className="text-3xl py-3 text-white text-center font-extrabold bg-kindly-blue rounded-t-2xl">
              Completed Challenge
            </h2>
            <Card
              layoutType="confirmation"
              handleButtonClick={handleConfirmationButtonClick}
              completedChallenge={completedChallenge}
            />
          </div>
          <Feed />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
