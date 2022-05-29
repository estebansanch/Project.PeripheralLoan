import React from 'react'
import QRCode from "react-qr-code";
import HomePageHeader from './components/HomePageHeader';
import{ Button } from 'carbon-components-react/';
import '../assets/ItemTicket.scss';

export default function itemTicket(){
    return(
        <>
        <div className="TicketPageCont">
        <HomePageHeader/>
        <div className='summedTicket'>
                <div className='codeQR'>
                    <QRCode  value="Testing QR Code, Hello Stan Up Meeting!!" />
                </div>
                <div className='ticketBanner'>
                    <h1>Item Title</h1>
                    <h2>Item Brand</h2>
                </div>

                <div className='ticketSum'>
                <div className='ticketTitleCol'>
                    <ul>
                    <li>Device Type</li>
                    <li>Brand</li>
                    <li>Model</li>
                    <li>Serial Number</li>
                    <li>Condition</li>
                    <li>Availability</li>
                    <li>Authorization</li>
                    </ul>
                </div>
                <div className='ticketDescCol'>
                    <ul>
                        <li>Monitor</li>
                        <li>SamsLGPhillips</li>
                        <li>72050AVHDDP</li>
                        <li>1209524707</li>
                        <li>Acceptable</li>
                        <li>On Campus</li>
                        <li>Fully Approved</li>
                    </ul>
                </div>
            </div>
            <Button className='downloadTicket'>Download Ticket</Button>
          </div>

            

        </div>
        </>
    )

}