import React from "react";
import '../../App.css'
import Header from "../header";
import RegistrationForm from "../registration/Registration";


function Landingpage () {
    return (
        <div class="container text-center">
            <div>
            <Header />

            </div>
            <div class="row">
                <div class="col">
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
                </div>
                <div class="col">
                    <div className='transfer-image '>
                    <img src="https://live.staticflickr.com/65535/52464923565_a8355368f4_w.jpg" width="400" height="301" alt="Money transfer _Monochromatic"/>
                    </div>
                </div>
            </div>
            <footer className='text-center'>
                <p>Contact Support</p>
                <p>Ts and Cs Apply</p>
                <div>
                <i class="fa-brands fa-facebook icon"></i>
                <i class="fa-brands fa-instagram icon"></i>
                <i class="fab fa-twitter icon"></i>
                </div>
            </footer>
        </div>
    
  )
}
           

export default Landingpage;