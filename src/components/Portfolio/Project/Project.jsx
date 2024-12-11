import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import SkillsList from '../../Skills/SkillsList/SkillsList';
import './Project.scss';

const Project = ({
  title,
  anchor,
  link,
  github,
  image,
  video,
  alt,
  description,
  technos,
}) => {
  const projectRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          projectRef.current.classList.add(
            'animate__animated',
            'animate__fadeInUp',
            'visible'
          );
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(projectRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="project-card-container" id={anchor} ref={projectRef}>
      <div className="project-card-substance">
        {video ? (
          <video src={video} alt={alt} controls />
        ) : (
          <img src={image} alt={alt} />
        )}
        <SkillsList skills={technos} />
      </div>
      <div className="project-card-form">
        <h2 className="project-card-form--title">{title}</h2>
        <p
          className="project-card-form--description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <ul className="project-link-list">
          <li className="project-link-list--li">
            <a
              href={github}
              className="project-link-list--a"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={40} /> Code
            </a>
          </li>
          {link && (
            <li className="project-link-list--li">
              <a
                href={link}
                className="project-link-list--a"
                target="_blank"
                rel="noreferrer"
              >
                <FaLink size={40} /> Aperçu
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
  link: PropTypes.string,
  github: PropTypes.string.isRequired,
  image: PropTypes.string,
  video: PropTypes.string,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Project.defaultProps = {
  link: null,
  image: null,
  video: null,
};

export default Project;
