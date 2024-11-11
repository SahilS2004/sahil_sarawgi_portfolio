import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

export default function Frontend() {
  return (
    <div className='skills__content'>
        <h3 className='skill__title'>Frontend Developer</h3>
        <div className='skill__box'>
            <div className='skill__group'>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>HTML</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>CSS</h3>
                        <span className='skills__level'>Advanced</span>
                    </div>
                </div>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>JavaScript</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
            </div>
            <div className='skill__group'>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>Tailwind</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>Git</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>React</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
