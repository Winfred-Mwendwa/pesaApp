
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Login, RegistrationForm, Reset } from './components';

import {Landingpage} from './components';
import {Dashboard} from './components';




function App() {
    
    
    return (
      
        <Routes>
<Route exact path="/" element={<Landingpage/>}></Route>
<Route exact path="/login" element={<Login />} />
  <Route exact path='/dashboard' element={<Dashboard />}></Route> 
   <Route exact path='/registration' element={<RegistrationForm />}></Route>
   <Route exact path='/reset' element={<Reset />}></Route>
   </Routes>
    )
          }

export default App
