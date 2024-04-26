import fancyFetch from "./fetchData";

/** The shape of the challenges returned from the backend */
interface Challenge {
  date: string;
  id: number;
  image: string;
  promt: string;
  rating: number;
  source: string;
  spanishPrompt: string;
  spanishTwist: string;
  suggestion: string;
  twist: string;
}

/**
 * A function to get todays challenge from the backend
 * @returns Promise<Challenge>
 */
async function getTodaysChallenge(): Promise<Challenge> {
  return await fancyFetch({ endpoint: "/challenges/today", method: "GET" });
}

export { getTodaysChallenge };
