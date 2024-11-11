import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCalendarAlt, faSchool } from '@fortawesome/free-solid-svg-icons';
import './qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div 
            className={`qualification__button ${toggleState === 1 ? "qualification__active" : ""}`}
            onClick={() => toggleTab(1)}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="qualification__icon" /> Graduation
          </div>

          <div 
            className={`qualification__button ${toggleState === 2 ? "qualification__active" : ""}`}
            onClick={() => toggleTab(2)}
          >
            <FontAwesomeIcon icon={faSchool} className="qualification__icon" /> School
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education */}
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Java - DSA(Basic)</h3>
                <span className="qualification__subtitle">Newton School</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2023 (Sept - Dec)
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Frontend Development</h3>
                <span className="qualification__subtitle">Newton School</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2024 (Jan - June)
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Python - DSA(Intermediate)</h3>
                <span className="qualification__subtitle">Newton School</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2024 (Jan - June)
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Backend Development</h3>
                <span className="qualification__subtitle">Newton School</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2024 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UI/UX & Figma</h3>
                <span className="qualification__subtitle">Newton School</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2024 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Python (Intermediate)</h3>
                <span className="qualification__subtitle">Rani LaxmiBai Public School</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">High School-(86 %)</h3>
                <span className="qualification__subtitle">Rani LaxmiBai Public School</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2021 March
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Higher Secondary (70.5%)</h3>
                <span className="qualification__subtitle">Mahatma Hansraj Modern School</span>
                <div className="qualification__calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2023 March
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;