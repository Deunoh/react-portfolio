import { useEffect, useState } from 'react';
import './Header.scss';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.jpg';
import projectsData from '../../data/projects';

const Header = ({ toggleMenu, isModalOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="menu__wrapper">
        <div className="menu__bar--title-container">
          <a href="/" title="Home" aria-label="home" className="logo">
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
                      {projectsData.map((project) => (
                        <li key={project.id}>
                          <a href={`#${project.anchor}`}>
                            <div className="icon-wrapper">{project.svg}</div>
                            <div className="item-title">
                              <h3>{project.title}</h3>
                              <p>{project.summary}</p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#presentation-section" title="presentation">
                  Qui suis-je ?
                </a>
              </li>
              <li>
                <a href="#skills-section" title="Skills">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#contact-section" title="Contact">
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
