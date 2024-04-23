import fancyFetch from './fetchData';

/**
 * The shape of the users being returned from the backend
 */
interface User {
  bio?: string;
  id: number;
  kindId: string;
  profilePicture?: string;
  username?: string;
}

/**
 * A function to fetch the user information from our backend for the current logged in user
 * @returns Our backend information for the current logged in user
 */
async function getLoggedInUser(): Promise<User> {
  return await fancyFetch('/users', 'GET');
}

/**
 * A function to get a user by their ID
 * @param id the ID of the user in our backend
 * @returns Promise<User>
 */
async function getUserByID(id: number): Promise<User> {
  return await fancyFetch(`/users/${id}`, 'GET');
}

/**
 * A function to change the currently logged in users bio in the backend
 * @param bio The bio to be updated to
 * @returns the new user object
 */
async function updateUserBio(bio: string): Promise<User> {
  return await fancyFetch('/users/bio', 'PUT', { bio });
}

/**
 * A function to change the profile picture of the logged in user in the backend
 * @param profilePicture the profile pictures name to be updated to
 * @returns the new user object
 */
async function updateUserProfilePicture(profilePicture: string): Promise<User> {
  return await fancyFetch('/users/bio', 'PUT', { profilePicture });
}

/**
 * A function to change the username of the logged in user in the backend
 * @param username the new username
 * @returns the new user object
 */
async function updateUsername(username: string): Promise<User> {
  return await fancyFetch('/users/bio', 'PUT', { username });
}

export {
  updateUserBio,
  updateUserProfilePicture,
  updateUsername,
  getLoggedInUser,
  getUserByID,
};
