import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Socialbar from '../Socialbar/Socialbar';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact-section" id="contact-section">
      <h2 className="main-title-section">Contact</h2>
      <p className="contact-section--warning">
        Le formulaire de contact est en cours de création !
      </p>
      <DotLottieReact
        src="assets/Animation - 1726218048872.json"
        loop
        autoplay
        className="dotlottie-animation"
      />
      <Socialbar />
    </section>
  );
};

export default Contact;
