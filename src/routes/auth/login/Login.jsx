import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import c from './Login.module.scss'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [userdata, setUserdata] = useState({
      email: "",
      password: "",
  });

  function loginUser(e){
    e.preventDefault();
    axios.post("https://api.escuelajs.co/api/v1/auth/login", userdata)
      .then(response => console.log(response.data))
  }

  return (
    <div>
      <img src={logo} alt="logo" />
      <h2 className={c.loginTitle}>Hello</h2>
      <p className={c.logonText}>Sign in to eBay or <Link to='/auth/register'>create an account</Link></p>

      <form onSubmit={loginUser}>
        <input placeholder='Email   ' value={userdata.email} onChange={(e) => setUserdata({ ...userdata, email: e.target.value })} type="email" className={c.registerInp} />
        <input placeholder='Password' value={userdata.password} onChange={(e) => setUserdata({ ...userdata, password: e.target.value })} type="password" className={c.registerInp} />
        <button type='submit' className={c.registerBtn}>Login</button>
      </form>
    </div>
  )
}

export default Login