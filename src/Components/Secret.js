import React,{useContext, useEffect,useState} from 'react';
import axios from 'axios';
import LoginContext from '../context/loginContext';

const Secret = () => {

    let [secret, setSecret] = useState("")

    let {token,setToken} = useContext(LoginContext);



    useEffect(() => {
        axios.get("http://localhost:5000/secret" ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((response)=> setSecret(response.data))

        .catch((err) => console.log(err))

    },[token])

    function handleLogout(){
        axios.delete("http://localhost:5000/logout",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response.data);
            setToken("")
            setSecret("")

        })
        .catch((err) => console.log(err))

    }




    return (
        <div>
            <h1>Secret component</h1>
           { secret.loggedInAgentDetails && 
           <div>
           <h3>
                Welcome {secret.loggedInAgentDetails.name}
            </h3>
            <p>{secret.message}</p>
            <button onClick={handleLogout}>Logout</button>

           </div>}
        </div>
    )
}

export default Secret;