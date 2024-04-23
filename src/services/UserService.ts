import fancyFetch from './fetchData';

async function getLoggedInUser() {
  return await fancyFetch('/users', 'GET');
}

async function updateUserBio(bio: string) {
  return await fancyFetch('/users/bio', 'PUT', { bio });
}

async function updateUserProfilePicture(profilePicture: string) {
  return await fancyFetch('/users/bio', 'PUT', { profilePicture });
}

async function updateUsername(username: string) {
  return await fancyFetch('/users/bio', 'PUT', { username });
}

export {
  updateUserBio,
  updateUserProfilePicture,
  updateUsername,
  getLoggedInUser,
};
