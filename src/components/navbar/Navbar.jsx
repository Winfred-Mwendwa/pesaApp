import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar () {
   
   
   
   
   
   return (
     
         <header>
         
         <div class="container"> 
            <nav class="navbar">
               <img src="/src/logo_transparent.png" alt="pesaApp logo" className='logo' />
               <ul class="nav-menu">
                  <li class="nav-item">
                  <Link to='/login'><button className="btn">Log in</button></Link> 
                  

                 
                  </li>
                  
                  
               </ul>
               <div class="hamburger">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
               </div>
            </nav>
         </div>
         
      </header>
      
    )
  
}

export default Navbar;