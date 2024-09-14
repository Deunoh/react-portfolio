import { useEffect, useRef } from 'react';
import './Skills.scss';
import SkillsList from './SkillsList/SkillsList';

const Skills = () => {
  const frontendSkills = ['javascript', 'react', 'html', 'css', 'sass'];
  const backendSkills = ['php', 'symfony', 'mysql'];
  const toolSkills = ['github', 'figma', 'vsc', 'wordpress', 'ubuntu'];

  const leftRef = useRef();
  const leftTwoRef = useRef();
  const rightRef = useRef();
  const skillsRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          leftRef.current.classList.add(
            'animate__animated',
            'animate__bounceInLeft',
            'visible-technos'
          );
          leftTwoRef.current.classList.add(
            'animate__animated',
            'animate__bounceInLeft',
            'visible-technos'
          );
          rightRef.current.classList.add(
            'animate__animated',
            'animate__bounceInRight',
            'visible-technos'
          );
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="skills-section" id="skills-section" ref={skillsRef}>
      <h2 className="main-title-section">Compétences techniques</h2>
      <div className="skills-container">
        <div className="skills-techno-container" ref={leftRef}>
          <h3 className="skills-title">Frontend</h3>
          <SkillsList skills={frontendSkills} />
        </div>
        <div className="skills-techno-container" ref={rightRef}>
          <h3 className="skills-title">Backend</h3>
          <SkillsList skills={backendSkills} />
        </div>
        <div className="skills-techno-container" ref={leftTwoRef}>
          <h3 className="skills-title">Outils</h3>
          <SkillsList skills={toolSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
