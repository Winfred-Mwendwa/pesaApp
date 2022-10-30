import React from 'react';
import './Topup.css';
import { Link } from 'react-router-dom';



function Topup  ()  {
  return (
    <div className="payment">
      <div className="payment__container">
        
        <input
          type="number"
          className="payment__textBox"
          
          placeholder="Amount"
        />
        <button
          className="payment__btn">
          Top up
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

export default Topup;