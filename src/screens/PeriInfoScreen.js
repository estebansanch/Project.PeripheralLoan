import React, {useState} from 'react'
import '../assets/PeriInfoScreen.scss';
import MonitorSVG from '../assets/img/device.svg'
import MouseSVG from '../assets/img/mouse.svg'
import HeadsetSVG from '../assets/img/headset.svg'
import KeyboardSVG from '../assets/img/keyboard.svg'
import HomePageHeader from './components/HomePageHeader';
import QRCode from "react-qr-code";
//import deviceID from './PeripheralsScreen';
import axios from 'axios';
import { Button } from 'carbon-components-react';
import { useLocation } from "react-router-dom";



export default function InfoScreen(){
    //const [isLoaded, setIsLoaded] = useState(false);
    // const [devices, setDevice] = useState(null)

    // async function PullInfo(Device){
      
    //   setTimeout(async() => {
        
    //     try {
    //         //setCurrentPage(page)
    //         //setLimit(page_size)
    //         //setPages(Math.ceil(count / limit))
    
    //         var params = {
    //             "deviceID": device_id,
    //             "page": page
    //         }
    //         console.log("params:", params)
    //         await axios.post('http://localhost:4000/getDevice', params)
    //         .then(response => {
    //             console.log(response.data.data)
    //             console.log("length of data", response.data.data.length)
    //             let length_data = response.data.data.length;
    //             var array_peripherals = []
    //             for (var i = device_id){
    //               console.log(response.data.data[i].ID)
    //               var peripheral = {
    //                 id: response.data.data[i].ID,
    //                 deviceType: response.data.data[i].device_type,
    //                 brand: response.data.data[i].brand,
    //                 model: response.data.data[i].model,
    //                 serial: response.data.data[i].serial_number,
    //                 acceptedCond: response.data.data[i].conditions_accepted ? <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/> : <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
    //                 inCampus: response.data.data[i].in_campus ? <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/> : <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
    //                 securityAutorization: response.data.data[i].Security_Auth ? <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/> : <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
    //                 button: <Button>Add to Loan</Button>,
    //               }
    //               array_peripherals.push(peripheral);
    //             }
    //             console.log("array peripherals", array_peripherals)
    //             setDevice(array_peripherals)
    //             console.log("peripherals inside request", devices)
    //         })
    //         .catch(error => {
    //           console.log("Request attempt to get devices failed")
    //           console.log(error);
    //         })
    
    //       } catch(err) {
    //         console.log(err)
    //       }
    //     })


    // }


//Cambia la imagen según instrucción

    // if (deviceType == "monitor")
    //   imageURL = "../assets/img/monitor.jpg";
    // else if (deviceType == "headphone")
    //   imageURL = "../assets/img/headphones.jpg";
    // else
    //   imageURL = "../assets/img/keyboard.jpg";


    const location = useLocation()
    const [peripheralInfo, setPeripheralInfo] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    React.useEffect(() => {
      setTimeout(async() => {
        try {
            //setCurrentPage(page)
            //setLimit(page_size)
            //setPages(Math.ceil(count / limit))
    
            var params = {
                "deviceID": location.state.peripheralID,
            }
            await axios.post('http://localhost:4000/getDeviceInfo', params)
            .then(response => {
                var peripheral = {
                  id: response.data.data[0].ID,
                  deviceType: response.data.data[0].device_type,
                  brand: response.data.data[0].brand,
                  model: response.data.data[0].model,
                  serial: response.data.data[0].serial_number,
                  acceptedCond: response.data.data[0].conditions_accepted,
                  inCampus: response.data.data[0].in_campus,
                  securityAutorization: response.data.data[0].Security_Auth,
                  qrCode: <QRCode value="/info" state={{peripheralID: response.data.data[0].ID}} />,
               }
               setPeripheralInfo(peripheral);
               console.log(peripheralInfo)
               setIsLoaded(true)
            })
            .catch(error => {
              console.log("Request attempt to get devices failed")
              console.log(error);
            })
    
          } catch(err) {
            console.log(err)
          }
        })
    }, [])

    return(
      <>
      {isLoaded ? (
              <div className="infoPageCont">
              <HomePageHeader/>
              <div className='summarizedContent'>
      
                <div className='imageBox'>

                  {peripheralInfo.deviceType === 'monitor' ? (
                    <img src={MonitorSVG} id='PeripheralPhoto' alt='PeripheralPhoto' width="350" height="280" />
                  ) : (<></>)}

                  {peripheralInfo.deviceType === 'headset' ? (
                    <img src={HeadsetSVG} id='PeripheralPhoto' alt='PeripheralPhoto' width="350" height="280" />
                  ) : (<></>)}

                  {peripheralInfo.deviceType === 'keyboard' ? (
                    <img src={KeyboardSVG} id='PeripheralPhoto' alt='PeripheralPhoto' width="350" height="280" />
                  ) : (<></>)}

                  {peripheralInfo.deviceType === 'mouse' ? (
                    <img src={MouseSVG} id='PeripheralPhoto' alt='PeripheralPhoto' width="350" height="280" />
                  ) : (<></>)}
                </div>
                
                <div className='SummaryBox'>
                  <div className='peripheralBanner'>
                    <h1>{peripheralInfo.deviceType}</h1>
                    <h2>{peripheralInfo.brand}</h2>
                  </div>
      
                  <div className='peripheralSum'>
                    <div className='titleCol'>
                      <ul>
                        <li>Type:</li>
                        <li>Brand:</li>
                        <li>Model:</li>
                        <li>Serial #:</li>
                      </ul>
                    </div>
                    <div className='descCol'>
                      <ul>
                        <li>{peripheralInfo.deviceType}</li>
                        <li>{peripheralInfo.brand}</li>
                        <li>{peripheralInfo.model}</li>
                        <li>{peripheralInfo.serial}</li>
                      </ul>
                    </div>
                  </div>
                </div>
      
                <div className='peripheralStateBox'>
                  <div className='stateList'>
                    <div className='titleStateCol'>
                      <ul>
                        <li>Condition</li>
                        <li>Availability</li>
                        <li>Autorization</li>
                      </ul>
                    </div>
                    <div className='stateDescCol'>
                      <ul>
                        <li>{peripheralInfo.acceptedCond === 0 ? ('Accepted') : ('Not Accepted')}</li>
                        <li>{peripheralInfo.inCampus === 0 ? ('Not In Campus') : ('In Campus')}</li>
                        <li>{peripheralInfo.securityAutorization === 0 ? ('Not Autorized') : ('Autorized')}</li>
                      </ul>
                    </div>
                    {peripheralInfo.qrCode}
                  </div>
                </div>
      
              </div>
            </div>
      ) : (
        <div className="infoPageCont">
        <HomePageHeader/>
        <div className='summarizedContent'>

          <div className='imageBox' style={{width:"350px", height:"280px"}}>
            
          </div>
          
          <div className='SummaryBox'>
            <div className='peripheralBanner'>
              <h1>Type</h1>
              <h2>Model</h2>
            </div>

            <div className='peripheralSum'>
              <div className='titleCol'>
                <ul>
                  <li>Peripheral Type:</li>
                  <li>Peripheral Brand:</li>
                  <li>Peripheral Model:</li>
                  <li>Peripheral Serial Number:</li>
                </ul>
              </div>
              <div className='descCol'>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='peripheralStateBox'>
            <div className='stateList'>
              <div className='titleStateCol'>
                <ul>
                  <li>Condition</li>
                  <li>Availability</li>
                  <li>Autorization</li>
                </ul>
              </div>
              <div className='stateDescCol'>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      )}
      </>
    )
}