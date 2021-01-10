import React from "react";
import {useHistory} from "react-router-dom"
import "firebase/auth";
import "firebase/firestore";

import { auth } from "./firebase";
function Feed(){
   const history = useHistory('');

  const logout =(event)=>{
    auth.signOut();
    history.push("/Login")

  }


   
  return(
    <div><h1>feed here </h1>
    <button type= "button" onClick = {logout} >Logout</button>
    </div>
  )
}
export default Feed;