interface UserFeed {
  user: string;
  profilePic: string;
  kindness: string;
}

function Feed() {
  const userfeed: UserFeed = {
    user: "Tucker.Brown",
    profilePic:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    kindness: "Did not underestimate Kaylee's power today.",
  };

  return (
    <div className="bg-kindly-offWhite">
      <div className="chat chat-start bg-kindly-offWhite">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={userfeed.profilePic}
            />
          </div>
        </div>
        <div className="chat-header">{userfeed.user}</div>
        <div
          className="chat-bubble shadow-md bg-white"
          style={{ width: "23rem" }}
        >
          {userfeed.kindness}
        </div>
      </div>
    </div>
  );
}

export default Feed;
