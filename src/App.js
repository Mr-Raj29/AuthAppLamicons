import React from 'react';
import './App.css';
import SignUP from './Components/Signup';
//import Provider from './context/Provider';
//import A from './Components/A';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import Secret from './Components/Secret';

const App = () => {
  return(

    <div>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUP />} />
        <Route path="/secret" element={<Secret />} />
        
        
      </Routes>

      
      


    
    </div>
  )
}
export default App;

//Every component which is child of my provider component will only have access to tokens
