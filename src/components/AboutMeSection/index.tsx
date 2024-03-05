import { forwardRef } from 'react';
import '../../styles/AboutMe.scss'

const AboutMeSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section className='AboutMeSection'>
            <div ref={ref} className='AboutMeDiv'>
                <h2 className='AboutMeTitle'>Sobre mim:</h2>
                <p className='AboutMeParagraph'>Me chamo Lucas, conclui o curso da Kenzie Academy Brasil que visa formar os alunos para se tornarem Desenvolvedores Full Stack, consigo trabalhar com HTML, CSS, SCSS, React, Node, JavaScript, ETC.
                    Tenho projetos usando todas estas linguagens e abaixo deixarem um link para alguns deles.
                </p>
            </div>
        </section>
    );
});

export default AboutMeSection;
