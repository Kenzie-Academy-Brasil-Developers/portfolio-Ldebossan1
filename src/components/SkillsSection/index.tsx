import '../../styles/Skills.scss'
import { forwardRef } from "react";
import HtmlIcon from '../../assets/html.png'
import CssIcon from '../../assets/css-3.png'
import JavaIcon from '../../assets/script-java.png'
import ReactIcon from '../../assets/react.png'

const SkillsSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section className='SkillSection'>
            <div ref={ref} className='SkillsDiv'>
                <h1 className="SkillsTitle">Habilidades:</h1>
                <ul className='CardList'>
                    <li className='ListSkills'>
                        <img src={HtmlIcon} alt="HTMLIcon" />
                        <h2>HTML</h2>
                    </li>
                    <li className='ListSkills'>
                        <img src={CssIcon} alt="CssIcon" />
                        <h2>CSS</h2>
                    </li>
                    <li className='ListSkills'>
                        <img src={JavaIcon} alt="JavaScriptIcon" />
                        <h2>JavaScript</h2>
                    </li>
                    <li className='ListSkills'>
                        <img src={ReactIcon} alt="ReactIcon" />
                        <h2>React</h2>
                    </li>
                </ul>
            </div>
        </section>
    );
});

export default SkillsSection