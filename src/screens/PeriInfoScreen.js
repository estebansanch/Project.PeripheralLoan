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
import jsCookie from 'js-cookie';



export default function InfoScreen(){
    const location = useLocation()   
    const [peripheralInfo, setPeripheralInfo] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const role = jsCookie.get("role");

    React.useEffect(() => {
      setTimeout(async() => {
        try {
            //setCurrentPage(page)
            //setLimit(page_size)
            //setPages(Math.ceil(count / limit))
            const search = location.search; // returns the URL query String
            const params2 = new URLSearchParams(search); 
            const IdFromURL = params2.get('id');
            console.log("Loc Pathname:",location.pathname) 
            console.log("Location: ", location)
            if (location.state === null){
              var params = {
                "deviceID": IdFromURL
              }
            }
            else {
              var params = {
                "deviceID": location.state.peripheralID,
              }
            }
            console.log("Param sent: ", params)
            await axios.post('https://rancho-back.mybluemix.net/getDeviceInfo', params)
            .then(response => {
              var route = `${response.data.data[0].DEVICE_ID}`  
              var peripheral = {
                  id: response.data.data[0].DEVICE_ID,
                  deviceType: response.data.data[0].device_type,
                  brand: response.data.data[0].brand,
                  model: response.data.data[0].model,
                  serial: response.data.data[0].serial_number,
                  acceptedCond: response.data.data[0].conditions_accepted,
                  inCampus: response.data.data[0].in_campus,
                  securityAutorization: response.data.data[0].Security_Auth,
                  qrCode: <QRCode value={route} />,
               }
               setPeripheralInfo(peripheral);
               console.log(peripheral)
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

    async function registerExit() {
      setTimeout(async () => {
        try {
          const search = location.search; // returns the URL query String
          const params2 = new URLSearchParams(search); 
          const IdFromURL = params2.get('id');
          if (location.state === null){
            var params = {
              "device_id": IdFromURL
            }
          }
          else {
            var params = {
              "device_id": location.state.peripheralID,
            }
          }
          await axios.post('https://rancho-back.mybluemix.net/registerExit', params)
          .then(response => {
            console.log("RESPONSE REGISTER EXIT", response)
            if (response.data.message.error || response.data.success === -2) {
              alert("Register Exit Not Successful")
            }
            else {
              alert("Register Exit Successful")
              window.location.reload()
            }
          })
          .catch(error => {
            console.log(error)
          })
        } catch(error) {
          console.log(error)
        }
      })
    }

    async function registerReturn() {
      setTimeout(async () => {
        try {
          const search = location.search; // returns the URL query String
          const params2 = new URLSearchParams(search); 
          const IdFromURL = params2.get('id');
          if (location.state === null){
            var params = {
              "device_id": IdFromURL
            }
          }
          else {
            var params = {
              "device_id": location.state.peripheralID,
            }
          }
          await axios.post('https://rancho-back.mybluemix.net/registerReturn', params)
          .then(response => {
            console.log("RESPONSE REGISTER RETURN", response)
            if (response.data.message.error || response.data.success === -2) {
              alert("Register Return Not Successful")
            }
            else {
              alert("Register Return Successful")
              window.location.reload()
            }
          })
          .catch(error => {
            console.log(error)
          })
        } catch(error) {
          console.log(error)
        }
      })
    }

    async function removeFromInventory() {
      setTimeout(async () => {
        try {
          const search = location.search; // returns the URL query String
          const params2 = new URLSearchParams(search); 
          const IdFromURL = params2.get('id');
          if (location.state === null){
            var params = {
              "device_id": IdFromURL
            }
          }
          else {
            var params = {
              "device_id": location.state.peripheralID,
            }
          }
          await axios.post('https://rancho-back.mybluemix.net/registerExit', params)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
        } catch(error) {
          console.log(error)
        }
      })
    }

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
                        <li>Authorization</li>
                      </ul>
                    </div>
                    <div className='stateDescCol'>
                      <ul>
                        <li>{peripheralInfo.acceptedCond ? ('Accepted') : ('Not Accepted')}</li>
                        <li>{peripheralInfo.inCampus ? ('In Campus') : ('Not In Campus')}</li>
                        <li>{peripheralInfo.securityAutorization ? ('Authorized') : ('Not Authorized')}</li>
                      </ul>
                    </div>
                  </div>
                  <div className='infoButtonBox'>
                     {(role === '3' || role === '4') ? (
                       <>

                      {peripheralInfo.acceptedCond? (
                        <>
                          {!peripheralInfo.inCampus ? (
                          <Button className='inNoutButton' onClick={registerReturn}>Register Return</Button>
                        ) : (
                          <Button className='inNoutButton' onClick={registerExit}>Register Exit</Button>
                        )}
                        </>
                      ) : (
                        <></>
                      )}
                      </>
                     ) : (
                       <></>
                     )}
                     {role === '4' ? (
                       <Button className='delistPeriButton' onClick={removeFromInventory}>Remove from Inventory</Button>
                     ) : (
                       <></>
                     )}
                  </div>
                  <div className="infoQRCode">
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
                  <li>Type:</li>
                  <li>Brand:</li>
                  <li>Model:</li>
                  <li>Serial #:</li>
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
                  <li>Authorization</li>
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