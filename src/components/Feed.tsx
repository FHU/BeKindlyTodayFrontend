import { CompletionUser } from "../services";

interface Props {
  completion: CompletionUser;
}

const Feed = ({ completion }: Props) => {
  const user_profile_picture =
    completion.user.profilePicture || "images/Default_Profile.png";

  return (
    <div className="items-end w-3/5 sm:w-96 sm:overflow-x-hidden">
      <div className="chat chat-start bg-kindly-offWhite">
        {/* avatar image */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={user_profile_picture}
            />
          </div>
        </div>
        {/* username */}
        <div className="chat-header text-black">{completion.user.username}</div>
        {/* chat bubble */}
        <div
          className="chat-bubble shadow-md bg-white text-black"
        >
          {completion.description}
        </div>
      </div>
    </div>
  );
};

export default Feed;
