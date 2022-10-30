import React from "react";
import '../../App.css'
import Header from "../header";
import RegistrationForm from "../registration/Registration";


function Landingpage () {
    return (
        <div className="container text-center">
            <div>
                <Header />
            </div>
            <div className="row">
                <div className="col-md-6 even-columns">
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
                <div className="col-md-6 even-columns">
                    <div className='transfer-image '>
                        <img src="https://live.staticflickr.com/65535/52464923565_a8355368f4_w.jpg" width="400" height="301" alt="Money transfer _Monochromatic"/>
                    </div>
                </div>
            </div>
            <footer className='text-center fixed-bottom'>
                <p>Contact <a href="#">Support</a></p>
                <p><a href="#">Ts and Cs</a> Apply</p>
                <div>
                    <i className="fa-brands fa-facebook icon"></i>
                    <i className="fa-brands fa-instagram icon"></i>
                    <i className="fab fa-twitter icon"></i>
                </div>
            </footer>
        </div>
    
  )
}
           

export default Landingpage;