import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Students Network</h1>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post._id}>
            <img src={post.image} alt="Post" />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
