import React, { useEffect, useState } from 'react';
import { getInstitutionDetails } from '../services/api';

const Affiliations = ({ institutionId }) => {
  const [affiliates, setAffiliates] = useState([]);

  useEffect(() => {
    const fetchAffiliates = async () => {
      try {
        const response = await getInstitutionDetails(institutionId);
        setAffiliates(response.data.affiliates);
      } catch (error) {
        console.error('Failed to fetch affiliates:', error);
      }
    };
    fetchAffiliates();
  }, [institutionId]);

  return (
    <div className="affiliations">
      <h1>Affiliates</h1>
      <ul>
        {affiliates.map((affiliate) => (
          <li key={affiliate._id}>
            <img src={affiliate.avatar} alt="User Avatar" />
            <p>{affiliate.name}</p>
            <p>{affiliate.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Affiliations;
