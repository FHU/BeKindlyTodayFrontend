import fancyFetch from "./fetchData";

/**
 * The shape of the users being returned from the backend
 */
export interface User {
  bio?: string;
  id: number;
  kindId: string;
  profilePicture?: string;
  username?: string;
}

interface UserStats {
  user_completions_count: number;
  user_streak: number;
}

/**
 * A function to fetch the user information from our backend for the current logged in user
 * @returns Our backend information for the current logged in user
 */
async function getLoggedInUser(token: string): Promise<User> {
  return await fancyFetch({ endpoint: "/users", method: "GET", token });
}

/**
 * A function to get a user by their ID
 * @param id the ID of the user in our backend
 * @returns Promise<User>
 */
async function getUserByID(id: number, token: string): Promise<User> {
  return await fancyFetch({ endpoint: `/users/${id}`, method: "GET", token });
}

/**
 * A function to change the currently logged in users bio in the backend
 * @param bio The bio to be updated to
 * @returns the new user object
 */
async function updateUserBio(bio: string, token: string): Promise<User> {
  return await fancyFetch({
    endpoint: "/users/bio",
    method: "PUT",
    data: { bio },
    token,
  });
}

/**
 * A function to change the profile picture of the logged in user in the backend
 * @param profilePicture the profile pictures name to be updated to
 * @returns the new user object
 */
async function updateUserProfilePicture(
  profilePicture: string,
  token: string
): Promise<User> {
  return await fancyFetch({
    endpoint: "/users/profilepicture",
    method: "PUT",
    data: { profilePicture },
    token,
  });
}

/**
 * A function to change the username of the logged in user in the backend
 * @param username the new username
 * @returns the new user object
 */
async function updateUsername(username: string, token: string): Promise<User> {
  return await fancyFetch({
    endpoint: "/users/username",
    method: "PUT",
    data: { username },
    token,
  });
}

async function getUserStats(token: string): Promise<UserStats> {
  return await fancyFetch({
    endpoint: "/users/stats",
    method: "GET",
    token,
  });
}

export {
  updateUserBio,
  updateUserProfilePicture,
  updateUsername,
  getLoggedInUser,
  getUserByID,
  getUserStats,
};
