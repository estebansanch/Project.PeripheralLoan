import React, {useState} from 'react'
import { Button, TextInput} from 'carbon-components-react';
import '../assets/LoginScreen.scss'
import IBMLogo from '../assets/img/ibm_logo.png';

import AuthApi from '../AuthApi';
import jsCookie from 'js-cookie';

import axios from 'axios';

export default function LoginScreen() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);

  const Auth = React.useContext(AuthApi)


  async function validateLogin(){
    await axios.get('https://rancho-back.mybluemix.net/checkLogin', {params: {username: username, password: password}})
    .then(response => {
      if (response.data.data.valid){
          Auth.setAuth(true)
          jsCookie.set("id", response.data.data.USER_ID)
          jsCookie.set("user", response.data.data.USERNAME)
          jsCookie.set("role", response.data.data.ROLE)
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

  const handleKeypress = (e) => {
  if (e.key === 'Enter') {
    validateLogin();
  }
};

  return (
    <div className='mainPage'>
        <div className='logInBox'>
            <img src={IBMLogo} alt="IBM Logo" className='imgIbm'/>
            <p className='titleLogin'>Log-In With Your IBM Credentials</p>
            <TextInput type="text" labelText="Email Address" className='inputField' value={username} onKeyPress={handleKeypress} onChange={e => setUsername(e.target.value)}/>
            <TextInput type="password" labelText="Password" className='inputField' value={password} onKeyPress={handleKeypress} onChange={e => setPassword(e.target.value)}/>
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
