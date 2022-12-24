import React from 'react'
import  './Navb.css'

function Nav() {
  return (
    <nav className='navbar'>
   <h4 className='logo'> SAMEER BAIG</h4>
    <ul class="nav">
  <li class="nav-item">
  <a  >HOME</a>
  </li>
  <li class="nav-item">
  <a >CONTACT</a>
  </li>
  <li class="nav-item">
  <a >Disabled</a>
  </li>
  <li class="nav-item">
    <a>Disabled</a>
  </li>
</ul>
    </nav>
  )
}

export default Nav