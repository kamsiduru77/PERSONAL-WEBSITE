import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Info</h2>
      <p className="contact-intro">Here's where you can reach the curator of this journey — me!</p>

      <div className="business-card">
        <h3>Kamsi Duru</h3>
        <p>Computer Science Student | Aspiring Software Engineer</p>
        <div className="contact-links">
          <p>Email: <a href="mailto:kamsi.duru@outlook.com">kamsi.duru@outlook.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/kamsiduru/" target="_blank" rel="noreferrer">linkedin.com/in/kamsiduru</a></p>
          <p>GitHub: <a href="https://github.com/kamsiduru77" target="_blank" rel="noreferrer">github.com/kamsiduru77</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
