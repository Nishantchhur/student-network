import React, { useEffect, useState } from 'react';
import { getInstitutions } from '../services/api';

const Institutions = () => {
  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await getInstitutions();
        setInstitutions(response.data.institutions);
      } catch (error) {
        console.error('Failed to fetch institutions:', error);
      }
    };
    fetchInstitutions();
  }, []);

  return (
    <div className="institutions">
      <h1>Institutions</h1>
      <ul>
        {institutions.map((inst) => (
          <li key={inst._id}>
            <img src={inst.logo} alt="Institution Logo" />
            <p>{inst.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Institutions;
