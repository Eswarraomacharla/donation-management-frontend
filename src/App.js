// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';  // Donor page
import Header from './components/Header';  // Donor page
import AdminLogin from './components/AdminLogin';  // Donor page
import AdminDashboard from './pages/AdminDashboard';
import './App.css';
import DonorDashboard from './pages/DonorDashboard';
import RecipientDashboard from './pages/RecipientDashboard';
import LogisticsCoordinator from './pages/LogisticsCoordinator';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/admindashboard" element={<AdminDashboard/>}/>
          <Route path="/donordashboard" element={<DonorDashboard/>}/>
          <Route path="/recipientdashboard" element={<RecipientDashboard/>}/>
          <Route path="/logisticscoordinator" element={<LogisticsCoordinator/>}/>



        </Routes>
      </div>
    </Router>
  );
}

export default App;
