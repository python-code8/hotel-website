import React from 'react'
import { GiAbstract010 } from 'react-icons/gi'
import './Accommodation.css'
import './Accommodationqueriespad.css'
import './Accommodationqueriesmob.css'
import { IoMdCall } from 'react-icons/io'
function accommodation() {
    return (
        <div className='acc__main' id='accmain'>
            <h1 className='acc__title'>Welcome to the world of luxury and comfort</h1>
            <p className='acc__subtitle1'>We have totally 29 rooms, which have contemporary design and interiors to meet present day business needs and life style.</p>
            <p className='acc__subtitle2'>Vassi Palaze is a business class hotel offers high standards of hospitality at par with any international standard hotels at an affordable price.Spacious rooms tastefully designed and equipped with all modern amenities. The rooms are comfortable and created to suit every possible need. Moderately priced, yet offering you premium services, the rooms certainly guarantee you a wonderful stay.</p>
            <div className='acc__section'>
                <div className='acc__cards'>
                    <div className='acc__img1'><GiAbstract010 /></div>
                    <h2 className='acc__cardtitle'>Standard Rooms</h2>
                    <p className='acc__cardcontent'>Well furnished with modern amenities.</p>
                </div>
                <div className='acc__cards'>
                    <div className='acc__img2'><GiAbstract010 /></div>
                    <h2 className='acc__cardtitle'>Deluxe Rooms</h2>
                    <p className='acc__cardcontent'>Luxurious rooms with LED TVs.</p>
                </div>
                <div className='acc__cards'>
                    <div className='acc__img3'><GiAbstract010 /></div>
                    <h2 className='acc__cardtitle'>Suite Rooms</h2>
                    <p className='acc__cardcontent'>Elegantly furnished Studio room area and luxurious Bedroom area.</p>
                </div>
            </div>
            <a href='tel:4467496949' className='acc__button'>
                <div className='acc__container'>
                    <IoMdCall className='acc__phone'/><p className='acc__btntxt'>Contact us</p>
                </div>
            </a >
        </div>
    )
}

export default accommodation
