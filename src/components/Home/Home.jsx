import { useEffect, useRef } from 'react';
import './Home.scss';
import Typed from 'typed.js';
import profil from '../../assets/profil.jpeg';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<span style="color: yellow;">JavaScript</span>',
        'PHP',
        'Symfony',
        'MySQL',
        'React',
        'Redux',
        'Linux',
        'CSS & SCSS',
        'Github',
        'API',
        'POO',
        'Wordpress',
        "Ouvert à d'autres langages !",
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
    <section className="main-section">
      <div className="home-content">
        <h3>Bonjour, moi c'est</h3>
        <h1>Denovann Belloir</h1>
        <h3>Et je suis développeur web !</h3>
        <p>
          Issu d'une reconversion, je suis prêt à mettre mes compétences à votre
          disposition !
        </p>
        <p>
          <span ref={el} />
        </p>
        <div className="home-content--btns">
          <a href="ICI PDF">Techarger mon CV</a>
          <a href="FORMULAIRE CONTACT">Contactez-moi</a>
        </div>
      </div>
      <div className="home-profil">
        <img src={profil} alt="Denovann" />
      </div>
      <svg
        className="main-section--wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#e95420"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </section>
  );
};

export default Home;
