import React, { useEffect, useState } from 'react';
import { getUsers, getReports, banUser } from '../services/api';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const usersResponse = await getUsers();
        const reportsResponse = await getReports();
        setUsers(usersResponse.data.users);
        setReports(reportsResponse.data.reports);
      } catch (error) {
        console.error('Failed to load admin data:', error);
      }
    };
    fetchAdminData();
  }, []);

  const handleBanUser = async (userId) => {
    try {
      await banUser(userId);
      alert('User banned successfully.');
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Failed to ban user:', error);
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.role})
            <button onClick={() => handleBanUser(user._id)}>Ban</button>
          </li>
        ))}
      </ul>

      <h2>Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            Reported Content: {report.contentId} - {report.reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
