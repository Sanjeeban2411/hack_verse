import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Register() {
    const navigate = useNavigate();

  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [lName, setLName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
//   const [credit, setCredit] = useState("");
  const [metamask, setMetamask] = useState("");
  const [gender, setGender] = useState("");

    const handleForm = (e) =>{
        e.preventDefault();

        const data = {
            first_name:fName,
            middle_name:mName,
            last_name:lName,
            user_name:userName,
            gender:gender,
            email:email,
            phone:phone,
            password:password,
            confirmPassword:confirmPass,
            address:address,
            locality:locality,
            district:district,
            pincode:pincode,
            metamask_address:metamask
        }
        axios({
            method: "post",
            url: "http://localhost:8000/signup",
            data: data,
          })

        .then(()=>{
            console.log("User Registered")
            navigate('/dashboard')
        })
        .catch((e)=>{
            console.log("error:",e)
        })
    }

  return (
    <div>
      <div className="container">
        <div className="title">Registation</div>
        <form action="#">
          <div className="user_details">
            <div className="input_pox">
              <span className="datails">First Name</span>
              <input
                type="text"
                placeholder="enter your First name"
                required
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Middle Name</span>
              <input
                type="text"
                placeholder="enter your middle name"
                onChange={(e) => setMName(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Last Name</span>
              <input
                type="text"
                placeholder="enter your Last name"
                required
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Username</span>
              <input
                type="text"
                placeholder="enter your Username"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Email</span>
              <input
                type="text"
                placeholder="enter your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Phone Number</span>
              <input
                type="text"
                placeholder="enter your Phone"
                required
                onChange={(e) => setPhone(e.target.value)}
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
            <div className="input_pox">
              <span className="datails">Confirm Password</span>
              <input
                type="text"
                placeholder="Confirm your Password"
                required
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>

            {/* Address */}
            <div className="input_pox">
              <span className="datails">
                <h3>Address</h3>
              </span>
            </div>
            <div className="input_pox">
              <span className="datails"></span>
            </div>
            <div className="input_pox">
              <span className="datails">Street</span>
              <input
                type="text"
                placeholder="enter your Street"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Locality</span>
              <input
                type="text"
                placeholder="enter your Locality"
                required
                onChange={(e) => setLocality(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">district</span>
              <input
                type="text"
                placeholder="enter district name"
                required
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Pin code</span>
              <input
                type="text"
                placeholder="enter Pin code"
                required
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>

            {/* Account Address */}
            <div className="input_pox">
              <span className="datails">
                <h3>Wallet Address</h3>
              </span>
            </div>
            <div className="input_pox">
              <span className="datails"></span>
            </div>
            <div className="input_pox">
              <span className="datails">Address {"(eg. 0x9...)"}</span>
              <input
                type="text"
                placeholder="enter your Wallet address"
                required
                onChange={(e) => setMetamask(e.target.value)}
              />
            </div>
          </div>
          <div className="gender_details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span className="gender_title"> Gender</span>
            <div className="category">
              <label for="dot-1" onClick={(e)=>setGender("Male")}>
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>
              <label for="dot-2" onClick={(e)=>setGender("Female")}>
                <span className="dot two"></span>
                <span className="gender">Female</span>
              </label>
              <label for="dot-3" onClick={(e)=>setGender("Prefer not to say")}>
                <span className="dot three"></span>
                <span className="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div className="button">
            <input
              type="submit"
              value="Register"
              onClick={handleForm}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
