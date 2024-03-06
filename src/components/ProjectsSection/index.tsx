import '../../styles/ProjectsSection.scss'
import { forwardRef } from "react";

const ProjectsSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="ProjectsSection">
            <h1 className="ProjectTitle">Projetos:</h1>
            <ul className="ProjectList">
                <li className="ProjectCard">
                    <h2 className='CardTitle'>NuKenzie</h2>
                    <p className='CardDesc'>NuKenzie consiste em uma página web onde você pode adicionar a uma lista valores de entrada e saída, e no final obtém um valor total referente ao mês que você escolher.</p>
                    <span className='CardLang'>Linguagens utilizadas: React.JS, CSS</span>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-Ldebossan/tree/master" target='_blank'>Link para o repositório</a>
                    <a href="https://react-entrega-s1-template-nu-kenzie-ldebossan.vercel.app" target='_blank'>Link para o vercel</a>
                </li>
                <li className="ProjectCard">
                    <h2 className='CardTitle'>Portfolio Fictício</h2>
                    <p className='CardDesc'>Este projeto consiste em um portfolio fictício que possui informações sobre uma pessoa, seus projetos, habilidades e métodos de contato.</p>
                    <span className='CardLang'>Linguagens utilizadas: React.JS, CSS</span>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-Ldebossan/tree/master" target='_blank'>Link para o repositório</a>
                    <a href="https://m3-s1-entrega-portfolio-template-ldebossan1-ldebossan1.vercel.app" target='_blank'>Link para o vercel</a>
                </li>
                <li className="ProjectCard">
                    <h2 className='CardTitle'>KenzieHub</h2>
                    <p className='CardDesc'>Uma página com funcionalidade de cadastro e login, autenticação e autorização, uma página inicial que contém informações do usuário e uma seção onde você pode adicionar as tecnologias que você possui, e todas essas informações são armazenadas em um banco de dados</p>
                    <span className='CardLang'>Linguagens utilizadas: React.JS, CSS</span>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/kenzieHub-Ldebossan1" target='_blank'>Link para o repositório</a>
                    <a href="https://kenzie-hub-ldebossan1.vercel.app" target='_blank'>Link para o vercel</a>
                </li>
                <li className="ProjectCard">
                    <h2 className='CardTitle'>Open Music</h2>
                    <p className='CardDesc'>Uma plataforma musical que consiste em uma página que tem funcionalidades de filtro por preço ou por categoria, e possui função para o darkmode que fica armazenado no localStorage para caso entre no site novamente.</p>
                    <span className='CardLang'>Linguagens utilizadas: JavaScript, CSS, HTML</span>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/open-music-base-Ldebossan1" target='_blank'>Link para o repositório</a>
                    <a href="https://kenzie-academy-brasil-developers.github.io/open-music-base-Ldebossan1/" target='_blank'>Link para o GitHub Pages</a>
                </li>
                <li className="ProjectCard">
                    <h2 className='CardTitle'>Locadora de filmes</h2>
                    <p className='CardDesc'>Um projeto backend que consiste em um database de uma locadora que você é o dono e pode adicionar filmes ao catálogo, listar todos os filmes, atualizar um filme pelo ID, e deletar um filme pelo ID.</p>
                    <span className='CardLang'>Linguagens utilizadas: TypeScript</span>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/open-music-base-Ldebossan1" target='_blank'>Link para o repositório</a>
                </li>
                <li className="ProjectCard">
                    <h2 className='CardTitle'>KImoveis</h2>
                    <p className='CardDesc'>Um projeto backend que consiste em um database baseado no Canvas, você pode se cadastrar no site, fazer login e se cadastrar em cursos, caso seja ADM, pode criar novos cursos, cadastrar novos usuários e deletar eles caso queira</p>
                    <span className='CardLang'>Linguagens utilizadas: Python</span>
                    <a href="https://github.com/Ldebossan1/Kanvas-Ldebossan1" target='_blank'>Link para o repositório</a>
                </li>
                <li className="ProjectCard">
                    <h2 className='CardTitle'>Projeto FullStack</h2>
                    <p className='CardDesc'>Um projeto FullStack que tem funcionalidades para uma empresa fictícia onde ela pode cadastrar seus clientes e cada um deles tendo um metódo de contato.</p>
                    <span className='CardLang'>Linguagens utilizadas: TypeScript, HTML, JavaScript</span>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/projeto-fullstack-frontend-Ldebossan1" target='_blank'>Link para o repositório</a>
                </li>
            </ul>
        </div>
    )
});

export default ProjectsSection