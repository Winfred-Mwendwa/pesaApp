import React, {useState,setState} from 'react';
import {database} from '/src/firebase'
import {ref,push,child,update} from "firebase/database";
import './Registration.css'
function RegistrationForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "phone"){
            setPhone(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        



    }

    const handleSubmit  = () => {
        
        console.log(firstName,lastName,phone,email,password,confirmPassword);
        let obj = {
            firstName : firstName,
            lastName:lastName,
            phone:phone,
            email:email,
            password:password,
            confirmPassword:confirmPassword,
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
    }

    return(
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Get Started
              </button>


              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                      
                    </div>
                    <div class="modal-body">
                                <div className="form">
                                    <div className="form-body">
                                        <div className="username">
                                            <label className="form__label" for="firstName">First Name </label>
                                            <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name" required/>
                                        </div>
                                        <div className="lastname">
                                            <label className="form__label" for="lastName">Last Name </label>
                                            <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Last Name" required/>
                                        </div>
                                        <div className="phone">
                                            <label className="form__label" for="phone">Phone Number </label>
                                            <input  type="phone" name="" id="phone" value={phone}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="+25471234567" required/>
                                        </div>

                                        <div className="email">
                                            <label className="form__label" for="email">Email </label>
                                            <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email" required/>
                                        </div>
                                        <div className="password">
                                            <label className="form__label" for="password">Password </label>
                                            <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password" required/>
                                        </div>
                                        <div className="confirm-password">
                                            <label className="form__label" for="confirmPassword">Confirm Password </label>
                                            <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password" required/>
                                        </div>
                                    </div>
                        <div class="footer">
                            <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
                        </div>
                    </div>
                    </div>
       
          



                    <div class="modal-footer">
                      <button onClick={()=>handleSubmit()} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      
                    </div>
                  </div>
                </div>
                </div>
        </div>
        
               

                   
    )       
}

export default RegistrationForm