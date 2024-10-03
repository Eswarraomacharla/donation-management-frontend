import React, { useState } from 'react';
import '../styles/DonorDashboard.css';
import Header from '../components/Header';

const DonorDashboard = () => {
  const [activeSection, setActiveSection] = useState('items');

  const renderSection = () => {
    switch (activeSection) {
      case 'items':
        return (
          <section className="section items-list">
            <h2>Items Available for Donation</h2>
            <ul>
              <li>
                <span className="item-description">Winter Clothes for Children</span>
                <button className="button">Donate Now</button>
              </li>
              <li>
                <span className="item-description">School Supplies for Underprivileged Kids</span>
                <button className="button">Donate Now</button>
              </li>
              <li>
                <span className="item-description">Food Supplies for Local Shelters</span>
                <button className="button">Donate Now</button>
              </li>
            </ul>
          </section>
        );
      case 'track':
        return (
          <section className="section track-donations">
            <h2>Track Your Donations</h2>
            <ul>
              <li>
                <span className="item-description">Winter Clothes for Children</span>
                <span className="status">Status: Shipped</span>
                <button className="track-button">Track</button>
              </li>
              <li>
                <span className="item-description">School Supplies for Underprivileged Kids</span>
                <span className="status">Status: In Process</span>
                <button className="track-button">Track</button>
              </li>
              <li>
                <span className="item-description">Food Supplies for Local Shelters</span>
                <span className="status">Status: Delivered</span>
                <button className="track-button">Track</button>
              </li>
            </ul>
          </section>
        );
      case 'emergency':
        return (
          <section className="section emergency-drives">
            <h2>Participate in Emergency Drives</h2>
            <ul>
              <li>
                <span className="item-description">Flood Relief Fund</span>
                <button className="participate-button">Participate</button>
              </li>
              <li>
                <span className="item-description">Earthquake Recovery Support</span>
                <button className="participate-button">Participate</button>
              </li>
              <li>
                <span className="item-description">Wildfire Emergency Aid</span>
                <button className="participate-button">Participate</button>
              </li>
            </ul>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="donor-dashboard dashboard-container">
      <Header />
      <aside className="sidebar">
        <nav>
          <ul>
            <li onClick={() => setActiveSection('items')} className={activeSection === 'items' ? 'active' : ''}>
              List Items for Donation
            </li>
            <li onClick={() => setActiveSection('track')} className={activeSection === 'track' ? 'active' : ''}>
              Track Donations
            </li>
            <li onClick={() => setActiveSection('emergency')} className={activeSection === 'emergency' ? 'active' : ''}>
              Participate in Emergency Drives
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        {renderSection()}
        {/* New Section for Donor List */}
        <section className="section donor-list">
          <h2>Recent Donors</h2>
          <ul>
            <li>John Doe - Donated Winter Clothes</li>
            <li>Jane Smith - Donated School Supplies</li>
            <li>Emily Johnson - Donated Food Supplies</li>
            <li>Michael Brown - Participated in Flood Relief Fund</li>
          </ul>
        </section>

        {/* Motivational Section */}
        <section className="section motivation">
          <h2>Your Contribution Makes a Difference</h2>
          <p>
            Every donation helps us bring a smile to those in need. Together, we can make the world a better place by ensuring that 
            basic necessities like food, clothing, and shelter reach those who need them the most. Whether it's supporting emergency 
            relief efforts or helping underprivileged children with school supplies, your generosity truly changes lives.
          </p>
          <p>Let's continue to give back and spread kindness. Thank you for making a difference!</p>
        </section>
      </main>
    </div>
  );
};

export default DonorDashboard;
