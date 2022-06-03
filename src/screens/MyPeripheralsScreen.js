import React, {useState} from 'react'
import '../assets/myPheripheralsScreen.scss'
import axios from 'axios'
import MonitorSVG from '../assets/img/device.svg'
import MouseSVG from '../assets/img/mouse.svg'
import HeadsetSVG from '../assets/img/headset.svg'
import KeyboardSVG from '../assets/img/keyboard.svg'
import HomePageHeader from './components/HomePageHeader'
import { 
    Button,
} from 'carbon-components-react';

import QRCode from "react-qr-code";
import jsCookie from 'js-cookie';
const userID = jsCookie.get("id");

export default function MyPeripheralsScreen() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [qrData, setQrData] = useState(-1);
    const [userData, setUserData] = useState([]);

    React.useEffect(() => {
        setTimeout(async() => {
          // setIsLoading(false);
          try {
              console.log("USERID: ", userID)
              const params = {
                  "userID": userID
              }
              await axios.post('http://localhost:4000/getUserRequests', params)
              .then(response => {
                console.log(response)
                setUserData(response.data.data)
                setIsLoaded(true)
              })
              .catch(error => {
                  console.log(error)
              })
    
          } catch(err) {
            console.log(err)
          }
        });
      }, []);

      /*
<div className='peripheral-item'>
                            <div className='peripheral-item-left'>
                                <div className='peripheral-img-view'>
                                    <img src={MonitorSVG} id='PeripheralPhoto' alt='PeripheralPhoto' className='peripheral-img'/>
                                </div>
                                <div className='peripheral-type-view'>
                                    <p className='peripheral-type'>Monitor</p>
                                </div>
                                <div className='peripheral-info-view'>
                                    <div className='peripheral-info-view-left'>
                                        <ul>
                                            <li className='peripheral-info'>Brand: </li>
                                            <li className='peripheral-info'>Model: </li>
                                            <li className='peripheral-info'>Serial: </li>
                                        </ul>
                                    </div>
                                    <div className='peripheral-info-view-rigth'>
                                        <ul>
                                            <li className='peripheral-info'>apple</li>
                                            <li className='peripheral-info'>Pro Mouse</li>
                                            <li className='peripheral-info'>1412972</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='peripheral-item-right'>
                                <div className='peripheral-qr'>
                                    <div className='qr-title-view'>
                                        <p className='qr-title'>QR Code</p>
                                    </div>
                                    <div className='qr-item'>
                                        <QRCode value={1} size={120}/>
                                    </div>
                                </div>
                            </div>
                        </div>

      */

    function openQr(id) {
        setQrData(id);
    }

    function closeQr() {
        setQrData(-1);
    }

    return (
        <>
            {qrData !== -1 ? (
                <div className='windowQrView'>
                    <div className='whiteBox'>
                        <QRCode value={qrData} size={150}/>
                        <Button className='button-close' onClick={closeQr}>Close Qr</Button>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div className='myPheriperalsScreenView'>
                <HomePageHeader />
                <div className='pageTitle'>
                    <h1>My Peripherals Asigned</h1>
                </div>
                {isLoaded ? (

                    <div className='peripherals-assigned-view'>
                        {userData.map((data) => (             
                            <div className='peripheral-item'>
                                <div className='peripheral-img-view'>
                                    {data.device_type === 'monitor' ? (
                                        <img src={MonitorSVG} id='PeripheralPhoto' alt='PeripheralPhoto' className='peripheral-img' />
                                    ) : (<></>)}

                                    {data.device_type === 'headset' ? (
                                        <img src={HeadsetSVG} id='PeripheralPhoto' alt='PeripheralPhoto' className='peripheral-img' />
                                    ) : (<></>)}

                                    {data.device_type === 'keyboard' ? (
                                        <img src={KeyboardSVG} id='PeripheralPhoto' alt='PeripheralPhoto' className='peripheral-img' />
                                    ) : (<></>)}
                                    {data.device_type === 'mouse' ? (
                                        <img src={MouseSVG} id='PeripheralPhoto' alt='PeripheralPhoto' className='peripheral-img' />
                                    ) : (<></>)}
                                </div>
                                <div className='peripheral-type-view'>
                                    <p className='peripheral-type'>{data.device_type}</p>
                                </div>
                                <div className='peripheral-info-view'>
                                    <div className='peripheral-info-section'>
                                        <p className='peripheral-info-left'>Brand:</p>
                                        <p className='peripheral-info-right'>{data.brand}</p>
                                    </div>
                                    <div className='peripheral-info-section'>
                                        <p className='peripheral-info-left'>Model:</p>
                                        <p className='peripheral-info-right'>{data.model}</p>
                                    </div>
                                    <div className='peripheral-info-section'>
                                        <p className='peripheral-info-left'>Serial:</p>
                                        <p className='peripheral-info-right'>{data.serial_number}</p>
                                    </div>
                                    <div className='peripheral-info-section'>
                                        <p className='peripheral-info-left-special'>Return Date:</p>
                                        <p className='peripheral-info-right'>{data.RETURN_DATE.substring(0, 16)}</p>
                                    </div>
                                </div>
                                <div className='peripheral-qr-button'>
                                    <Button className='peri-button' onClick={() => openQr(`${data.DEVICE_ID}`)}>Open QR Code for Scaner Page</Button>
                                </div>
                                <div className='peripheral-qr-button'>
                                    <Button className='peri-button' onClick={() => openQr(`http://YOURPERSONALIPWHILEDOINGDEVELOPING:3000/info?id=${data.DEVICE_ID}`)}>Open QR Code for Mobile Scanner</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    

                ) : (
                    <div>

                    </div>
                )}

            </div>
        </>
    )
}




