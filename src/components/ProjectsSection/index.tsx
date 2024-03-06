import '../../styles/ProjectsSection.scss'
import { forwardRef } from "react";

const ProjectsSection = forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <div ref={ref} className="ProjectsSection">
            <h1 className="ProjectTitle">Projetos:</h1>
            <ul className="ProjectList">
                <li className="ProjectCard">
                    <h2 className='CardTitle'>NuKenzie</h2>
                    <p className='CardDesc'>NuKenzie consiste em uma página web onde você pode adicionar a uma lista valores de entrada e saída, e no final obtém um valor total referente ao mês que você escolher.</p>
                    <span className='CardLang'>Linguagens utilizadas: JavaScript, SCSS e React</span>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-Ldebossan/tree/master" target='_blank'>Link para o repositório</a>
                </li>
                <li className="ProjectCard">
                    <h2 className='CardTitle'>NuKenzie</h2>
                    <p className='CardDesc'>NuKenzie consiste em uma página web onde você pode adicionar a uma lista valores de entrada e saída, e no final obtém um valor total referente ao mês que você escolher.</p>
                    <span className='CardLang'>Linguagens utilizadas: JavaScript, SCSS e React</span>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-Ldebossan/tree/master" target='_blank'>Link para o repositório</a>
                </li>
            </ul>
        </div>
    )
});

export default ProjectsSection