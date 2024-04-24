function Feed() {
  return (
    <div className="bg-kindly-offWhite text-black">
      <div className="chat chat-start bg-kindly-offWhite">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="images/Blue_Profile.png"
            />
          </div>
        </div>
        <div className="chat-header text-black">Tucker.Brown</div>
        <div
          className="chat-bubble shadow-md bg-white text-black"
          style={{ width: '23rem' }}
        >
          I had a great time completing this kind experience and I would love to
          do it again.
        </div>
      </div>

      <div className="chat chat-start bg-kindly-offWhite">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="images/Yellow_Profile.png"
            />
          </div>
        </div>
        <div className="chat-header text-black">Avery.Harris</div>
        <div
          className="chat-bubble shadow-md bg-white text-black"
          style={{ width: '23rem' }}
        >
          This was one of my first challenges and it was such a great
          experience. I can't wait to do another one!
        </div>
      </div>

      <div className="chat chat-start bg-kindly-offWhite">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="images/Purple_Profile.png"
            />
          </div>
        </div>
        <div className="chat-header text-black">Priscilla.Harris</div>
        <div
          className="chat-bubble shadow-md bg-white text-black"
          style={{ width: '23rem' }}
        >
          I had such a fun time doing this challenge. I can't wait to tell all
          my friends about this app!
        </div>
      </div>
    </div>
  );
}

export default Feed;
