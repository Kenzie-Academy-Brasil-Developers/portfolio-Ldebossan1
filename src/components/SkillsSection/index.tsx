import '../../styles/Skills.scss'
import { forwardRef } from "react";

const SkillsSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section className='SkillSection'>
            <div ref={ref} className='SkillsDiv'>
                <h1 className="SkillsTitle">Habilidades:</h1>
                <ul className='CardList'>
                    <li className='ListSkills'>
                        <img src="../../../public/html.png" alt="HTMLIcon" />
                        <h2>HTML</h2>
                    </li>
                    <li className='ListSkills'>
                        <img src="../../../public/css-3.png" alt="CssIcon" />
                        <h2>CSS</h2>
                    </li>
                </ul>
            </div>
        </section>
    );
});

export default SkillsSection