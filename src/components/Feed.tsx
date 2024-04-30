import { CompletionUser } from "../services";

interface Props {
  completion: CompletionUser;
}

const Feed = ({ completion }: Props) => {
  const user_profile_picture =
    completion.user.profilePicture || "images/Default_Profile.png";

  return (
    <div className="sm:items-start">
      <div className="chat chat-start bg-kindly-offWhite w-96 sm:w-80">
        <div className="chat-image avatar">
          <div className="w-10 sm:w-7  rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={user_profile_picture}
            />
          </div>
        </div>
        <div className="chat-header text-black">{completion.user.username}</div>
        <div
          className="chat-bubble shadow-md bg-white text-black"
          style={{ width: "23rem" }}
        >
          {completion.description}
        </div>
      </div>
    </div>
  );
};

export default Feed;
