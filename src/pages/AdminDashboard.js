import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/AdminDashboard.css'; // Ensure to create this CSS file for styling

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <Header />
      <div className="dashboard-content">
        <nav className="sidebar">
          <h3 className="sidebar-title">Admin Menu</h3>
          <ul className="sidebar-menu">
            <li>
              <Link to="/admin/manage-donations" className="sidebar-link">Manage Donations</Link>
            </li>
            <li>
              <Link to="/admin/manage-users" className="sidebar-link">Manage Users</Link>
            </li>
            <li>
              <Link to="/admin/report-issues" className="sidebar-link">Report Issues</Link>
            </li>
            <li>
              <Link to="/admin/view-reports" className="sidebar-link">View Reports</Link>
            </li>
            <li>
              <Link to="/admin/settings" className="sidebar-link">Settings</Link>
            </li>
            <li>
              <Link to="/admin/logout" className="sidebar-link">Logout</Link>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <h2>Welcome to the Admin Dashboard</h2>
          <p>Select an option from the menu to get started.</p>
          {/* Add more components or content here as needed */}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
