import React, {useContext, useState} from 'react';
import axios from 'axios';
import LoginContext from '../context/loginContext';
import "../Styles/login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {

     const navigate = useNavigate();
     

    let {token,setToken} = useContext(LoginContext);

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [LoggedInUser, setLoggedInUser] = useState("");


    function handleLogin(e){
        e.preventDefault();
        axios.post('http://localhost:5000/login', {email, password})
        .then((res) => {setLoggedInUser(res.data.data)
                     setToken(res.data.data.token)
        
        })
        .catch((err) => console.log(err))

        navigate("/secret")
    }

    return(

        <div className='container'>

            <form onSubmit={handleLogin} className='login-form'>
            <input type="email" placeholder="email"  onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="password"  onChange={ (e) => setPassword(e.target.value)}/>
            <button type="submit">Login</button>
            </form>
            <h1>Welcome {LoggedInUser.name}</h1>
        </div>
    )
}

export default Login;