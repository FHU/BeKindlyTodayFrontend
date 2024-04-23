import fancyFetch from './fetchData';

interface User {
  bio?: string;
  id: number;
  kindId: string;
  profilePicture?: string;
  username?: string;
}

async function getLoggedInUser(): Promise<User> {
  return await fancyFetch('/users', 'GET');
}

async function updateUserBio(bio: string): Promise<User> {
  return await fancyFetch('/users/bio', 'PUT', { bio });
}

async function updateUserProfilePicture(profilePicture: string): Promise<User> {
  return await fancyFetch('/users/bio', 'PUT', { profilePicture });
}

async function updateUsername(username: string): Promise<User> {
  return await fancyFetch('/users/bio', 'PUT', { username });
}

export {
  updateUserBio,
  updateUserProfilePicture,
  updateUsername,
  getLoggedInUser,
};
