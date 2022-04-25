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


//Uninstall @carbon/layout if it doesn't compile
export default function AddDeviceScreen() {
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
                        />
                        <TextInput
                            labelText="Type the Serial Number."
                            id="serial_number"
                            className='between-lines'
                        />
                        <Button
                        id="add_peripheral"
                        className='between-btn'>
                            Submit
                        </Button>
                </FormGroup>
        </div>
        </>
    )
}