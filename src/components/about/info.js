import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBriefcase, faHeadphones } from '@fortawesome/free-solid-svg-icons'

export default function Info() {
  return (
    <div className='about__info'>
        <div className='about__box'>
            <FontAwesomeIcon icon={faAward} className='about__icon'/>
            <h3 className='about__title'>Certified In</h3>
            <span className='about__subtitle'>3+ Certificate</span>
        </div>
        <div className='about__box'>
            <FontAwesomeIcon icon={faBriefcase} className='about__icon'/>
            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle'>10+ Projects</span>
        </div>
        <div className='about__box'>
            <FontAwesomeIcon icon={faHeadphones} className='about__icon'/>
            <h3 className='about__title'>Support</h3>
            <span className='about__subtitle'>Online 24/7</span>
        </div>
    </div>
  )
}
