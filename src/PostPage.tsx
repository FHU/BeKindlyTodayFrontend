import React from 'react';
import './index.css';
import './PostPage.css';
import 'daisyui/dist/full.css';
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
    <div className="flex flex-col gap-y-10 items-center">
        {/* Header */}
        <div className="flex w-full h-24 text-2xl px-5 justify-between items-center" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>
            <img src={'src/assets/logo.png'} alt="Centered Image" style={{ width: '65px', height: '65px' }} />
            <h1>BeKindly</h1>
            <div className="flex items-center">
                <div className="text-6xl text-black"><CiCalendar /></div>
                <div className="rounded-full bg-slate-100 p-7"></div>
            </div>
        </div>

        {/* Main */}
        <div className="flex flex-col items-center gap-4">
        {/* Timer */}
            <div className="flex justify-center border-2 w-40 py-2 border-black rounded-lg font-bold">
                <h2 className="text-2xl">00:00:00</h2>
            </div>

            {/* Challenge */}
            <h2 className="text-2xl self-start">Challenge</h2>
            <div className="p-6 mb-10" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>
                <p>{post.challenge}</p>
            </div>

            {/* Experience */}
            <h2 className="text-2xl self-start">Experience</h2>
            <div className="mb-20">
                <form action="#" method="post" className="flex flex-col">
                        <textarea className="w-96 border-2 border-black rounded-lg p-2 h-40"></textarea>
                </form>
            </div>

            {/* Post */}
            <div className="px-11 py-4 rounded-lg" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>
                <h2>Post</h2>
            </div>
        </div>
        </div>
  );
};

export default PostPage;
