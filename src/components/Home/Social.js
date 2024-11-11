import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faGithub, faGithubAlt, faInstagram, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Social() {
  return (
    <div className='home__social'>
        <a href='https://www.instagram.com/sahil_s2004/' className='home__social-icon' target='_blank'>
            <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a href='https://www.linkedin.com/in/sahil-sarawgi-0b44b628b/' className='home__social-icon' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a href='https://github.com/SahilS2004/' className='home__social-icon' target='_blank'>
            <FontAwesomeIcon icon={faGithub}/>
        </a>
    </div>
    )
}
