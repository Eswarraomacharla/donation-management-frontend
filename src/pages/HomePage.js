import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import '../styles/HomePage.css';
import image1 from './images/1.jpg'; // Import the image
import image2 from './images/p1.jpeg';
import image3 from './images/2.jpg';
import Footer from './../components/Footer';

const HomePage = () => {
  const counters = useRef([]);

  useEffect(() => {
    counters.current.forEach((counter) => {
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 200; // Adjust speed by changing 200

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 30); // Adjust delay for smoother or faster effect
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }, []);

  return (
    <div className="homepage">
      <Header />

      <div className="hero-section">
        <h1>Welcome to the Community Donation Platform</h1>
        <p>Connecting donors with recipients to improve living conditions.</p>
      </div>

      <div className="sevadeep-facts-section">
        <h2>Some Facts About our Initiative!</h2>
        <div className="sevadeep-facts">
          <div className="fact">
            <img src={image1} alt="Elders and families received relief in COVID" className="fact-image" />
            <h3 ref={(el) => (counters.current[0] = el)} data-target="1000">0</h3>
            <p>Elders and families received relief in COVID</p>
          </div>
          <div className="fact">
            <img src={image2} alt="Helped thousands of families in Vijayawada floods" className="fact-image" />
            <h3 ref={(el) => (counters.current[1] = el)} data-target="9900">0</h3>
            <p>Helped Thousands of families in vijayawada floods</p>
          </div>
          <div className="fact">
            <img src={image3} alt="Treatments provided by Mobile Health Care units" className="fact-image" />
            <h3 ref={(el) => (counters.current[2] = el)} data-target="3000">0</h3>
            <p>Food and Clothes donated to 1000 of members</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
