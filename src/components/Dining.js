import React from 'react'
import './Dining.css'
import './Diningqueriespad.css'
import './Diningqueriesmob.css'
import { IoMdCall } from 'react-icons/io'
function Dining() {
    return (
        <div className='din__main' id='dinmain'>
            <div className='din__root'>
                <div className='din__section'>
                    <h1 className='din__title'>Sappda Vanga Pure Vegetarian Restaurant</h1>
                    <br />
                    <p className='din__subtitle1'>We offer a sumptuous and delicious customery feast for lunch which is called "thala vazha virundhu".Sappda vanga takes very special care in offering you an extravagant and cozy Meal that is sure to make you relish and remember always. Sapada vanga is well versed with cuisine ranging from Kanyakumari to Kashmir.</p>
                </div>
                <div className='din__section'>
                    <h1 className='din__title'>Multi-Cuisine Restaurant:(Lunch & Dinner)</h1>
                    <br />
                    <p className='din__subtitle1'>From multi-cuisine dining at the all-day Restaurant to specialty rare eastern cuisine served in the plush and stylishly done-up restaurants & lounges, you can relish a range of tastes. To this we have added a carefully created In-Room Dining menu for you to relax in the serenity of your stylish room and enjoy a quiet meal.</p>
                </div>
                <div className='din__section'>
                    <h1 className='din__title'>24/7 Coffee Shop</h1>
                    <br />
                    <p className='din__subtitle1'>Selectable multi-cuisine delicacies served all day in this 24 hour coffee shop. Rhythm is trendy, bright and vibrant enough to either begin your day or round-up your hectic day with smooth coffee coupled with conversations</p>
                </div>
                <div className='din__section'>
                    <h1 className='din__title'>In Room Dining: (24 hrs Room Service)</h1>
                    <br />
                    <p className='din__subtitle1'>A delightful way to dine informally on your patio or in the privacy of your room. You may ask for a particular cuisine, Oriental or Indian – or choose from the special room-service station. Our carefully created In-Room Dining Menu shall offer you apt choices to suit your mood or time-of-the-day.</p>
                </div>
                <div className='din__imgsection'>
                    <div className='din__cards'>
                        <div className='din__img1'></div>
                        
                    </div>
                    <div className='din__cards'>
                        <div className='din__img2'></div>
                    </div>
                </div>
            </div>
            <a href='tel:4467496949' className='din__button'>
            <div className='din__container'>
                <IoMdCall className='din__phone'/><p className='din__btntxt'>Contact us</p>
            </div>
            </a>
            
        </div>
    )
}

export default Dining
