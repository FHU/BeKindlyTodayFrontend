import fancyFetch from "./fetchData";

/** The shape of the stats returned from the backend */
interface CompletionStats {
  user_completions_count: number;
  world_completions_count: number;
  world_daily_completions_count: number;
}

/**The shape of the completions returned from the backend */
interface Completion {
  id: number;
  description: string;
  date: string;
  user_id: number;
  challenge_id: number;
  completed_twist: boolean;
}

interface CompletionStatus {
  completed: boolean;
}

/**
 * A function to make a new completion in the backend
 * @param description The content of the post to be persistend in the backend
 * @returns Promise<Completion>
 */
async function makeNewCompletion(description: string): Promise<Completion> {
  return await fancyFetch("/completions", "POST", {
    description,
  });
}

/**
 * A function to get all completions from the backend
 * @returns Promise<Completion[]> (array of all completions in backend)
 */
async function getAllCompletions(): Promise<Completion[]> {
  return await fancyFetch("/completions", "GET");
}

/**
 * A function to get the completion stats for the logged in user
 * @returns Promise<CompletionStats>The completion stats for the current logged in user for the day
 */
async function getCompletionStats(): Promise<CompletionStats> {
  return await fancyFetch("/completions/stats", "GET");
}

/**
 * A function to delete completions from the backend
 * @param id the id of the completion to delete
 * @returns nothing :)
 */
async function deleteCompletion(id: number) {
  return await await fancyFetch(`/completions/${id}}`, "DELETE");
}

/**
 * A function to get a boolean that is true if the logged in user has completed today's challenge
 * @returns Promise<CompletionStatus>The state of the current challenge for the logged in user
 */
async function getHasCompleted(): Promise<CompletionStatus> {
  return await fancyFetch("/completions/has_completed", "GET");
}

export {
  getAllCompletions,
  getCompletionStats,
  makeNewCompletion,
  deleteCompletion,
  getHasCompleted,
};
