import { useEffect, useRef } from 'react';

import Socialbar from '../Socialbar/Socialbar';
import './Presentation.scss';

const Presentation = () => {
  const pastRef = useRef();
  const futureRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        pastRef.current.classList.add(
          'animate__animated',
          'animate__backInLeft'
        );
        futureRef.current.classList.add(
          'animate__animated',
          'animate__backInRight'
        );
      }
    });
    observer.observe(pastRef.current);
    observer.observe(futureRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="presentation-section" id="presentation-section">
      <h2 className="main-title-section">Qui suis-je ?</h2>
      <div className="about_container">
        <div className="about_container-card past-elem" ref={pastRef}>
          <h3>Passé</h3>
          <p>
            Ma passion pour l&apos;informatique a commencé durant mon
            adolescence avec la découverte de Linux et Ubuntu. Après 11 ans
            dans la logistique, j&apos;ai découvert le développement web et
            ce fut une révélation. J&apos;ai alors décidé de réorienter ma
            carrière en suivant une formation développeur web et web mobile
            de 6 mois intensif grâce à laquelle j&apos;ai obtenu mon titre professionnel.
          </p>
        </div>
        <div className="about_container-card present-elem">
          <h3>Présent</h3>
          <p>
            Aujourd&apos;hui, je suis Conseiller Technique logiciel chez Agiris
            et je m&apos;épanouis dans ce travail bien qu&apos;il ne soit pas
            orienté développement car je suis entouré d&apos;une équipe
            bienveillante et d&apos;un cadre de travail tech en lien avec les
            développeurs et le système. Mes connaissances SQL sont bien utilisées
            et cela me permet de rester dans un environnement technique tout en
            continuant à apprendre et évoluer dans le domaine de l&apos;informatique.
          </p>
        </div>
        <div className="about_container-card future-elem" ref={futureRef}>
          <h3>Futur</h3>
          <p>
            Je m&apos;épanouis et j&apos;apprends constamment dans mon travail
            actuel, ce qui me permet de développer mes compétences techniques
            au quotidien. Je me vois comme quelqu&apos;un de plus expérimenté
            dans quelques années, tout en continuant à développer des projets
            personnels à côté. Cette dynamique d&apos;apprentissage continu
            me motive à rester à jour avec les évolutions technologiques
            et à approfondir mes connaissances pour devenir un professionnel
            aguerri dans le domaine.
          </p>
        </div>
      </div>
      <Socialbar />
    </section>
  );
};

export default Presentation;
