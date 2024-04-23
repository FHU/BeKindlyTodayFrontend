import fancyFetch from './fetchData';

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

async function getTodaysChallenge(): Promise<Challenge> {
  return await fancyFetch('/challenges/today', 'GET');
}

export { getTodaysChallenge };
