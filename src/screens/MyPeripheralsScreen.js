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
    DataTable, 
    TableContainer, 
    TableToolbar,
    TableToolbarContent,
    TableToolbarSearch,
    TableToolbarMenu,
    TableToolbarAction,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    Pagination,
    DataTableSkeleton,
    Dropdown
} from 'carbon-components-react';

import QRCode from "react-qr-code";



export default function MyPeripheralsScreen() {

    const [isLoaded, setIsLoaded] = useState(true);
    const [qrData, setQrData] = useState(-1);

    React.useEffect(() => {
        setTimeout(async() => {
          // setIsLoading(false);
          try {
              const hola = "hola";
    
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
                        <div className='peripheral-item'>
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
                            <div className='peripheral-qr-button'>
                                <Button className='peri-button' onClick={() => openQr(1)}>Open QR Code</Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>

                    </div>
                )}

            </div>
        </>
    )
}




