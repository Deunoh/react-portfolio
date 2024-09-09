import { useEffect, useRef } from 'react';
import './Home.scss';
import Typed from 'typed.js';
import profil from '../../assets/profil.jpeg';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<span style="background-color: #F0DB4F; color: black; font-weight: bold; padding: 2px 8px; border-radius: 12px;">JavaScript</span>', // Badge jaune avec texte noir
        '<span style="background-color: #8892BF; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">PHP</span>', // Badge bleu avec texte blanc
        '<span style="background-color: #4F5B93; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">Symfony</span>', // Badge bleu foncé avec texte blanc
        '<span style="background-color: #4479A1; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">MySQL</span>', // Badge bleu clair avec texte blanc
        '<span style="background-color: #61DBFB; color: black; font-weight: bold; padding: 2px 8px; border-radius: 12px;">React</span>', // Badge bleu clair avec texte noir
        '<span style="background-color: #764ABC; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">Redux</span>', // Badge violet avec texte blanc
        '<span style="background-color: #FCC624; color: black; font-weight: bold; padding: 2px 8px; border-radius: 12px;">Linux</span>', // Badge jaune avec texte noir
        '<span style="background-color: #2965F1; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">CSS</span>',
        '<span style="background-color: #CC6699; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">SASS</span>', // Badge bleu avec texte blanc
        '<span style="background-color: #181717; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">Github</span>', // Badge noir avec texte blanc
        '<span style="background-color: #E34F26; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">API</span>', // Badge orange avec texte blanc
        '<span style="background-color: #5C2D91; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">POO</span>', // Badge violet avec texte blanc
        '<span style="background-color: #21759B; color: white; font-weight: bold; padding: 2px 8px; border-radius: 12px;">Wordpress</span>', // Badge bleu avec texte blanc
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
    <section className="main-section">
      <div className="home-content">
        <h3>Bonjour, moi c&apos;est</h3>
        <h1>Denovann Belloir</h1>
        <h3>
          Et je suis <span className="gradient-text">développeur web</span> !
        </h3>
        <p>
          Issu d&apos;une reconversion, je suis prêt à mettre mes compétences à
          votre disposition !
        </p>
        <p>
          <span ref={el} />
        </p>
        <div className="home-content--btns">
          <a href="#" className="btn-link">
            Télécharger mon CV
          </a>
          <a href="#" className="btn-link">
            Contactez-moi
          </a>
        </div>
      </div>
      <div className="home-profil">
        <img className="profile-img" src={profil} alt="Denovann" />
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
