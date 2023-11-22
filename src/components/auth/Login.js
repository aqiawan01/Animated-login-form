import React, { useState, useEffect } from 'react';
import loginImg from '../../assets/login.svg';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';


const Login = ({ onRegister, onReset,  onShowPassword, onHandleTogglePassword}) => {
  const [showIndicator , setShowIndicator] = useState(false);
  const [pass, setPass] = useState("");

  const handleShowIndicator = () => {
    setShowIndicator(true);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
    console.log(pass);
  }
  return (
    <div className="main-container --flex-center">
       <div className="img-container">
        <img src={loginImg} alt="Login Image" />
       </div>
       <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger  --text-center">Login</h2>
          <input type="text" className="--width-100" placeholder="User Name"  />
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
           <button className="--btn --btn-primary --btn-block">Login</button>
           <a href="#" className="--text-sm" onClick={onReset} >Forgot Password</a>
           <span className="--text-sm --block">Don't have a account ?
           <a href="#" className="--text-sm" onClick={onRegister} >Register</a></span>
        </form>
       </div>
    </div>
  )
}

export default Login