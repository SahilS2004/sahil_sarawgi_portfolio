import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBootstrap, 
  faCss3, 
  faFigma, 
  faGit, 
  faGithub, 
  faHtml5, 
  faJava, 
  faJs, 
  faNodeJs, 
  faPython, 
  faReact 
} from '@fortawesome/free-brands-svg-icons';
import './carosel.css';

const TechStackCarousel = () => {
  const icons = [
    { icon: faPython, name: 'Python' },
    { icon: faJava, name: 'Java' },
    { icon: faHtml5, name: 'HTML5' },
    { icon: faCss3, name: 'CSS3' },
    { icon: faJs, name: 'JavaScript' },
    { icon: faReact, name: 'React' },
    { icon: faBootstrap, name: 'Bootstrap' },
    { icon: faGit, name: 'Git' },
    { icon: faGithub, name: 'GitHub' },
    { icon: faNodeJs, name: 'Node.js' },
    { icon: faFigma, name: 'Figma' }
  ];

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <h2 className="carousel-title">
          Technical Stack
        </h2>
        
        <div className="scroll-container">
          <div className="gradient-left" />
          <div className="gradient-right" />
          
          <div className="scroll-content">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="icon-container">
                {icons.map((item, index) => (
                  <div key={`${groupIndex}-${index}`} className="icon-item">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="tech-icon"
                    />
                    <span className="icon-label">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackCarousel;