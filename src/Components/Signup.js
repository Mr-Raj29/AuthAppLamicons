import React, { useState } from 'react';
import axios from 'axios';
import "../Styles/signup.css"

const SignUP = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  let [error, setError] = useState("");

  let { name, email, password, confirmpassword } = formData;
  console.log(formData);

  function onFormSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password || !confirmpassword) {
      return setError("Please fill all the fields");
    }
    if (password !== confirmpassword) {
      return setError("Password and Confirm Password must be the same");
    }
    axios.post("http://localhost:5000/signup",formData)
    .then((response) => console.log(response.data)
)
.catch((err) => console.log(err))
  }

  return (
    <div className="Details">
      <form onSubmit={onFormSubmit}>
        <input type="text" name="" id="" placeholder="Enter Your Name" 
        
        onChange={(e) => setFormData({...formData, name:e.target.value})}
        />
        <input type="text" placeholder="Enter Your Email" 
        
        onChange={(e) => setFormData({...formData, email:e.target.value})}


        />
        <input type="text" placeholder="Enter Your Password" 
        onChange={(e) => setFormData({...formData, password:e.target.value})}
        />
        <input type="text" name="" id="" placeholder="Please Confirm Password"
        
        onChange={(e) => setFormData({...formData, confirmpassword:e.target.value})}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUP;
