import React from 'react';
import './PostPage.css';

interface Post {
  title: string;
  content: string;
}

const PostPage: React.FC = () => {
  // Define a static post
  const post: Post = {
    title: "Sample Post",
    content: "This is a sample post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ac ipsum convallis rutrum."
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
