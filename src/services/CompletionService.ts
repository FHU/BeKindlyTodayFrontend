import fancyFetch from './fetchData';

interface CompletionStats {
  user_completions_count: number;
  world_completions_count: number;
  world_daily_completions_count: number;
}

interface Completion {
  id: number;
  description: string;
  date: string;
  user_id: number;
  challenge_id: number;
  completed_twist: boolean;
}

async function makeNewCompletion(description: string) {
  return await fancyFetch('/completions', 'POST', {
    description,
  });
}
async function getAllCompletions(): Promise<Completion[]> {
  return await fancyFetch('/completions', 'GET');
}

async function getCompletionStats(): Promise<CompletionStats> {
  return await fancyFetch('/completions/stats', 'GET');
}

async function deleteCompletion(id: number) {
  return await await fancyFetch(`/completions/${id}}`, 'DELETE');
}

export {
  getAllCompletions,
  getCompletionStats,
  makeNewCompletion,
  deleteCompletion,
};
