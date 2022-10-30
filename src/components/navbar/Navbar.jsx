import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar () {
   
   
   
   
   
   return (
     
         <header>
         
         <div class="container"> 
            <nav class="navbar">
            <img src="https://live.staticflickr.com/65535/52464860390_f03c9dfcda.jpg" width="150" height="150" alt="pesaApp logo"/>
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