import React, { useState, useEffect } from "react";
import Navbar from "../components/Nav";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import CountdownTimer from "../components/Timer";
import Card from "../components/Card";
import Feed from "../components/Feed";
import {
  getTodaysCompletion,
  getAllCompletionsToday,
  getCompletionStats,
  getTodaysChallenge,
  CompletionStats,
  Completion,
  CompletionUser,
  Challenge,
  makeNewCompletion,
  getLoggedInUser,
  updateUsername,
  updateUserProfilePicture,
  User,
} from "../services";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "home" | "completion" | "confirmation"
  >();
  const [completionStats, setCompletionStats] = useState<
    CompletionStats | undefined
  >();
  const [completion, setCompletion] = useState<Completion | null>(null);
  const [todaysCompletions, setTodaysCompletions] = useState<CompletionUser[]>(
    []
  );

  const [challenge, setChallenge] = useState<Challenge>();

  const [savedToken, setSavedToken] = useState<string | undefined>();

  const { getToken, isAuthenticated, isLoading, getUser } = useKindeAuth();

  const [showLogin, setShowLogin] = useState(true);

  const [backendUser, setBackendUser] = useState<User | undefined>();

  useEffect(() => {
    getTodaysChallenge().then((challenge) => setChallenge(challenge));
    if (isAuthenticated) {
      setShowLogin(false);
      getToken().then((token): void => {
        if (token !== undefined) {
          if (backendUser === undefined) {
            getLoggedInUser(token).then((user) => {
              const kindeUser = getUser();
              if (user.username === null) {
                const username = `${kindeUser.given_name}.${kindeUser.family_name}`;
                const profilePicture = "images/Blue_Profile.png";
                updateUsername(username, token);
                updateUserProfilePicture(profilePicture, token);
              }
              setBackendUser(user);
            });
          }
          setSavedToken(token);
          getTodaysCompletion(token).then((completion) => {
            setCompletion(completion);
            if (completion !== null) {
              getAllCompletionsToday(token).then((completions) => {
                setTodaysCompletions(completions);
              });
            }
          });
        }
        getCompletionStats(token).then((stats) => setCompletionStats(stats));
      });
    } else {
      getCompletionStats().then((stats) => setCompletionStats(stats));
    }
  }, [isLoading]);

  // Update current page based on completedChallenge
  useEffect(() => {
    const page = completion !== null ? "confirmation" : "home";
    setCurrentPage(page);
  }, [completion]);

  const handleOnClick = (description?: string) => {
    if (currentPage === "home") {
      setCurrentPage("completion");
    } else if (currentPage === "completion") {
      if (savedToken !== undefined) {
        if (description !== undefined) {
          makeNewCompletion(description, savedToken).then(
            (completion): void => {
              setCompletion(completion);
            }
          );
        }
        getAllCompletionsToday(savedToken).then((completions) => {
          setTodaysCompletions(completions);
          if (completionStats) {
            const new_completion_stats: CompletionStats = {
              user_completions_count:
                completionStats.user_completions_count + 1,
              world_completions_count:
                completionStats.world_completions_count + 1,
              world_daily_completions_count:
                completionStats.world_daily_completions_count + 1,
            };
            setCompletionStats(new_completion_stats);
          }
        });
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-10 items-center justify-between bg-kindly-offWhite min-h-screen">
      <Navbar showLogin={showLogin} />
      <div className="w-fit">
        {/* Stats Section */}
        <div className="flex justify-center pb-6">
          <Stats stats={completionStats} />
        </div>
        <CountdownTimer />
        <div className="mx-auto w-fit ">
          <h2 className="text-2xl sm:text-3xl py-3 rounded-t-xl text-white sm:w-96 w-80 text-center font-extrabold bg-kindly-blue ">
            {completion !== undefined
              ? "Completed Challenge"
              : "Today's Challenge"}
          </h2>
          <div className="rounded-b-none">
            <Card
              layoutType={currentPage}
              handleButtonClick={handleOnClick}
              challenge={challenge}
              completion={completion}
            />
          </div>
        </div>
      </div>
      <div
        className={
          "bg-kindly-offWhite text-black " +
          (currentPage !== "confirmation" ? "hidden" : "")
        }
      >
        {currentPage === "confirmation" &&
          todaysCompletions
            .filter(
              (completion_user) => completion_user.user_id !== backendUser?.id
            )
            .map((completion_user) => {
              return <Feed completion={completion_user} />;
            })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
