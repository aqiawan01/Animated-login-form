import React, { useState, useEffect } from 'react';
import registerImg from '../../assets/register.svg';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { GoDot } from "react-icons/go";
import { FaCheck } from "react-icons/fa";


const Register = ({onLogin, onShowPassword, onHandleTogglePassword}) => {
  const [showIndicator , setShowIndicator] = useState(false);

  const [pass, setPass] = useState("");

  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);


  const [passComplete, setPassComplete] = useState(false);



  const handleShowIndicator = () => {
    setShowIndicator(true);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
    console.log(pass);
  }

  useEffect(() => {
    // Check Lower and Upercase
    if(pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
      setPassLetter(true);
    } else {
      setPassLetter(false);
    }

    // check For Number 
    if(pass.match(/([0-9])/)){
      setPassNumber(true);
    } else {
      setPassNumber(false);
    }

    // Check For Special Char
    if(pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
      setPassChar(true)
    } else {
      setPassChar(false);
    }
    // Check Pass Lenght 
    if(pass.length > 7){
      setPassLength(true);
    } else {
      setPassLength(false);
    }

    // Check Complete Pass
    if(passLetter && passNumber && passChar && passLength){
       setPassComplete(true);
    } else {
      setPassComplete(false);
    }

  }, [pass, passLetter, passNumber, passLength, passChar]);
  return (
    <div className="main-container --flex-center">
        <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger  --text-center">Register</h2>
          <input type="text" className="--width-100" placeholder="User Name"  />
          <input type="text" className="--width-100" placeholder="User Email"  />
          {/* Password filed */}
          <div className="password">
             <input 
               type={onShowPassword ? "text" : "password"} 
               className="--width-100" 
               placeholder="Password" 
               onFocus={handleShowIndicator}
               value={pass}
               onChange={handlePasswordChange}
            />
             <span className="icon" onClick={onHandleTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
          </div>
           {/* Password filed */}
           <button disabled={!passComplete} className={passComplete ? "--btn --btn-primary --btn-block" : "--btn --btn-primary --btn-block btn-disabled"}>Register</button>
           <span className="--text-sm --block">Have an account ?
           <a href="#" className="--text-sm" onClick={onLogin} >Login</a></span>
          {/* Pass Strenght Indiator */}
          <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
            <ul className="--list-style-none --card --bg-grey --text-sm --p">
              <p className="--text-sm">Password Strenght Indicators</p>
              <li className={passLetter ? "pass-green" : "pass-red"}>
                <span className="--align-center" >
                  {passLetter ? <FaCheck /> : <GoDot /> }
                 &nbsp; Lowercase & Upercase
                 </span>
              </li>
              <li className={passNumber ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passNumber ? <FaCheck /> : 
                 <GoDot /> }
                 &nbsp; Numbers (0-9)
                 </span>
              </li>
              <li className={passChar ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passChar ? <FaCheck /> :
                 <GoDot /> }
                 &nbsp; Special Character (!@#$%&^*)
                 </span>
              </li>
              <li className={passLength ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLength ? <FaCheck /> :  <GoDot />}
                
                 &nbsp; At least 8 Character
                 </span>
              </li>
            </ul>
          </div>
          {/* Pass Strenght Indiator */}
        </form>
       </div>
       <div className="img-container">
        <img src={registerImg} alt="Register Image" />
       </div>
       
    </div>
  )
}

export default Register