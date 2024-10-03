import React from 'react';
import Header from '../components/Header'; 
import myImage from './images/our-mission_1.jpg';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Header /> 
      <div className="about-us-container">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <img src={myImage} alt="Our Mission" className="mission-image" />
          <p>
            To create an ecosystem of giving in a way that bridges the gap between
            need and fulfillment, leading to a multiplication of social impact.
          </p>
        </section>

        <section className="platform-section">
          <h2>About Our Donation Platform</h2>
          <p>
            Our Donation Management System is a platform that connects donors with those in need during times of crisis, such as natural disasters or emergencies. 
            The platform enables users to donate essentials like food and clothing to those in need. We focus on ensuring that every donation reaches the right hands, 
            improving the lives of individuals and families who need support.
          </p>
          <p>
            With roles such as Admin, Donor, Recipient, and Logistics Coordinator, the platform manages donation drives, keeps track of donations, 
            and coordinates logistics to ensure timely delivery. Transparency and ease of use are key priorities, making it simple for users to contribute to 
            important causes and for recipients to get the help they need.
          </p>
        </section>

        <section className="vision-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where no one goes without basic necessities, and where individuals, organizations, and communities can come together to create meaningful change. 
            Through innovative technology and seamless user experiences, we aim to make giving accessible to all and ensure that help reaches those who need it the most.
          </p>
          <p>
            We believe in the power of community, and our goal is to foster a sense of collective responsibility that drives sustainable solutions to pressing social challenges.
          </p>
        </section>

        <section className="values-section">
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Empathy:</strong> Understanding the needs of those who seek help and delivering solutions with compassion.</li>
            <li><strong>Transparency:</strong> Maintaining trust through open communication, ensuring donors know exactly where their contributions go.</li>
            <li><strong>Collaboration:</strong> Working together with donors, partners, and communities to maximize impact.</li>
            <li><strong>Integrity:</strong> Upholding high standards of honesty and ethics in all aspects of our operations.</li>
          </ul>
        </section>

        <section className="our-team-section">
          <h2>Meet Our Team</h2>
          <p>
            Behind our platform is a dedicated team of professionals committed to making a difference. With diverse backgrounds in technology, logistics, and social work, 
            our team is passionate about solving some of the world’s most pressing challenges through innovation and collaboration.
          </p>
          <p>
            We believe that every donation counts and work tirelessly to ensure that each contribution has a lasting impact on the communities we serve. Our team’s unwavering 
            commitment drives our mission to bridge the gap between donors and recipients.
          </p>
        </section>

        <section className="community-section">
          <h2>Building a Community of Givers</h2>
          <p>
            Our platform is not just about donations—it's about building a global community of individuals who care. We strive to inspire people to give back in any way they can, 
            creating a ripple effect of positive change. Whether through donations, volunteering, or spreading the word, every action helps us get closer to our goal of making the world a better place.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
