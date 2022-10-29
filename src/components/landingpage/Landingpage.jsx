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
                        <img src="/src/moneytransfer.svg" alt="mobile money transfer" />
                    </div>
                </div>
            </div>
            <footer className='text-center fixed-bottom'>
                <p>Contact Support</p>
                <p>Ts and Cs Apply</p>
                <p>Socials</p>
            </footer>
        </div>
    
  )
}
           

export default Landingpage;