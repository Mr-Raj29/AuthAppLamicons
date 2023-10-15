import React, { useContext } from "react";
import LoginContext from "../context/loginContext";

const A = () => {

    console.log(useContext(LoginContext));

    return(
        <div>
              <h1>Hello</h1>
        </div>
    )
}


export default A;