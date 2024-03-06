import { forwardRef } from 'react';
import '../../styles/AboutMe.scss'

const AboutMeSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section className='AboutMeSection'>
            <div ref={ref} className='AboutMeDiv'>
                <img src="../../../public/myimg.jpg" alt="MyImg" className='MyImg' />
                <p className='AboutMeParagraph'>Olá! Meu nome é Lucas, e é um prazer conhecê-lo(a). Sou uma pessoa apaixonada por desenvolvendo Web, prefiro FrontEnd mas também possuo experiência com BackEnd, sempre buscando desafios e oportunidades para crescer e aprender.
                    Profissionalmente, tenho experiência em projetos FrontEnd, BackEnd e FullStack feitos por mim mesmo apenas para prática(Todos estão disponivéis no meu GitHub). Ao longo da minha carreira, tive a oportunidade de ser assistente administrativo em uma construtora.
                    Estou sempre aberto a novas oportunidades e desafios, e estou ansioso para ver o que o futuro reserva. Se você quiser saber mais sobre mim ou trocar experiências, não hesite em entrar em contato! No início da página tem um botão que te leva diretamente para o meu whatsapp e no final da página você terá acesso ao meu GitHub e Linkedin.
                </p>
            </div>
        </section>
    );
});

export default AboutMeSection;
