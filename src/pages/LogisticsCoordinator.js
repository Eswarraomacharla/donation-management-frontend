import React from 'react';
import '../styles/LogisticsCoordinator.css';
import Header from '../components/Header'; // Assuming you have a common Header component

const LogisticsCoordinator = () => {
  return (
    <div className="logistics-dashboard">
      <Header />

      <div className="dashboard-content">
        <aside className="sidebar">
          <nav>
            <ul>
              <li>Organize Transportation</li>
              <li>Manage Inventory</li>
              <li>Ensure Timely Delivery</li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <section className="section organize-transportation">
            <h2>Organize Transportation</h2>
            <form>
              <div className="form-group">
                <label htmlFor="vehicle">Select Vehicle:</label>
                <select id="vehicle">
                  <option value="van">Van</option>
                  <option value="truck">Truck</option>
                  <option value="bike">Bike</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="route">Assign Route:</label>
                <input type="text" id="route" placeholder="Enter the delivery route" />
              </div>
              <button type="submit" className="button">Organize Transportation</button>
            </form>
          </section>

          <section className="section manage-inventory">
            <h2>Manage Inventory</h2>
            <ul>
              <li>
                <span className="item-description">Winter Clothes</span>
                <span className="item-quantity">Quantity: 100</span>
              </li>
              <li>
                <span className="item-description">School Supplies</span>
                <span className="item-quantity">Quantity: 200</span>
              </li>
              <li>
                <span className="item-description">Food Supplies</span>
                <span className="item-quantity">Quantity: 300</span>
              </li>
            </ul>
          </section>

          <section className="section ensure-delivery">
            <h2>Ensure Timely Delivery</h2>
            <ul>
              <li>
                <span className="delivery-item">Winter Clothes to Local Shelter</span>
                <span className="delivery-status">Status: In Transit</span>
                <button className="track-button">Track Delivery</button>
              </li>
              <li>
                <span className="delivery-item">Food Supplies to City Center</span>
                <span className="delivery-status">Status: Delivered</span>
                <button className="track-button">View Details</button>
              </li>
              <li>
                <span className="delivery-item">School Supplies to School #2</span>
                <span className="delivery-status">Status: Preparing</span>
                <button className="track-button">Track Delivery</button>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LogisticsCoordinator;
