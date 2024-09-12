import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import SkillsList from '../../Skills/SkillsList/SkillsList';
import './Project.scss';

const Project = () => {
  return (
    <div className="project-card-container">
      <div className="project-card-substance">
        <img src="assets/apocalypse-screen.png" alt="" />
        <SkillsList skills={['javascript', 'react', 'symfony', 'redux']} />
      </div>
      <div className="project-card-form">
        <h2 className="project-card-form--title">Apo'calypse</h2>
        <p className="project-card-form--description">
          Projet de fin de formation présenté devant un jury en vue de
          l’obtention du titre professionnel DWWM. Nous disposions
          <strong className="strong_presentation">d’un mois</strong> pour
          réaliser ce projet en
          <strong className="strong_presentation">équipe</strong>, depuis la
          conception jusqu’à la mise en ligne. Nous avons adopté la méthodologie
          <strong className="strong_presentation">Agile Scrum</strong> pour
          respecter les délais. Ce site collaboratif, destiné aux survivants
          d'une apocalypse zombie, aide la population à survivre grâce à une
          carte interactive, des articles, et des avis de recherche pour
          retrouver les disparus. Le contenu est modéré et géré via un
          <strong className="strong_presentation">back office</strong> par les
          administrateurs. Ce projet m’a permis de travailler en
          <strong className="strong_presentation">conditions réelles</strong> et
          d’approfondir mes compétences en équipe.
        </p>
        <ul className="project-link-list">
          <li className="project-link-list--li">
            <a href="#" className="project-link-list--a">
              <FaGithub size={40} /> Code
            </a>
          </li>
          <li className="project-link-list--li">
            <a href="#" className="project-link-list--a">
              <FaLink size={40} /> Aperçu
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
