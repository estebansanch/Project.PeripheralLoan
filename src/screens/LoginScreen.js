import React from 'react'
import { Button, TextInput} from 'carbon-components-react';
import '../assets/LandingPageScreen.scss'

export default function LoginScreen() {
  return (
    <div className='mainPage'>
        <div className='logInBox'>
            <img src="https://myleanacademy.com/wp-content/uploads/2020/01/logo-ibm-png-ibm-logo-png-4464.png" alt="IBM Logo" className='imgIbm'/>;
            <p className='titleLogin'>Log-In With Your IBM Credentials</p>
            <TextInput type="text" labelText="Email Address" className='inputField'/>
            <TextInput type="text" labelText="Password" className='inputField'/>
            <Button size="2xl" type='submit' className="buttonLogin">Log In</Button>
        </div>
    </div>
  )
}
