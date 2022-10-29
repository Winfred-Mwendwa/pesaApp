import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar () {
   
   
   
   
   
   return (
     
         <header>
         
         <div class="container"> 
            <nav class="navbar">
               <a href="#" class="nav-branding">pesaApp</a>
               <ul class="nav-menu">
                  <li class="nav-item">
                     
                  <Link to="/login" target="_blank" >Login</Link>

                 
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