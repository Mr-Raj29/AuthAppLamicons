

import React,{useState} from 'react';
import LoginContext from "./loginContext";


const Provider = (props) => {

    let [token,setToken] = useState("");

    //i provide token and set token in the value property below so any component can access it

    return(
        <LoginContext.Provider value={{token,setToken}}> 

        {props.children}



        </LoginContext.Provider>

    )

    

}


export default Provider;