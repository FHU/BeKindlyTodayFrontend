import React from 'react';
import './index.css';
import './PostPage.css';
import { CiCalendar } from "react-icons/ci";

interface Post {
  challenge: string;
}

const PostPage: React.FC = () => {
  // Define a static post
  const post: Post = {
    challenge: "Send a text to a loved one to show your appreciation."
  };

  return (
    // Top-Parent Container
    <div className="flex flex-col gap-10 justify-between items-center">
        {/* Header */}
        <div className="flex w-full h-24 text-2xl justify-between items-center" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>
            <img src={'src/assets/logo.png'} alt="Centered Image" style={{ width: '65px', height: '65px' }} />
            <h1>BeKindly</h1>
            <div className="flex items-center">
                <div className="text-6xl text-black"><CiCalendar /></div>
                <div className="rounded-full bg-slate-100 p-7"></div>
            </div>
        </div>

        {/* Timer */}
        <div className="border-2 px-10 py-2 border-black rounded-lg font-bold">
            <h2 className="text-2xl">00:00:00</h2>
        </div>

        {/* Challenge */}
        <div>
            <h2 className="text-2xl">Challenge</h2>
            <p>{post.challenge}</p>
        </div>

        {/* Experience */}
        <div>
            <form action="#" method="post" className="flex flex-col">
                <label className="text-2xl" form="experience">Experience</label>
                <textarea className="border-2 border-black rounded-lg p-2 w-80 h-40" id="free-response" name="free-response"></textarea>
            </form>
        </div>

        {/* Post */}
        <div className="px-11 py-4 rounded-lg" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>
            <h2>Post</h2>
        </div>
    </div>
  );
};

export default PostPage;
