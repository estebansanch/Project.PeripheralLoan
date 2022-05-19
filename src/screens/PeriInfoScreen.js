import React, {useState} from 'react'
import '../assets/PeriInfoScreen.scss';
import CrossRedCircle from '../assets/img/Cross_red_circle.png'
import TickGreenCircle from '../assets/img/Tick_green_circle.png'
import HomePageHeader from './components/HomePageHeader';
import axios from 'axios';
import { 
    Button,
    Content, 
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
    TableBatchAction,
    TableBatchActions,
    TableSelectAll,
    TableSelectRow,
    Pagination } from 'carbon-components-react';

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
    //             "device id": device_id,
    //             "page": page
    //         }
    //         console.log("params:", params)
    //         await axios.post('http://localhost:4000/getDevice', params)
    //         .then(response => {
    //             console.log(response.data.data)
    //             console.log("length of data", response.data.data.length)
    //             let length_data = response.data.data.length;
    //             var array_peripherals = []
    //             for (var i = device_id; i < length_data; i++){
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
    let imageURL = "..assets/img/test.png";

    // if (deviceType == "monitor")
    //   imageURL = "..assets/img/monitor.jpg";
    // else if (deviceType == "headphone")
    //   imageURL = "..assets/img/headphones.jpg";
    // else
    //   imageURL = "..assets/img/keyboard.jpg";


    return(
      <>
      <div className="infoPageCont">
        <HomePageHeader/>
        <div className='summarizedContent'>

          <div className='imageBox'>
            <img className='PeripheralPhoto' src={imageURL}/>
          </div>
          
          <div className='SummaryBox'>
            <div className='peripheralBanner'>
              <h1>Item Title</h1>
              <h2>Marca del Item</h2>
            </div>

            <div className='peripheralSum'>
              <ul>
                <li><h5>Tipo de Periférico</h5> lo </li>
                <li><h5></h5></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}