import { useEffect, useRef } from 'react';
import './Home.scss';
import Typed from 'typed.js';
import profil from '../../assets/profil.jpeg';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'JavaScript',
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
      </div>
      <div className="home-profil">
        <img src={profil} alt="Denovann" />
      </div>
    </section>
  );
};

export default Home;
