import PropTypes from 'prop-types';
import './BurgerMenu.scss';

const BurgerMenu = ({ isModalOpen }) => {
  return (
    <div className={`modal ${isModalOpen ? 'change-modal' : ''}`}>
      <div className="navbar-mobile-list">
        <a href="#home">Qui suis-je ?</a>
        <a href="#about">Compétences</a>
        <a href="#services">Projets</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

BurgerMenu.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
};

export default BurgerMenu;
