import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar () {
   return (
      <header> 
         <div className="container"> 
            <nav className="navbar">
               <img src="https://live.staticflickr.com/65535/52464860390_f03c9dfcda.jpg" width="100" height="100" alt="pesaApp logo" className='logo'/>
               <ul className="nav-menu">
                  <li className="nav-item">
                     <Link to='/login'><button className="btn">Log in</button></Link>
                  </li>  
               </ul>
            </nav>
         </div>
      </header>
    )
}

export default Navbar;