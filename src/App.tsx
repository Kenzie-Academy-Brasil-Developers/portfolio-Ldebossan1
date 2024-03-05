import React, {useRef} from 'react'
import './styles/Global.scss'
import './styles/reset.scss'
import Header from './components/Header'
import AboutMeSection from './components/AboutMeSection'
import SkillsSection from './components/SkillsSection'


const App: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
      const sectionRef = sectionsRefs[sectionId];
      if (sectionRef && sectionRef.current) {
          window.scrollTo({
              top: sectionRef.current.offsetTop,
              behavior: 'smooth'
          });
      }
  };

  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  const sectionsRefs: Record<string, React.RefObject<HTMLDivElement>> = {
      'sobre': aboutMeSectionRef,
      'habilidades': skillsSectionRef,
      'projetos': projectsSectionRef
  };

  return (
      <div>
          <Header scrollToSection={scrollToSection} />
          <AboutMeSection ref={aboutMeSectionRef} />
          <SkillsSection ref={skillsSectionRef} />:
          {/* <ProjectsSection ref={projectsSectionRef} /> */}
      </div>
  );
}

export default App;
