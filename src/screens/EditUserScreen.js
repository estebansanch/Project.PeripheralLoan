import React, {useState, useEffect} from 'react'
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

    const location = useLocation();

    const [selectedRole, setSelectedRole] = useState(false)
    const [userEmail, setUserEmail] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [columnData, setColumnData] = useState("");
    const [changeData, setChangeData] = useState("");
    const [userActualID, setUserActualID] = useState(location.state.userID);
    console.log(location)
    var dummy_state = {
        "user_params": {
            "column": "",
            "change": "",
            "userID": `${location.state.userID}`
        }
    }
    function handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === "column") {
            setColumnData(value)
            if (value === "ROLE") {
                setSelectedRole(true)
            }
            else {
                setSelectedRole(false)
            }
        }

        if (name === "change") {
            setChangeData(value)
        } else {
            setChangeData("");
        }

        console.log(name)
        dummy_state["user_params"][name] = value

        console.log(dummy_state)
    };

    async function changeUserInfo(){
        var params = {
            "user_params": {
                "column": columnData,
                "change": changeData,
                "userID": userActualID
            }
        }
        console.log(params)
        await axios.post('https://rancho-back.mybluemix.net/editUserInfo', params)
        .then(response => {
            console.log(response)
            console.log(response.data)
            if (response.data.message.error || response.data.success === -2){
                alert("Error: User Couldn't Be Edited")
            }
            else {
                alert('User Edited Successfully') 
                window.location.reload()
            }

            
        })
        .catch(error => {
          alert("Error: User request change data not working")
          console.log("Request attempt failed")
          console.log(error);
        })
    };

    React.useEffect(() => {
        setTimeout(async () => {
            // setIsLoading(false);
            try {
                await axios.post("https://rancho-back.mybluemix.net/IDTouser", {"id": location.state.userID})
                .then(response => {
                    console.log(response)
                    setUserEmail(response.data.data[0].USERNAME)
                })
                .catch(error => {
                    console.log(error)
                })
                setIsLoaded(true)

            } catch (err) {
                console.log(err);
            }
        });
    }, []);
    
    return(
        <>
        <div className='editUserScreen'> 
        <HomePageHeader />
            <div className='pageTitleEdit'>
                {isLoaded ? (
                    <h1>Edit User {userEmail}:</h1>
                ) : (
                    <h1>Edit User :</h1>
                )}
                
            </div>
            <FormGroup
                    className="selector"                    
                    legendId="editUserInfo"
                    style={{
                        maxWidth: '400px'
                    }}
                    >
                            <Select defaultValue="placeholder-item"
                                id="column"
                                labelText="Select Which Value To Edit."
                                size="md"
                                className='between-lines roleSelec Email.tion'
                                name="column"
                                onChange={handleInputChange}
                                >
                                <SelectItem
                                    disabled
                                    hidden
                                    text="Choose a value"
                                    value="placeholder-item"
                                />
                                <SelectItem
                                    text="Email"
                                    value="USERNAME"
                                />
                                <SelectItem
                                    text="Password"
                                    value="PASSWORD"
                                />
                                <SelectItem
                                    text="Role"
                                    value="ROLE"
                                />
                            </Select>
                            {!selectedRole ? (
                                <TextInput
                                labelText="Edit Selected Value."
                                id="change"
                                className='between-lines roleSelection'
                                name="change"
                                onChange={handleInputChange}
                                />
                            ):(
                                <Select defaultValue="placeholder-item"
                                    id="change"
                                    labelText="Select a Role."
                                    size="md"
                                    className='between-lines'
                                    name="change"
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
                            )}
                            <Button
                            id="change_userrole"
                            onClick={changeUserInfo}
                            className='between-btn'>
                                Update
                            </Button>
                    </FormGroup>
        </div>
        </>
    )
    
}