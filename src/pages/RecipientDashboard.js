import React from 'react';
import Header from '../components/Header';
import '../styles/RecipientDashboard.css';

const RecipientDashboard = () => {
  return (
    <div className="recipient-dashboard">
      <Header />

      {/* Request Necessary Items Section */}
      <section className="section request-items">
        <h2>Request Necessary Items</h2>
        <form>
          <div className="form-group">
            <label htmlFor="item-name">Item Name:</label>
            <input type="text" id="item-name" placeholder="Enter the item you need" />
          </div>
          <div className="form-group">
            <label htmlFor="item-quantity">Quantity:</label>
            <input type="number" id="item-quantity" placeholder="Enter quantity" />
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason for Request:</label>
            <textarea id="reason" rows="4" placeholder="Explain why you need this item"></textarea>
          </div>
          <button type="submit" className="button">Submit Request</button>
        </form>
      </section>

      {/* Track Delivery Section */}
      <section className="section track-delivery">
        <h2>Track Your Delivery</h2>
        <ul>
          <li>
            <span className="item-description">Winter Clothes</span>
            <span className="status">Status: Shipped</span>
            <button className="track-button">Track</button>
          </li>
          <li>
            <span className="item-description">School Supplies</span>
            <span className="status">Status: In Process</span>
            <button className="track-button">Track</button>
          </li>
          <li>
            <span className="item-description">Food Supplies</span>
            <span className="status">Status: Delivered</span>
            <button className="track-button">Track</button>
          </li>
        </ul>
      </section>

      {/* Provide Feedback Section */}
      <section className="section feedback">
        <h2>Provide Feedback on Donations</h2>
        <form>
          <div className="form-group">
            <label htmlFor="donation-item">Donation Item:</label>
            <input type="text" id="donation-item" placeholder="Enter the donation item you received" />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Your Feedback:</label>
            <textarea id="feedback" rows="4" placeholder="Provide your feedback"></textarea>
          </div>
          <button type="submit" className="feedback-button">Submit Feedback</button>
        </form>
      </section>
    </div>
  );
};

export default RecipientDashboard;
