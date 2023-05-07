import { Container } from '../../../utils/Components'
import c from './Register.module.scss'
import logo from '../../../assets/logo.png'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
});

  function registerUser(e){
    e.preventDefault();
    axios.post("https://api.escuelajs.co/api/v1/auth/login", userdata)
      .then(response => console.log(response.data))
  }

  return (
    <Container>
      <div className={c.registerWrapper}>
        <img src={logo} alt="logo" />
        <h2 className={c.registerTitle}>Create an account</h2>
        <form onSubmit={registerUser}>
          <input placeholder='Name    ' value={userdata.name    } onChange={(e) => setUserdata({...userdata, name: e.target.value})} type="text" className={c.registerInp} />
          <input placeholder='Email   ' value={userdata.email   } onChange={(e) => setUserdata({...userdata, email: e.target.value})} type="email" className={c.registerInp} />
          <input placeholder='Password' value={userdata.password} onChange={(e) => setUserdata({...userdata, password: e.target.value})} type="password" className={c.registerInp} />
          <button type='submit' className={c.registerBtn}>Register</button>
        </form>
      </div>
    </Container>
  )
}



export default Register