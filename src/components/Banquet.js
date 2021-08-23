import React from 'react'
import './Banquet.css'
import './Banquetqueriespad.css'
import './Banquetqueriesmob.css'
import { IoMdCall } from 'react-icons/io'
function Banquet() {
    return (
        <div className='ban__main' id='banmain'>
            <h2 className='ban__title'>Conferences and Banquet</h2>
            <p className='ban__subtitle'>For special unforgettable moments, whether it's a wedding celebration or a business conference, we have superior infrastructure, attentive staff and sophisticated ambience that can enhance the occasion and make it memorable. Our good food coupled with a variety of cuisines is one of the additional highlights that you experience with us.Three spacious, well appointed and fully equipped Conference/Banquet venues for meetings, parties and other occasions.
            </p>
            <div className='ban__section'>
                <div className='ban__cards'>
                    <div className='ban__img1'></div>
                    
                </div>
                <div className='ban__cards'>
                    <div className='ban__img2'></div>
                    
                </div>
                <div className='ban__cards'>
                    <div className='ban__img3'></div>
    
                </div>
            </div>
            <a href='tel:4467496949' className='ban__button'>
                <div className='ban__container'>
                    <IoMdCall className='ban__phone'/><p className='ban__btntxt'>Contact us</p>
                </div>
            </a >
        </div>
    )
}

export default Banquet
