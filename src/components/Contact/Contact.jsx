import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './Contact.scss';
import { useState } from 'react';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialisation de la clé api publique
emailjs.init(PUBLIC_KEY);
const Contact = () => {
  const [status, setStatus] = useState({ type: '', message: '' });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        name: data.name,
        email: data.email,
        message: data.message,
      })
      .then(
        (response) => {
          console.log('Email envoyé !', response.status, response.text);
          setStatus({
            type: 'success',
            message: 'Message envoyé avec succès !',
          });
          reset();
        },
        (error) => {
          console.log('Erreur mail', error);
          setStatus({
            type: 'error',
            message: "Échec de l'envoi du message. Veuillez réessayer.",
          });
        }
      );
  };
  return (
    <section className="contact-section" id="contact-section">
      <h2 className="main-title-section">Contact</h2>
      <div className="contact-container-flex">
        <div className="others-contact">
          <a
            href="mailto:denovann@live.fr"
            className="contact-group contact-mail"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-mail"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
              <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
            </svg>
          </a>
          <div className="contact-list">
            <a href="tel:+33689421639" className="contact-group contact-phone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/denovann/"
              target="_blank"
              rel="noreferrer"
              className="contact-group contact-li"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="#fff"
                className="icon-tabler-li"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="form-container">
          <h3 className="form-title">Vous voulez en savoir plus ?</h3>
          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                {...register('name', { required: 'Nom requis' })}
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                {...register('email', {
                  required: 'Email requis',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Adresse email invalide',
                  },
                })}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                {...register('message', { required: 'Message requis' })}
              />
              {errors.message && (
                <p className="error-message">{errors.message.message}</p>
              )}
            </div>
            <button type="submit">Envoyer le message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// https://m3.material.io/components/text-fields/overview
