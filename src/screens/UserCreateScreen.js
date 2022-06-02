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


//Uninstall @carbon/layout if it doesn't compile
export default function UserCreateScreen() {
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

    async function newUserDummy(){
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
    
    return(
        <>
        <div className='addDeviceCont'> 
        <HomePageHeader />
            <div className='pageTitle'>
                <h1>Create User</h1>
            </div>
                <FormGroup
                className="selector"                    
                legendId="add-user-id"
                style={{
                    maxWidth: '400px'
                }}
                >
                        <TextInput
                            labelText="Email."
                            id="username"
                            className='between-lines'
                            name="username"
                            onChange={handleInputChange}
                        />
                        <TextInput
                            labelText="Password."
                            id="password"
                            className='between-lines'
                            name="password"
                            onChange={handleInputChange}
                        />
                        <Select defaultValue="placeholder-item"
                            id="role"
                            labelText="Select a Role."
                            size="md"
                            className='between-lines'
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
                        id="create_user"
                        onClick={newUserDummy}
                        className='between-btn'>
                            Submit
                        </Button>
                </FormGroup>
        </div>
        </>
    )
    
}