import PropTypes from 'prop-types';
import './BurgerMenu.scss';

const BurgerMenu = ({ toggleMenu, isModalOpen }) => {
  return (
    <div className={`modal ${isModalOpen ? 'change-modal' : ''}`}>
      <div className="navbar-mobile-list">
        <a href="#presentation-section" onClick={toggleMenu}>
          Qui suis-je ?
        </a>
        <a href="#skills-section" onClick={toggleMenu}>
          Compétences
        </a>
        <a href="#portfolio-section" onClick={toggleMenu}>
          Projets
        </a>
        <a href="#contact-section" onClick={toggleMenu}>
          Contact
        </a>
      </div>
    </div>
  );
};

BurgerMenu.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default BurgerMenu;
