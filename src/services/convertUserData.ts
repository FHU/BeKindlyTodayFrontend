import { User } from "./UserService";

export default function parseUser(
  user: User,
  firstname: string,
  lastname: string
): User {
  const username = user.username || `${firstname}.${lastname}`;

  const profilePicture = user.profilePicture || "images/Blue_Profile.png";

  const bio = user.bio || "";

  const updated_user = { ...user, username, profilePicture, bio };

  return updated_user;
}
