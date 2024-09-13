import PropTypes from 'prop-types';
import './BurgerMenu.scss';

const BurgerMenu = ({ isModalOpen }) => {
  return (
    <div className={`modal ${isModalOpen ? 'change-modal' : ''}`}>
      <div className="navbar-mobile-list">
        <a href="#presentation-section">Qui suis-je ?</a>
        <a href="#skills-section">Compétences</a>
        <a href="#portfolio-section">Projets</a>
        <a href="#contact-section">Contact</a>
      </div>
    </div>
  );
};

BurgerMenu.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
};

export default BurgerMenu;
