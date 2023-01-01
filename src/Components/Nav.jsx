import React from 'react'
import  './Navb.css'

function Nav() {
  return (
    <nav className='navbar'>
   <h4 className='logo'> SAMEER BAIG</h4>
    <ul class="nav">
  <li class="nav-item">
  <span>HOME</span>
  </li>
  <li class="nav-item">
  <span >CONTACT</span>
  </li>
  <li class="nav-item">
  <span>Disabled</span>
  </li>
  <li class="nav-item">
    <span>Disabled</span>
  </li>
</ul>
    </nav>
  )
}

export default Nav