import './Header.scss';
import logo from '../../assets/logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="menu__wrapper">
        <div className="menu__bar--title-container">
          <a href="#" title="Home" aria-label="home" className="logo">
            <img src={logo} alt="logo" />
            <h1 className="menu__bar-title">Denovann</h1>
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
                    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                  </svg>
                </button>
                <div className="dropdown__wrapper">
                  <div className="dropdown">
                    <ul className="list-items-with-description">
                      <li>
                        <div className="icon-wrapper"></div>
                        <div className="item-title">
                          <h3>Apo'calypse</h3>
                          <p>Projet realisé en équipe</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-wrapper"></div>
                        <div className="item-title">
                          <h3>Promoliegeois</h3>
                          <p>Mon premier site !</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-wrapper"></div>
                        <div className="item-title">
                          <h3>Premier portfolio</h3>
                          <p>Mon premier portfolio</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-wrapper"></div>
                        <div className="item-title">
                          <h3>Ne m'insulte pas</h3>
                          <p>Petit projet pour apprendre React</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-wrapper"></div>
                        <div className="item-title">
                          <h3>JS Calculator</h3>
                          <p>Calculatrice créer en 45mn inspiré d'iOS</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-wrapper"></div>
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
                  Hard skills
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
        <button aria-label="Open menu" className="burger-menu" type="button">
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
        </button>
      </div>
    </header>
  );
};

export default Header;
