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
        "device_params": {
            "device_type": "",
            "brand": "",
            "model": "",
            "serial_number": "",
            "state": ""
        }
    }
    function handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        dummy_state["device_params"][name] = value
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
                            labelText="Name."
                            //id="model"
                            className='between-lines'
                            //name="model"
                            onChange={handleInputChange}
                        />
                        <TextInput
                            labelText="Email."
                            //id="serial_number"
                            className='between-lines'
                            //name="serial_number"
                            onChange={handleInputChange}
                        />
                        <TextInput
                            labelText="Serial."
                            //id="serial_number"
                            className='between-lines'
                            //name="serial_number"
                            onChange={handleInputChange}
                        />
                        <fieldset>
                            <legend>Is Admin?</legend>
                            <Checkbox 
                                id="checkbox-admin" /
                            >
                        </fieldset>
                        <fieldset>
                            <legend>Permits</legend>
                            <Checkbox 
                                labelText='Register Check-In' 
                                id="checkbox-checkin" /
                            >
                            <Checkbox 
                                labelText='Register Check-Out' 
                                id="checkbox-checkout" /
                            >
                            <Checkbox 
                                labelText='Security' 
                                id="checkbox-security" /
                            >
                            <Checkbox 
                                labelText='Report' 
                                id="checkbox-report" /
                            >
                        </fieldset>
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