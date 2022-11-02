import React from "react";
import '../../App.css'
import Header from "../header";
import RegistrationForm from "../registration/Registration";


function Landingpage () {
    return (
        <div className="container-fluid text-center">
            <div>
                <Header />
            </div>
            <div className="row">
                <div className="col-md-6 even-columns text-background" >
                    <div className='mt-5' >
                        <p className='tag'>
                            Send money in three easy steps! 
                        </p>
                        <h2 className="p-4">Register.Top up. Send!</h2>
                        <div>
                            <RegistrationForm />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 even-columns d-flex align-items-center justify-content-center">
                    
                        <img src="https://live.staticflickr.com/65535/52467064080_133f9f364b_w.jpg" alt="310"/>
                    
            </div>
            
                <div className="col-md-6 even-columns text-background">
                    <div className='mt-5'>
                        <p className='tag'>
                            Fast and secure 
                        </p>
                        <h2 className="p-4">Enjoy fast and secure payments on the go.</h2>
                        <div>
                            <button className="btn">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 even-columns d-flex align-items-center justify-content-center">
                    <div className='img-background '>
                        <img src="https://live.staticflickr.com/65535/52466122672_75ea2d5b2e_w.jpg" alt="225 (1)"/>
                    </div>
                </div>
            
            
                <div class="col-md-6 even-columns text-background">
                    <div className="mt-5">
                        <p className="tag">Pay Friends</p>
                        <h2 className="p-5">Whether you're out for lunch with friends or paying for utilities with your roommate, splitting the bill has never been easier with pesaApp.</h2>
                        <button className="btn">Learn More</button>
                    </div>
                </div>
                <div class="col-md-6 even-columns d-flex align-items-center justify-content-center">
                    <div className='img-background'>
                        <img src="https://live.staticflickr.com/65535/52466884199_0734e1b653_w.jpg" width="400" height="267" alt="331"/>
                    </div>
                </div>
            
           
                <div className="col-md-6 even-columns mx-auto text-background">
                    <div className="mt-5">
                        <p className="tag">Send Gifts</p>
                        <h2 className="p-5">Set up custom notifications for events or auto-send gifts for that special occasion. Never forget a birthday again!</h2>
                    </div>
                    <button className="btn">Learn More</button>
                </div>
                <div className="col-md-6 even-columns d-flex align-items-center justify-content-center">
                    <div className='img-background'>
                        <img src="https://live.staticflickr.com/65535/52466181052_99de533b4c_w.jpg" width="400" height="267" alt="60"/>
                    </div>  
                </div>
            
            
                <div className="even-columns text-center movement-text text-background">
                    <h2>Join the Movement, start using pesaApp today!</h2>
                    <div>
                            <RegistrationForm />
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