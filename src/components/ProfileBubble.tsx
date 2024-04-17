const ProfileBubble = () => {
  return (
    <div className="flex items-center space-x-2 ">
      <div className="w-12 h-12 rounded-full bg-gray-300"></div>{' '}
      {/* Placeholder for profile picture */}
      <div className="bg-gray-300 px-12 py-1 rounded-lg">
        <p className="text-xl text-gray-700">Tucker</p>{' '}
        {/* Placeholder for name tag */}
      </div>
    </div>
  );
};

export default ProfileBubble;
