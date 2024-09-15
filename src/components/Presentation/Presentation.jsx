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
            adolescence, lorsque mes parents m&apos;ont donné accès à Internet à
            la maison. La découverte de Linux, et plus particulièrement de la
            distribution Ubuntu, a renforcé mon intérêt pour ce domaine.
            J&apos;ai ensuite travaillé pendant 11 ans dans le secteur de la
            logistique, notamment pour un sous-traitant de McDonald&apos;s. Il y
            a deux ans, j&apos;ai découvert le développement web grâce à une
            plateforme d&apos;apprentissage mise à disposition par mon
            employeur, et ce fut une révélation. J&apos;ai alors décidé de
            réorienter ma carrière pour me consacrer pleinement à cette nouvelle
            passion, en apprenant les bases du développement web en autodidacte,
            puis en réalisant un bilan de compétences afin de valider ce choix.
          </p>
        </div>
        <div className="about_container-card present-elem">
          <h3>Présent</h3>
          <p>
            Aujourd&apos;hui, j&apos;ai terminé une formation de développeur web
            et web mobile que j&apos;ai beaucoup appréciée. Elle m&apos;a permis
            d&apos;apprendre les notions de base ainsi que les bonnes pratiques
            de codage. En fin de parcours, j&apos;ai eu l&apos;opportunité de
            travailler sur un{' '}
            <a className="present-elem-links" href="#apocalypse">
              projet
            </a>{' '}
            en équipe dans des conditions similaires à celles d&apos;une
            entreprise, en suivant la méthodologie agile Scrum. Nous avions un
            mois pour réaliser ce{' '}
            <a className="present-elem-links" href="#apocalypse">
              projet
            </a>
            , que j&apos;ai ensuite présenté devant un jury. À l&apos;issue de
            cette présentation, j&apos;ai obtenu le titre professionnel de
            développeur web et web mobile. Je suis désormais à la recherche
            d&apos;une alternance pour continuer mon apprentissage ou d&apos;une
            offre d&apos;emploi me permettant de mettre rapidement mes nouvelles
            compétences au service d&apos;une entreprise !
          </p>
        </div>
        <div className="about_container-card future-elem" ref={futureRef}>
          <h3>Futur</h3>
          <p>
            Je suis fasciné par l&apos;évolution constante du domaine du
            développement web, les langages évoluent, les façon de coder aussi.
            Cette dynamique me motive à rester à jour et à approfondir mes
            connaissances. Je me vois dans quelques années comme un développeur
            aguerri, pleinement épanoui dans cette carrière qui est devenue bien
            plus qu&apos;un simple métier, mais une véritable passion. Pouvoir
            pratiquer cette passion au quotidien et contribuer à des projets
            stimulants est un objectif que j&apos;ai hâte d&apos;atteindre.
          </p>
        </div>
      </div>
      <Socialbar />
    </section>
  );
};

export default Presentation;
