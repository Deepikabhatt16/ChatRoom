import React, {useContext} from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";

export default function Auth() {
  const{username,secret, setUsername,setSecret}=useContext(Context);
  const router=useRouter();
function onSubmit(e) {
  e.preventDefault()
  if(username.length==0||secret.length==0) return
  axios.put('https://api.chatengine.io/users/',
    {username,secret},
    {headers:{"PRIVATE-KEY":'9899464d-2e9e-4b05-9ae3-b6f4c2eb4660'}}
  )
  .then(r=>router.push('/chats'));
}
  return <div className="background">
    <p className="head">Welcome To Chat-Room</p>
    <div className="auth-container">
      <form className="auth-form" onSubmit={(e)=>onSubmit(e)}>
        <div className="auth-title">Login/SignUp</div>
        <div className="input-container">
          <input placeholder="Email" className="text-input"
          onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="input-container">
          <input
          type="password"
           placeholder="Password" 
           className="text-input"
          onChange={(e)=>setSecret(e.target.value)}/>
        </div>
        <button type="submit" className="submit-button">
          submit
          </button>
      </form>
    </div>
  </div>;
}
