import React, { useState, useEffect } from "react";
import Navbar from "../components/Nav";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import CountdownTimer from "../components/Timer";
import Card from "../components/Card";
import Feed from "../components/Feed";
import {
  getTodaysCompletion,
  getCompletionStats,
  getTodaysChallenge,
  CompletionStats,
  Completion,
  Challenge,
  makeNewCompletion,
} from "../services";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "home" | "completion" | "confirmation"
  >();
  const [completedChallenge, setCompletedChallenge] = useState<boolean>(false);
  const [completionStats, setCompletionStats] = useState<
    CompletionStats | undefined
  >();
  const [completion, setCompletion] = useState<Completion | undefined>();

  const [challenge, setChallenge] = useState<Challenge>();

  const [savedToken, setSavedToken] = useState<string | undefined>();

  const { getToken, isAuthenticated } = useKindeAuth();

  useEffect(() => {
    getTodaysChallenge().then((challenge) => setChallenge(challenge));
    if (isAuthenticated) {
      getToken().then((token) => {
        if (token !== undefined) {
          setSavedToken(token);
          getTodaysCompletion(token).then((completion) =>
            setCompletion(completion)
          );
        }
        getCompletionStats(token).then((stats) => setCompletionStats(stats));
      });
    }
  }, []);

  // Update current page based on completedChallenge
  useEffect(() => {
    const page = completion !== undefined ? "confirmation" : "home";
    setCurrentPage(page);
  }, [completion]);

  const handleOnClick = (description?: string) => {
    if (currentPage === "home") {
      setCurrentPage("completion");
    } else if (currentPage === "completion") {
      description !== undefined &&
        savedToken !== undefined &&
        makeNewCompletion(description, savedToken).then((completion): void => {
          setCompletion(completion);
          setCompletedChallenge(true);
        });
    }
  };

  return (
    <div className="flex flex-col gap-y-10 items-center justify-between bg-kindly-offWhite min-h-screen">
      <Navbar />
      <div className="w-fit">
        {/* Stats Section */}
        <div className="flex justify-center pb-6">
          <Stats stats={completionStats} />
        </div>
        <CountdownTimer />
        <div className="mx-auto w-fit">
          <h2 className="text-3xl py-3 text-white sm:w-96 w-80 text-center font-extrabold bg-kindly-blue rounded-t-2xl">
            {completedChallenge ? "Completed Challenge" : "Today's Challenge"}
          </h2>
          <Card
            layoutType={currentPage}
            handleButtonClick={handleOnClick}
            challenge={challenge}
            completion={completion}
          />
        </div>
      </div>
      {currentPage === "confirmation" && <Feed />}
      <Footer />
    </div>
  );
};

export default Home;
