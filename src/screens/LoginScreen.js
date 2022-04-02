import React, {useState} from 'react'
import { Button, TextInput} from 'carbon-components-react';
import '../assets/LandingPageScreen.scss'

import axios from 'axios';

export default function LoginScreen() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);

  async function validateLogin(){
    await axios.get('http://localhost:4000/checkLogin', {params: {username: username, password: password}})
    .then(response => {
      console.log(response.data.data)
      if (response.data.data.length > 0){
        window.location.href='/landingPage';
      }
      else {
        setErrorLogin(true);
      }
    })
    .catch(error => {
      console.log("no funciono")
      console.log(error);
    })
  }

  return (
    <div className='mainPage'>
        <div className='logInBox'>
            <img src="https://myleanacademy.com/wp-content/uploads/2020/01/logo-ibm-png-ibm-logo-png-4464.png" alt="IBM Logo" className='imgIbm'/>
            <p className='titleLogin'>Log-In With Your IBM Credentials</p>
            <TextInput type="text" labelText="Email Address" className='inputField' value={username} onChange={e => setUsername(e.target.value)}/>
            <TextInput type="text" labelText="Password" className='inputField' value={password} onChange={e => setPassword(e.target.value)}/>
            {errorLogin === true ? (
              <p className='errorMessage'>Your credentials are not valid, try again</p>
            ) : (
              <p></p>
            )}
            <Button size="2xl" type='submit' className="buttonLogin" onClick={validateLogin}>Log In</Button>
        </div>
    </div>
  )
}
