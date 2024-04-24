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

      <div className="w-fit">
        {/* Stats Section */}
        <div className="flex justify-center pb-6">
          <Stats />
        </div>
        <CountdownTimer />
        <div className="mx-auto w-fit">
          <h2 className="text-3xl py-3 text-white w-96 text-center font-extrabold bg-kindly-blue rounded-t-2xl">
            {completedChallenge ? "Completed Challenge" : "Today's Challenge"}
          </h2>
          <Card
            layoutType={currentPage}
            handleButtonClick={handleOnClick}
            completedChallenge={completedChallenge}
          />
        </div>
      </div>
      {currentPage === "confirmation" && <Feed />}
      <Footer />
    </div>
  );
};

export default Home;
