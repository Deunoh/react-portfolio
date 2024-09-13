import './Portfolio.scss';
import Project from './Project/Project';
import projectsData from '../../data/projects';

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio-section">
      <h2 className="main-title-section">Projets</h2>
      {projectsData.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
