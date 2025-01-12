import React, { useEffect, useState } from 'react';
import { getStories } from '../services/api';

const Story = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await getStories();
        setStories(response.data.stories);
      } catch (error) {
        console.error('Failed to fetch stories:', error);
      }
    };
    fetchStories();
  }, []);

  return (
    <div className="story">
      <h1>Stories</h1>
      <div className="stories-container">
        {stories.map((story) => (
          <div className="story-card" key={story._id}>
            <img src={story.image} alt="Story" />
            <p>{story.user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
