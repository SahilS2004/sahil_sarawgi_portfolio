import React from 'react';
import './footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__c-ontainer container'>
            <h1 className='footer__title'>Sarawgi.</h1>

            <ul className='footer__list'>
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>
                <li>
                    <a href='#portfolio' className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href='#skills' className='footer__link'>Skills</a>
                </li>
            </ul>
            <div className='footer__social'>
                <a href='https://www.instagram.com/sahil_s2004/' className='footer__social-icon' target='_blank'>
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href='https://www.linkedin.com/in/sahil-sarawgi-0b44b628b/' className='footer__social-icon' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a href='https://github.com/SahilS2004/' className='footer__social-icon' target='_blank'>
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
            <span className='footer__copy'>&#169; Sahil Sarawgi. All rigths reserved</span>
        </div>
    </footer> 
  )
}
