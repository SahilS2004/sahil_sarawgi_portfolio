import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

export default function Backend() {
  return (
    <div className='skills__content'>
        <h3 className='skill__title'>Backend Developer</h3>
        <div className='skill__box'>
            <div className='skill__group'>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>Prisma</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>Node Js</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>Python</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
            </div>
            <div className='skill__group'>
            <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>MySQL</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>Mongo DB</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>Next Js</h3>
                        <span className='skills__level'>Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
