import React, { useState } from 'react'
import Login from './Login';
import './AuthContainer.scss';
import Register from './Register';
import Reset from './Reset';

const AuthContainer = () => {

  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  })
  // const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);
  // const [reset, setReset] = useState(false);

  const handleReset = () => {
    setAuth({
      login: false, register: false, reset: true,
    })
    // setLogin(false);
    // setRegister(false);
    // setReset(true);
  }

  const handleRegister = () => {
    setAuth({
      login: false, register: true, reset: false,
    })
    // setRegister(false);
    // setReset(false);
    // setLogin(true);
  }


  const handleLogin = () => {
    setAuth({
      login: true, register: false, reset: false,
    })
      // setLogin(false);
      // setReset(false);
      // setRegister(true);
  }

 
  return (
    <section className="--flex-center --100vh ">
      <div className="container box"> 
      {auth.login && <Login onRegister={handleRegister} onReset={handleReset}  /> }
      {auth.register && <Register onLogin={handleLogin} /> }
      {auth.reset && <Reset onLogin={handleLogin} /> }
      </div>
    </section>
  
  )
}

export default AuthContainer