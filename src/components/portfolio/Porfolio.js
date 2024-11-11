import React from 'react';
import './portfolio.css';
import codepen from '../../assets/coder.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import sliding from '../../assets/slidingpuzzle.jpg';
import netflix from '../../assets/netflix.png';
import Portfolioo from '../../assets/Portfolio.png';

export default function Portfolio() {
  return (
    <section className="portfolio section" id='portfolio'>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container">
        <div className="portfolio__content">
          <img src={Portfolioo} alt="Web design" className="portfolio__img" />
          <div>
            <h3 className="portfolio__title">Portfolio Site</h3>
            <a href="#" className="portfolio__button button">
              Demo Here<p>  </p><FontAwesomeIcon icon={faArrowRight}/>
            </a>
          </div>
        </div>

        <div className="portfolio__content">
          <img src={codepen} alt="App movil" className="portfolio__img" />
          <div>
            <h3 className="portfolio__title">CodePen</h3>
            <a href="https://github.com/SahilS2004/CodePen" className="portfolio__button button">
              Demo Here<p>  </p><FontAwesomeIcon icon={faArrowRight}/>
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio__container">
        <div className="portfolio__content">
          <img src={netflix} alt="Branding" className="portfolio__img" />
          <div>
            <h3 className="portfolio__title">Netflix Clone</h3>
            <a href="https://github.com/SahilS2004/Endsem-Project-Netflix-Clone---Endsem-Project-Netflix-Clone---jci1pfp1dxnj" className="portfolio__button button">
              Demo Here<p>  </p><FontAwesomeIcon icon={faArrowRight}/>
            </a>
          </div>
        </div>
        <div className="portfolio__content">
          <img src={sliding} alt="Branding" className="portfolio__img" />
          <div>
            <h3 className="portfolio__title">Sliding Puzzle</h3>
            <a href="https://github.com/SahilS2004/sliding-puzzle" className="portfolio__button button">
              Demo Here<p>  </p><FontAwesomeIcon icon={faArrowRight}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}