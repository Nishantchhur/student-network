import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../services/api';

const Profile = ({ userId }) => {
  const [profile, setProfile] = useState({});
  const [affiliates, setAffiliates] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUserProfile(userId);
        setProfile(response.data.profile);
        setAffiliates(response.data.affiliates);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };
    fetchProfile();
  }, [userId]);

  return (
    <div className="profile">
      <h1>{profile.name}</h1>
      
      {/* Verification Badge and Role */}
      {profile.verificationBadge && (
        <span className="verification-badge">Verified</span>
      )}
      <p>{profile.role}</p>
      
      <img src={profile.avatar} alt="Profile" />
      
      <h2>Affiliated Institutions:</h2>
      <ul>
        {affiliates.map((inst) => (
          <li key={inst._id}>{inst.name}</li>
        ))}
      </ul>

      {/* User Affiliation Information */}
      {profile.affiliation && (
        <div className="user-affiliation">
          <h3>Affiliated with:</h3>
          <p>{profile.affiliation.name}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
