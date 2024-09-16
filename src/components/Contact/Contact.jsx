import { useState } from 'react';
import Socialbar from '../Socialbar/Socialbar';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section" id="contact-section">
      <h2 className="main-title-section">Contact</h2>
      <div className="others-contact"></div>
      <div className="form-container">
        <h3 className="form-title">Vous voulez en savoir plus ?</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Envoyer le message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// https://m3.material.io/components/text-fields/overview
