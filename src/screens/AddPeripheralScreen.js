import React from 'react'
import '../assets/AddDeviceScreen.scss';
import HomePageHeader from './components/HomePageHeader';
import { 
    Button,
    FormGroup,
    TextInput,
    Select,
    SelectItem
} from 'carbon-components-react';

import axios from 'axios';


//Uninstall @carbon/layout if it doesn't compile
export default function AddDeviceScreen() {
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

    async function newPeripheralDummy(){
        await axios.post('http://localhost:4000/newPeripheral', dummy_state)
        .then(response => {
            console.log(response)
            console.log(response.data)
            if (response.data.message.error){
                alert("Error: Perihperal Couldn't Be Added")
            }
            else {
                alert('New Peripheral Added') 
                window.location.reload()
            }

            
        })
        .catch(error => {
          alert("Error: Peripheral Couldn't Be Added")
          console.log("Request attempt failed")
          console.log(error);
        })
    };
    
    return(
        <>
        <div className='addDeviceCont'> 
        <HomePageHeader />
            <div className='pageTitle'>
                <h1>Add Peripheral</h1>
            </div>
                <FormGroup
                className="selector"                    
                legendId="add-peripheral-id"
                style={{
                    maxWidth: '400px'
                }}
                >
                        <Select defaultValue="placeholder-item"
                            labelText="Select a Device Type."
                            id="device_type"
                            size="md"
                            className='between-lines'
                            name="device_type"
                            onChange={handleInputChange}
                            >
                            <SelectItem
                                disabled
                                hidden
                                text="Choose a device"
                                value="placeholder-item"
                            />
                            <SelectItem
                                text="Monitor"
                                value="monitor"
                            />
                            <SelectItem
                                text="Mouse"
                                value="mouse"
                            />
                            <SelectItem
                                text="Headset"
                                value="headset"
                            />
                            <SelectItem
                                text="Keyboard"
                                value="Keyboard"
                            />
                        </Select>
                        <Select defaultValue="placeholder-item"
                            id="brand"
                            labelText="Select a Brand."
                            size="md"
                            className='between-lines'
                            name="brand"
                            onChange={handleInputChange}
                            >
                            <SelectItem
                                disabled
                                hidden
                                text="Choose a brand"
                                value="placeholder-item"
                            />
                            <SelectItem
                                text="Vorago"
                                value="vorago"
                            />
                            <SelectItem
                                text="Apple"
                                value="apple"
                            />
                            <SelectItem
                                text="Samsung"
                                value="samsung"
                            />
                        </Select>
                        <TextInput
                            labelText="Type the Model."
                            id="model"
                            className='between-lines'
                            name="model"
                            onChange={handleInputChange}
                        />
                        <TextInput
                            labelText="Type the Serial Number."
                            id="serial_number"
                            className='between-lines'
                            name="serial_number"
                            onChange={handleInputChange}
                        />
                        <Button
                        id="add_peripheral"
                        onClick={newPeripheralDummy}
                        className='between-btn'>
                            Submit
                        </Button>
                </FormGroup>
        </div>
        </>
    )
    
}