import React from 'react'
import mobile from '../assets/image/mobile.png'
import '../assets/css/Rightbox.css'

export default function Rightbox() {
  return (
    <div className="conatiner">
        <div id='box'>
            <img className='mobile-app' src={mobile} alt='mobile-app' ></img>
        </div>
    </div>
    
  )
}
