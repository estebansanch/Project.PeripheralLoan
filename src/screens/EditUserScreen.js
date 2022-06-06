import React from 'react'
import '../assets/AddDeviceScreen.scss';
import HomePageHeader from './components/HomePageHeader';
import { 
    Button,
    FormGroup,
    TextInput,
    Select,
    SelectItem,
    Checkbox
} from 'carbon-components-react';

import axios from 'axios';

import { useLocation } from "react-router-dom";



//Uninstall @carbon/layout if it doesn't compile
export default function EditUserScreen() {
    var dummy_state = {
        "user_params": {
            "username": "",
            "password": "",
            "role": ""
        }
    }
    function handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        dummy_state["user_params"][name] = value
        console.log(dummy_state)
    };

    async function changeEmail(){
        await axios.post('http://localhost:4000/newUser', dummy_state)
        .then(response => {
            console.log(response)
            console.log(response.data)
            if (response.data.message.error || response.data.success === -2){
                alert("Error: User Couldn't Be Created")
            }
            else {
                alert('New User Created') 
                window.location.reload()
            }

            
        })
        .catch(error => {
          alert("Error: User Couldn't Be Created")
          console.log("Request attempt failed")
          console.log(error);
        })
    };

    async function changePassword(){
        await axios.post('http://localhost:4000/newUser', dummy_state)
        .then(response => {
            console.log(response)
            console.log(response.data)
            if (response.data.message.error || response.data.success === -2){
                alert("Error: User Couldn't Be Created")
            }
            else {
                alert('New User Created') 
                window.location.reload()
            }

            
        })
        .catch(error => {
          alert("Error: User Couldn't Be Created")
          console.log("Request attempt failed")
          console.log(error);
        })
    };

    async function changeRole(){
        await axios.post('http://localhost:4000/newUser', dummy_state)
        .then(response => {
            console.log(response)
            console.log(response.data)
            if (response.data.message.error || response.data.success === -2){
                alert("Error: User Couldn't Be Created")
            }
            else {
                alert('New User Created') 
                window.location.reload()
            }

            
        })
        .catch(error => {
          alert("Error: User Couldn't Be Created")
          console.log("Request attempt failed")
          console.log(error);
        })
    };

    const location = useLocation();
    
    return(
        <>
        <div className='editUserScreen'> 
        <HomePageHeader />
            <div className='pageTitleEdit'>
                <h1>Edit User {location.state.username}:</h1>
            </div>
            <div className='all-forms'>
                <div className='section-form'>
                    <FormGroup
                    className="selector"                    
                    legendId="add-user-id"
                    style={{
                        maxWidth: '400px'
                    }}
                    >
                            <TextInput
                                labelText="Edit Email."
                                id="username"
                                className='between-lines roleSelection'
                                name="username"
                                onChange={handleInputChange}
                            />
                            <Button
                            id="change_useremail"
                            onClick={changeEmail}
                            className='between-btn'>
                                Update
                            </Button>
                    </FormGroup>
                </div>

                <div className='section-form'>
                    <FormGroup
                    className="selector"                    
                    legendId="add-user-id"
                    style={{
                        maxWidth: '400px'
                    }}
                    >
                            <TextInput
                                labelText="Edit Password."
                                id="password"
                                className='between-lines roleSelection'
                                name="password"
                                onChange={handleInputChange}
                            />
                            <Button
                            id="change_userpassword"
                            onClick={changePassword}
                            className='between-btn'>
                                Update
                            </Button>
                    </FormGroup>
                </div>
                <div className='section-form'>
                    <FormGroup
                    className="selector"                    
                    legendId="add-user-id"
                    style={{
                        maxWidth: '400px'
                    }}
                    >
                            <Select defaultValue="placeholder-item"
                                id="role"
                                labelText="Edit Role."
                                size="md"
                                className='between-lines roleSelection'
                                name="role"
                                onChange={handleInputChange}
                                >
                                <SelectItem
                                    disabled
                                    hidden
                                    text="Choose a role"
                                    value="placeholder-item"
                                />
                                <SelectItem
                                    text="Normal User"
                                    value="1"
                                />
                                <SelectItem
                                    text="Focal"
                                    value="2"
                                />
                                <SelectItem
                                    text="Security"
                                    value="3"
                                />
                                <SelectItem
                                    text="Admin"
                                    value="4"
                                />
                            </Select>
                            <Button
                            id="change_userrole"
                            onClick={changeRole}
                            className='between-btn'>
                                Update
                            </Button>
                    </FormGroup>
                </div>
            </div>
        </div>
        </>
    )
    
}