import React from 'react'
import './Home.css'
import './Homequeriespad.css'
import './Homequeriesmob.css'
import { IoMdCall } from 'react-icons/io'
function Home() {
    return (
        <div className='home__main' id='homemain'>
            <h1 className='home__title'>Welcome to vassi palaze</h1>
            <p className='home__subtitle1'>Set your foot into one of Chennai's finest 2-Star hotel that lets you taste the flavours of corporate culture.
            At Vassi Palaze, we believe a star hotel should offer more than a good night's sleep and comfort.
            Vassi opens its doors for visiting tourists, holiday lovers and serious corporates who can enjoy innumerable facilities.</p>
            <p className='home__subtitle2'>In addition to exceptional accommodation and dining facilities, we also offer special packages and promotions to make your experience even more memorable and enjoyable.</p>
            <p className='home__subtitle3'>Hotel Vassi works to making your day as special as possible!</p>
            <a href='tel:4467496949' className='home__button'>
                <div className='home__container'>
                    <IoMdCall className='home__phone'/><p className='home__btntxt'>Contact us</p>
                </div>
            </a >
        </div>
    )
}

export default Home
