import React from 'react';
import './Paymentportal.css';
import { Link } from 'react-router-dom';



function Paymentportal  ()  {
  return (
    <div className="payment">
      <div className="payment__container">
        <input
          type="text"
          className="payment__textBox"
          
         
          placeholder="Recepient E-mail or Phone"
        />
        <input
          type="number"
          className="payment__textBox"
          
          placeholder="Amount"
        />
        <button
          className="payment__btn">
          send
        </button>
        <div>
          <p>
            You will receive an M-PESA STK pop-up notification to authorize the transaction
          </p>
        </div>
        
        <div>
        <Link to="/dashboard">Back to Home</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Paymentportal;