import { CompletionUser } from "../services";

interface Props {
  completion: CompletionUser;
}

const Feed = ({ completion }: Props) => {
  return (
    <div className="chat chat-start bg-kindly-offWhite">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={completion.user.profilePicture}
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
  );
};

export default Feed;
