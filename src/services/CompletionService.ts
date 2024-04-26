import fancyFetch from "./fetchData";

/** The shape of the stats returned from the backend */
export interface CompletionStats {
  user_completions_count: number;
  world_completions_count: number;
  world_daily_completions_count: number;
}

/**The shape of the completions returned from the backend */
export interface Completion {
  id: number;
  description: string;
  date: string;
  user_id: number;
  challenge_id: number;
  completed_twist: boolean;
}

/**
 * A function to make a new completion in the backend
 * @param description The content of the post to be persistend in the backend
 * @returns Promise<Completion>
 */
async function makeNewCompletion(
  description: string,
  token: string
): Promise<Completion> {
  return await fancyFetch({
    endpoint: "/completions",
    method: "POST",
    data: {
      description,
    },
    token: token,
  });
}

/**
 * A function to get all completions from the backend
 * @returns Promise<Completion[]> (array of all completions in backend)
 */
async function getAllCompletions(token: string): Promise<Completion[]> {
  return await fancyFetch({ endpoint: "/completions", method: "GET", token });
}

/**
 * A function to get the completion stats for the logged in user
 * @returns Promise<CompletionStats>The completion stats for the current logged in user for the day
 */
async function getCompletionStats(token?: string): Promise<CompletionStats> {
  return await fancyFetch({
    endpoint:
      token === undefined ? "/completions/unauth_stats" : "/completions/stats",
    method: "GET",
    token,
  });
}

/**
 * A function to delete completions from the backend
 * @param id the id of the completion to delete
 * @returns nothing :)
 */
async function deleteCompletion(id: number, token: string) {
  return await await fancyFetch({
    endpoint: `/completions/${id}}`,
    method: "DELETE",
    token,
  });
}

/**
 * A function to get a boolean that is true if the logged in user has completed today's challenge
 * @returns Promise<CompletionStatus>The state of the current challenge for the logged in user
 */
async function getTodaysCompletion(token: string): Promise<Completion> {
  return await fancyFetch({
    endpoint: "/completions/today",
    method: "GET",
    token,
  });
}

export {
  getAllCompletions,
  getCompletionStats,
  makeNewCompletion,
  deleteCompletion,
  getTodaysCompletion,
};
