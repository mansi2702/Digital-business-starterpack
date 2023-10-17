import React from 'react'
import './Footer.css'
import Emailbox from '../Emailbox/Emailbox'

const Footer = () => {
  return (
    <div className='f-wrapper'>
        <div className='container'>
            <div className='f-container'>
                <span className='title'>Get funded Today!</span>
                <Emailbox/>

                <hr/>
                <div className='f-menu'>
                    <span>Home</span>
                    <span>What We do</span>
                    <span>How It Works</span>
                    <span>Who We Invest</span>
                </div>

                <hr/>

                <span className='text'>Made by MANSIKEEPSCODE</span>
            </div>
        </div>
    </div>
  )
}

export default Footer