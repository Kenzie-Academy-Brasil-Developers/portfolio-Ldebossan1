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
                    <li><a href="#" onClick={() => scrollToSection('sobre')}>Sobre Mim</a></li>
                    <li><a href="#" onClick={() => scrollToSection('habilidades')}>Habilidades</a></li>
                    <li><a href="#" onClick={() => scrollToSection('projetos')}>Projetos</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header