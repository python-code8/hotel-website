import React from 'react'
import { HiMail } from 'react-icons/hi' 
import { IoMdCall } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './Footer.css'
import './Footerqueries.css'

function Footer() {
    return (
        <div className='foomain'>
            <h3 className='footitle'>Contact us</h3>
            <div className='contact'>
                <a href="mailto: reservations@hotelvassi.com"><HiMail className='email' /></a>
                <a href='tel:4467496949'><IoMdCall className='phone'/></a >
            </div>
            <p className='copy'>
                {'Copyright © '}
                {new Date().getFullYear()}
                {'.'}
            </p>
        </div>
    )
}

export default Footer
