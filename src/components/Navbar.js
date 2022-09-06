import React from 'react'
import '../assets/css/Navbar.css'

export default function Navbar() {

  return (
    <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#">Product</a></li>
                <li><a href="#">Learn</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
            <h1 class="logo">minti</h1>
            <span class="dot"></span>
        </div>
    </nav>
  )
}
