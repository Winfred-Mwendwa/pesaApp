import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Userlog from "../userlog/Userlog";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current)
  };
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="container text-center">
      <div>
        <header>
          <nav className="navbar">
            <div className="mt-1">
            <img src="https://live.staticflickr.com/65535/52464860390_f03c9dfcda.jpg" width="100" height="100" alt="pesaApp logo"/>

            </div>
            
            <div>
              <button className="btn m-0" onClick={handleClick}><i class="fa-solid fa-user user-icon"></i></button>
                {isShown&& <Userlog />}
            </div>     
          </nav>
		    </header>
      </div>
      <div className="row">
        <div className="col-md-6 even-columns " id='tagline'>
          <div className=' mt-5' >
            <h1 className='tag'>
              Welcome, {name} 
            </h1>
            <div className="p-2">
              Available Account Balance:
            </div>
            <div className="p-2 fs-1">
              00.00KSh
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <Link to='/payments'><button className="btn">Send</button></Link> 
                </div>
                <div className="col">
                  <Link to='/topup'><button className="btn">Top up</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 even-columns d-flex align-items-center justify-content-center">
          <div className='transfer-image '>
            <img src="https://live.staticflickr.com/65535/52463944852_a9050e7992_z.jpg" alt="wallet"/>
          </div>
        </div>
      </div>
      <div className="row">
                <div className="col-md-6 even-columns" >
                    <div className='mt-5 text' >
                        <p className='tag'>
                             pesaPoints
                        </p>
                        <h2 className="p-4">Earn pesaPoints with every transaction which you can redeem to send and spend!</h2>
                        <div>
                            <button className="btn">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 even-columns d-flex align-items-center justify-content-center">
                    <div className='img-background '>
                    <img src="https://live.staticflickr.com/65535/52466606921_4785e6e282_w.jpg" width="400" height="267" alt="Trophy"/>
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
</div>
  );
}
export default Dashboard;