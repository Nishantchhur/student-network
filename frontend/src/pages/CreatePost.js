import React, { useState } from 'react';
import { createPost } from '../services/api';

const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('image', image);

    try {
      await createPost(formData);
      alert('Post created successfully!');
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Caption" />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
