import React from 'react'
import ResetImg from '../../assets/forgot.svg';
import {AiOutlineClose} from 'react-icons/ai';

const Reset = ({onLogin}) => {
  return (
    <div className="main-container --flex-center">
        <div className="form-container reset">
        <form className="--form-control">
          <h2 className="--color-danger  --text-center">Reset Password</h2>
          <input type="text" className="--width-100" placeholder="User Email"  />
           <button className="--btn --btn-primary --btn-block">Reset Passwors</button>
           <span className="--text-sm --block --text-center">we will send you a reset link!!!</span>
          <div className="close">
            <AiOutlineClose color="red" onClick={onLogin} />
          </div>
        </form>
       </div>
       <div className="img-container">
        <img src={ResetImg} alt="Reset Image" />
       </div>
       
    </div>
  )
}

export default Reset