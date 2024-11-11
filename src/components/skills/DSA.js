import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

export default function DSA() {
  return (
    <div className='skills__content'>
        <h3 className='skill__title'>Data Structure Algo</h3>
        <div className='skill__box'>
            <div className='skill__group' id='touchup'>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>Basics Level DSA</h3>
                        <span className='skills__level'>Advanced</span>
                    </div>
                </div>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>Advance Level DSA</h3>
                        <span className='skills__level'>Advanced</span>
                    </div>
                </div>
                <div className='skill__data'>
                    <FontAwesomeIcon icon={faCheckDouble} className='badge'/>
                    <div>
                        <h3 className='skills__name'>Dynamic Programing</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
