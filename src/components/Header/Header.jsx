import './Header.scss';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.jpg';

const Header = ({ toggleMenu, isModalOpen }) => {
  return (
    <header className="header">
      <div className="menu__wrapper">
        <div className="menu__bar--title-container">
          <a href="#" title="Home" aria-label="home" className="logo">
            <img src={logo} alt="logo" />
            <h1 className="menu__bar-title">Denovann Belloir</h1>
          </a>
        </div>
        <div className="menu__bar">
          <nav>
            <ul className="navigation hide">
              <li>
                <button type="button">
                  Projets
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                  >
                    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z" />
                  </svg>
                </button>
                <div className="dropdown__wrapper">
                  <div className="dropdown">
                    <ul className="list-items-with-description">
                      <li>
                        <div className="icon-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-skull"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 4c4.418 0 8 3.358 8 7.5c0 1.901 -.755 3.637 -2 4.96l0 2.54a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-2.54c-1.245 -1.322 -2 -3.058 -2 -4.96c0 -4.142 3.582 -7.5 8 -7.5z" />
                            <path d="M10 17v3" />
                            <path d="M14 17v3" />
                            <path d="M9 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M15 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          </svg>
                        </div>
                        <div className="item-title">
                          <h3>Apo'calypse</h3>
                          <p>Projet realisé en équipe</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-bookmark"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                          </svg>
                        </div>
                        <div className="item-title">
                          <h3>Promoliegeois</h3>
                          <p>Mon premier site !</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                            <path d="M12 12l0 .01" />
                            <path d="M3 13a20 20 0 0 0 18 0" />
                          </svg>
                        </div>
                        <div className="item-title">
                          <h3>Premier portfolio</h3>
                          <p>Mon premier portfolio</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-mood-silence"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
                            <path d="M9 10h-.01" />
                            <path d="M15 10h-.01" />
                            <path d="M8 15h8" />
                            <path d="M9 14v2" />
                            <path d="M12 14v2" />
                            <path d="M15 14v2" />
                          </svg>
                        </div>
                        <div className="item-title">
                          <h3>Ne m'insulte pas</h3>
                          <p>Petit projet pour apprendre React</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-calculator"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                            <path d="M8 14l0 .01" />
                            <path d="M12 14l0 .01" />
                            <path d="M16 14l0 .01" />
                            <path d="M8 17l0 .01" />
                            <path d="M12 17l0 .01" />
                            <path d="M16 17l0 .01" />
                          </svg>
                        </div>
                        <div className="item-title">
                          <h3>JS Calculator</h3>
                          <p>Calculatrice créer en 45mn inspiré d'iOS</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-cloud-upload"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                            <path d="M9 15l3 -3l3 3" />
                            <path d="M12 12l0 9" />
                          </svg>
                        </div>
                        <div className="item-title">
                          <h3>High Fidelity Snap</h3>
                          <p>Projet en cours</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#devs" title="Developers">
                  Qui suis-je ?
                </a>
              </li>
              <li>
                <a href="#pricing" title="Pricing">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#docs" title="Docs">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <button
          aria-label="Open menu"
          className="burger-menu"
          type="button"
          onClick={toggleMenu}
        >
          {isModalOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Header;
