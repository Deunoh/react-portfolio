import './Portfolio.scss';
import Project from './Project/Project';

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2 className="main-title-section">Projets</h2>
      <Project />
    </section>
  );
};

export default Portfolio;
