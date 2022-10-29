import React from "react";
import '../../App.css'
import Header from "../header";
import RegistrationForm from "../registration/Registration";

function Landingpage () {
    return (
        <div>
            <main>
            <div className='content-home ' id='home'>
            <div>
            <Header />

            </div>
            
            
            <div className='container text-center'>
              
              <div className=' mt-5' id='tagline'>
              <h1 className='tag'>
              Send money in three easy steps!
              </h1>
              <ol className='text-center'>
                <li>Register</li>
                <li>Top up</li>
                <li>Send!</li>
              </ol>
              <div>
              <RegistrationForm />
              </div>
              
              </div>

              <div className=' '>
              <img src="./src/undraw_transfer_money_re_6o1h.svg" alt="" />
              </div>
              
              

            </div>
            <footer className='bubble fixed-bottom'>
                <p>Contact Support</p>
                <p>Ts and Cs Apply</p>
            </footer>
          </div>
          
      
        </main>

      </div>
    
  )
}
           

export default Landingpage;