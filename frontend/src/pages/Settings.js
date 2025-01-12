import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../services/api';

const Settings = ({ userId }) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUserProfile(userId);
        setProfile(response.data.profile);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };
    fetchProfile();
  }, [userId]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(userId, profile);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" required />
      <textarea name="bio" value={profile.bio} onChange={handleChange} placeholder="Bio" />
      <button type="submit">Update</button>
    </form>
  );
};

export default Settings;
