import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate()
  const [userIdentity, setUserIdentity] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) =>{
    e.preventDefault();
    const data = {
        userIdentity:userIdentity,
        password:password
    }
    axios({
        method: "post",
        url: "http://localhost:8000/login",
        data: data,
      })

    .then(()=>{
        console.log("Logged In")
        navigate('/')
    })
    .catch((e)=>{
        console.log("error:",e)
    })
  }

  return (
    <div>
      <div className="container loginContaine">
        <div className="title">Login</div>
        <form action="#">
          <div className="user_details login_details">
            <div className="input_pox">
              <span className="datails">Username/phone/email</span>
              <input
                type="text"
                placeholder="enter your details"
                required
                onChange={(e) => setUserIdentity(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Password</span>
              <input
                type="text"
                placeholder="enter your Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <div className="Remember_input_pox">
                            <input type="checkbox" name="remember" id="remember" />
                            <label for="remember">Remember me</label>
                        </div> */}
          </div>
          <div className="button">
            <input type="submit" value="Login" onClick={handleForm} />
          </div>
        </form>
      </div>
    </div>
  );
}
