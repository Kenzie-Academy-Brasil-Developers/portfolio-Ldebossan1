import '../../styles/Header.scss'
import React from 'react';

interface HeaderProps {
    scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
    return (
        <header>
            <div className="HeaderDiv">
                <ul>
                    <li><a href="#" className='HeaderButton' onClick={() => scrollToSection('sobre')}>Sobre Mim</a></li>
                    <li><a href="#" className='HeaderButton' onClick={() => scrollToSection('habilidades')}>Habilidades</a></li>
                    <li><a href="#" className='HeaderButton' onClick={() => scrollToSection('projetos')}>Projetos</a></li>
                </ul>
            </div>
            <div className='DivButton'>
                <button className='WppButton'><a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B5588981578119&text&type=phone_number&app_absent=0">Fale comigo pelo Whatsapp</a></button>
            </div>
        </header>
    );
}

export default Header