import fancyFetch from './fetchData';

async function getTodaysChallenge() {
  return await fancyFetch('/challenges/today', 'GET');
}

export { getTodaysChallenge };
