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
    let imageURL = "../assets/img/monitor.png";

    // if (deviceType == "monitor")
    //   imageURL = "../assets/img/monitor.jpg";
    // else if (deviceType == "headphone")
    //   imageURL = "../assets/img/headphones.jpg";
    // else
    //   imageURL = "../assets/img/keyboard.jpg";


    return(
      <>
      <div className="infoPageCont">
        <HomePageHeader/>
        <div className='summarizedContent'>

          <div className='imageBox'>
            <img src="https://www.pngkey.com/png/detail/492-4926560_monitor-monitr-fotoraf-png.png" 
            id='PeripheralPhoto' alt='PeripheralPhoto' width="350" height="280" />
          </div>
          
          <div className='SummaryBox'>
            <div className='peripheralBanner'>
              <h1>Item Title</h1>
              <h2>Marca del Item</h2>
            </div>

            <div className='peripheralSum'>
              <div className='titleCol'>
                <ul>
                  <li>Tipo de Dispositivo</li>
                  <li>Marca</li>
                  <li>Modelo</li>
                  <li>Número de Serial</li>
                </ul>
              </div>
              <div className='descCol'>
                <ul>
                  <li>Monitor</li>
                  <li>SamsLGPhillips</li>
                  <li>72050AVHDDP</li>
                  <li>1209524707</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='peripheralStateBox'>
            <div className='stateList'>
              <div className='titleStateCol'>
                <ul>
                  <li>Condición</li>
                  <li>Disponibilidad</li>
                  <li>Autorización</li>
                </ul>
              </div>
              <div className='stateDescCol'>
                <ul>
                  <li>Aceptable</li>
                  <li>En Campus</li>
                  <li>Autorizado</li>
                </ul>
              </div>
            </div>
            <Button className='Request'>Request a Loan</Button>
          </div>

        </div>
      </div>
      </>
    )
}