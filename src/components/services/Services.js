import React, { useState } from 'react';
import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faXmark, 
  faCheckDouble, 
  faTableCellsLarge, 
  faCode, 
  faPenToSquare, 
  faDiagramProject
} from '@fortawesome/free-solid-svg-icons';

export default function Services() {
    const [toggleState, setToggleState] = useState(0);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const closeModal = () => {
        setToggleState(0);
    };

    return (
        <section className='services section' id="services">
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What I Offer</span>
            
            <div className='services__container container grid'>
                {/* Web Designer */}
                <div className='services__content'>
                    <div>
                        <FontAwesomeIcon icon={faTableCellsLarge} className='services__icon'/>
                        <h3 className='services__title'>Frontend <br/>Devloper</h3>
                    </div>
                    <span className='services__button' onClick={() => toggleTab(1)}>
                        View More
                        <FontAwesomeIcon icon={faArrowRight} className='services__button-icon'/>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <FontAwesomeIcon 
                                icon={faXmark} 
                                className='services__modal-close'
                                onClick={closeModal}
                            />
                            <h3 className='services__modal-title'>Frontend Developer</h3>
                            <p className='services__modal-description'>
                                I offer frontend development services, creating responsive frontends, and optimized, user-centric applications.
                            </p>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>I develop Responsive Design.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>Prototyping with Figma.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>I create UX element interactions.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>I know basics UI.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>User-Centered Design.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Visual Designer */}
                <div className='services__content'>
                    <div>
                        <FontAwesomeIcon icon={faDiagramProject} className='services__icon'/>
                        <h3 className='services__title'>Data<br/>Structure<br/>Algorithms</h3>
                    </div>
                    <span className='services__button' onClick={() => toggleTab(3)}>
                        View More
                        <FontAwesomeIcon icon={faArrowRight} className='services__button-icon'/>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <FontAwesomeIcon 
                                icon={faXmark} 
                                className='services__modal-close'
                                onClick={closeModal}
                            />
                            <h3 className='services__modal-title'>Data Structure Algorithms</h3>
                            <p className='services__modal-description'>
                            Expert in Data Structures and Algorithms, focused on building efficient, optimized solutions with Java and Python for complex problem-solving.
                            </p>
                            <ul className='services__modal-services grid'>
                                {/* Same list items as Web Designer */}
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>Algorithm Optimization.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>I provide quick problem solving skills.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>I have Intermediate skills in Dynamic Programming.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>I develop the user interface.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>I develop Efficiency Codes.</p>
                                </li>
                                {/* ... other list items ... */}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* UI/UX Designer */}
                <div className='services__content'>
                    <div>
                        <FontAwesomeIcon icon={faCode} className='services__icon'/>
                        <h3 className='services__title'>Backend<br/>Developer</h3>
                    </div>
                    <span className='services__button' onClick={() => toggleTab(2)}>
                        View More
                        <FontAwesomeIcon icon={faArrowRight} className='services__button-icon'/>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <FontAwesomeIcon 
                                icon={faXmark} 
                                className='services__modal-close'
                                onClick={closeModal}
                            />
                            <h3 className='services__modal-title'>Backend developer</h3>
                            <p className='services__modal-description'>
                                I offer Backend development services, creating a
                                scalable backends, and optimized, user-centric applications.
                            </p>
                            <ul className='services__modal-services grid'>
                                {/* Same list items as Web Designer */}
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>I Node.js & Express.js Based Development.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>Database Management.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>Authentication & Security.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>Error Handling & Optimization.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <FontAwesomeIcon icon={faCheckDouble} className='services__modal-icon'/>
                                    <p className='services__modal-info'>I provide RESTful API Development..</p>
                                </li>
                                {/* ... other list items ... */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}