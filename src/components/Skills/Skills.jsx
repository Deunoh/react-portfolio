import './Skills.scss';
import SkillsList from './SkillsList/SkillsList';

const Skills = () => {
  const frontendSkills = ['javascript', 'react', 'html', 'css', 'sass'];
  const backendSkills = ['php', 'symfony', 'mysql'];
  const toolSkills = ['github', 'figma', 'vsc', 'wordpress', 'ubuntu'];
  return (
    <section className="skills-section" id="skills-section">
      <h2 className="main-title-section">Compétences techniques</h2>
      <div className="skills-container">
        <div className="skills-techno-container">
          <h3 className="skills-title">Frontend</h3>
          <SkillsList skills={frontendSkills} />
        </div>
        <div className="skills-techno-container">
          <h3 className="skills-title">Backend</h3>
          <SkillsList skills={backendSkills} />
        </div>
        <div className="skills-techno-container">
          <h3 className="skills-title">Outils</h3>
          <SkillsList skills={toolSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
