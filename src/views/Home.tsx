import React, { useState, useEffect } from "react";
import Navbar from "../components/Nav";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import CountdownTimer from "../components/Timer";
import Card from "../components/Card";
import Feed from "../components/Feed";
import {
  getHasCompleted,
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

  const [token, setToken] = useState<string | undefined>();

  const { getToken, isAuthenticated } = useKindeAuth();

  useEffect(() => {
    isAuthenticated && getToken().then((token) => setToken(token));
  });

  useEffect(() => {
    getCompletionStats(token).then((stats) => setCompletionStats(stats));
    getTodaysChallenge().then((challenge) => setChallenge(challenge));
    if (token === undefined) return;
    getHasCompleted(token).then((response) =>
      setCompletedChallenge(response.completed)
    );
    console.log(token);
  }, []);

  // Update current page based on completedChallenge
  useEffect(() => {
    const page = completedChallenge ? "confirmation" : "home";
    setCurrentPage(page);
  }, [completedChallenge]);

  const handleOnClick = (description?: string) => {
    if (currentPage === "home") {
      setCurrentPage("completion");
    } else if (currentPage === "completion") {
      description !== undefined &&
        token !== undefined &&
        makeNewCompletion(description, token).then((completion): void => {
          console.log(completion);
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
          <h2 className="text-3xl py-3 text-white md:w-96 w-80 text-center font-extrabold bg-kindly-blue rounded-t-2xl">
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
