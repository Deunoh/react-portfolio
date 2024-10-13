import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import './Home.scss';
import Typed from 'typed.js';
import profil from '../../assets/profil3.jpeg';

const Home = ({ isScrolled }) => {
  const el = useRef(null);
  const imageRef = useRef(null);
  const h3Ref1 = useRef(null); // Ref pour le premier titre h3
  const h1Ref = useRef(null); // Ref pour le h1
  const h3Ref2 = useRef(null); // Ref pour le deuxième h3
  const pRef = useRef(null); // Ref pour le paragraphe
  const btnsRef = useRef(null); // Ref pour les boutons
  const [showScroll, setShowSroll] = useState(false);

  // timeout pour le svg scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSroll(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Animations au premier rendu
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.classList.add('animate__animated', 'animate__rotateIn');
    }

    if (h3Ref1.current) {
      h3Ref1.current.classList.add('animate__animated', 'animate__fadeInDown');
    }

    if (h1Ref.current) {
      h1Ref.current.classList.add('animate__animated', 'animate__fadeInDown');
    }

    if (h3Ref2.current) {
      h3Ref2.current.classList.add('animate__animated', 'animate__fadeInDown');
    }

    if (pRef.current) {
      pRef.current.classList.add('animate__animated', 'animate__fadeInDown');
    }
    if (btnsRef.current) {
      btnsRef.current.classList.add(
        'animate__animated',
        'animate__fadeInLeftBig'
      );
    }
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<span style="background-color: #F0DB4F; color: black; font-weight: bold; padding: 2px 8px; border-radius: 12px;">JavaScript</span>',
        '<span style="color: #FF5733; font-weight: bold;">Je suis curieux</span>',
        '<span style="background-color: #8892BF; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">PHP</span>',
        '<span style="color: #FF5733; font-weight: bold;">Je suis autonome</span>',
        '<span style="background-color: #4F5B93; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">Symfony</span>',
        '<span style="color: #FF5733; font-weight: bold;">J\'ai un ésprit d\'équipe</span>',
        // '<span style="background-color: #4479A1; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">MySQL</span>',
        '<span style="background-color: #61DBFB; color: black; font-weight: bold; padding: 2px 8px; border-radius: 12px;">React</span>',
        '<span style="color: #FF5733; font-weight: bold;">Je suis fiable</span>',
        // '<span style="background-color: #764ABC; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">Redux</span>',
        // '<span style="background-color: #FCC624; color: black; font-weight: bold; padding: 2px 8px; border-radius: 12px;">Linux</span>',
        // '<span style="background-color: #2965F1; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">CSS</span>',
        // '<span style="background-color: #CC6699; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">SASS</span>',
        '<span style="background-color: #181717; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">Github</span>',
        '<span style="color: #FF5733; font-weight: bold;">Je suis calme</span>',
        '<span style="background-color: #E34F26; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">API</span>',
        '<span style="color: #FF5733; font-weight: bold;">Je suis passionné</span>',
        '<span style="background-color: #5C2D91; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">POO</span>',
        '<span style="background-color: #21759B; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">Wordpress</span>',
        '<span style="color: #FF5733; font-weight: bold;">Ouvert à d\'autres langages !</span>',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    // Nettoyage de Typed
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="main-section" id="home">
      <div className="home-content">
        <h3 ref={h3Ref1}>Bonjour, moi c&apos;est</h3>
        <h1 ref={h1Ref}>Denovann Belloir</h1>
        <h3 ref={h3Ref2}>
          Et je suis <span className="gradient-text">développeur web</span> !
        </h3>
        <p ref={pRef}>
          Issu d&apos;une reconversion, je suis prêt à mettre mes compétences à
          votre disposition !
        </p>
        <p>
          <span ref={el} />
        </p>
        <div className="home-content--btns" ref={btnsRef}>
          <a
            download
            href="assets/CV_Denovann_Belloir.pdf"
            className="btn-link"
            id="cv-btn"
          >
            Télécharger mon CV
          </a>
          <a href="#contact-section" className="btn-link">
            Contactez-moi
          </a>
        </div>
      </div>
      <div className="home-profil">
        <img
          className="profile-img"
          src={profil}
          alt="Denovann"
          ref={imageRef}
        />
      </div>
      <svg
        className={`main-section--wave ${
          isScrolled ? 'animate__animated animate__fadeOutLeftBig' : ''
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#e95420"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      {!isScrolled && showScroll && (
        <DotLottieReact
          src="assets/Animation - 1726257010810.json"
          loop
          autoplay
          className="dotlottie-animation--scroll"
        />
      )}
    </section>
  );
};

Home.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};
export default Home;
