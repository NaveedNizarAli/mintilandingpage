import React from 'react'
import whitegoogle from '../assets/image/google.png'
import '../assets/css/Leftbox.css'
import Rightbox from './Rightbox'
import SvgIcons from './icons/svg.icon'

export default function Leftbox() {
   const handleMouseEnter = (e) => {
        console.log('1')
    }
    const handleMouseLeave = (e) => {
        console.log('2')
    }
  return (
    <div id='container'>
        <div className='row'>
            <div className='col'>
                <h1 id='main-heading'>Building something for next generation</h1>
                <h6 id='sub-heading'>Submit your next resume and Interview with Minti.</h6>
                <div className='row buttons'>
                    <div className='col-6'>
                        <button id='apple-button' >
                            Apple Store 
                            <span className='apple'><SvgIcons.AppleIcon/></span>
                        </button>
                    </div>
                    
                    <div className='col-6'>
                        <button id='Google-button' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            Google Play
                            <img  className='google' src={whitegoogle} width={42} height={30}></img>
                        </button>
                    </div>
                    
                </div>
                
                
            </div>
            <div className='col'>
                <Rightbox />
            </div>
        </div>
            
    </div>
  )
}
