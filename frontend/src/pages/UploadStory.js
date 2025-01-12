import React, { useState } from 'react';
import { uploadStory } from '../services/api';

const UploadStory = () => {
  const [storyImage, setStoryImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', storyImage);

    try {
      await uploadStory(formData);
      alert('Story uploaded successfully!');
    } catch (error) {
      console.error('Failed to upload story:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setStoryImage(e.target.files[0])} required />
      <button type="submit">Upload Story</button>
    </form>
  );
};

export default UploadStory;
