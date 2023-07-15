import React from 'react'
import './HomeCategories.css'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'

function HomeCategories() {
  return (
    <div className='homecategories'>
        <div className='container'>
            <img src={img1} alt='noimg'/>
            <div className='content'>
                <h1>Vegetable at your Doorstep</h1>
                <span>Shop Vegetables Now</span>
            </div>
        </div>
        <div className='container'>
            <img src={img2} alt='noimg'/>
            <div className='content'>
                <h1>Vegetable at your Doorstep</h1>
                <span>Shop Vegetables Now</span>
            </div>
        </div>
        <div className='container'>
            <img src={img3} alt='noimg'/>
            <div className='content'>
                <h1>Vegetable at your Doorstep</h1>
                <span>Shop Vegetables Now</span>
            </div>
        </div>
        <div className='container'>
            <img src={img4} alt='noimg'/>
            <div className='content'>
                <h1>Vegetable at your Doorstep</h1>
                <span>Shop Vegetables Now</span>
            </div>
        </div>

      
    </div>
  )
}

export default HomeCategories
