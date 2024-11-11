import React, {useState} from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFileLines, faGrip, faHouse, faImage, faMessage, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [Toggle, showMenu] = useState(false);

  return (
    <header>
        <nav className='nav container'>
            <a href='index.html' className='nav__logo'>Sarawgi.</a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className='nav__list grid'>
                    <li className='nav__item'>
                        <a href='#home' className='nav__link active-link'>
                            <FontAwesomeIcon icon={faHouse} className='nav__icon'/>  Home
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#about' className='nav__link'>
                            <FontAwesomeIcon icon={faUser} className='nav__icon'/>  About
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#skills' className='nav__link'>
                            <FontAwesomeIcon icon={faFileLines} className='nav__icon'/>  Skills
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#services' className='nav__link'>
                            <FontAwesomeIcon icon={faBriefcase} className='nav__icon'/>  Services
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#portfolio' className='nav__link'>
                            <FontAwesomeIcon icon={faImage} className='nav__icon'/>  Portfolio
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#contact' className='nav__link'>
                            <FontAwesomeIcon icon={faMessage} className='nav__icon'/>  Contact
                        </a>
                    </li>
                </ul>
                <FontAwesomeIcon icon={faXmark} className='nav__close' onClick={()=>showMenu(!Toggle)}/>
            </div>
            <div className='nav__toggle' onClick={()=>showMenu(!Toggle)}><FontAwesomeIcon icon={faGrip} /></div>
        </nav>
    </header>
  )
}
