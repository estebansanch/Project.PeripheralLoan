import React, {useState} from 'react'
import '../assets/DevicesScreen.scss';
import CrossRedCircle from '../assets/img/Cross_red_circle.png'
import TickGreenCircle from '../assets/img/Tick_green_circle.png'
import HomePageHeader from './components/HomePageHeader';
import axios from 'axios';
import { Link } from "react-router-dom";
import jsCookie from 'js-cookie';
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
    TableBatchAction,
    TableBatchActions,
    TableSelectAll,
    TableSelectRow,
    Pagination,
    DataTableSkeleton,
    TextInput,
    DatePicker,
    DatePickerInput,
} from 'carbon-components-react';

import {ShoppingCart32
  } from '@carbon/icons-react';

export default function DevicesScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0)
  const [pages, setPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [current_page, setCurrentPage] = useState(1)
  const [devices, setDevices] = useState([])
  const [request, setRequest] = useState(null);
  const [currentAvailablePeripherals, setCurrentAvailablePeripherals] = useState(null);
  const [currentUnavailablePeripherals, setCurrentUnavailablePeripherals] = useState(null);
  const [currentAvailablePeripherals_SN, setCurrentAvailablePeripherals_SN] = useState("");
  const [currentUnavailablePeripherals_SN, setCurrentUnavailablePeripherals_SN] = useState("");
  const [totalPeripheralsRequest, setTotalPeripheralsRequest] = useState(0);
  const [requestEmailInput, setRequestEmailInput] = useState("");
  const [requestDateInput, setRequestDateInput] = useState("");

  function openInfo(id) {
  // var deviceID = id;
  // module.exports = deviceID;
  
}
  /*
  function update_limit(num){
    //console.log("sending num:", num)
    setLimit(num)
    //console.log("new limit", limit)
    setPages(Math.ceil(count / limit))
    return num
  };
  */

  /*
  async function getPeripheralCount(){
    await axios.get('http://rancho-back.mybluemix.net/countDevices')
    .then(response => {
        setCount(response.data.data.count)
    })
    .catch(error => {
      console.log("Request attempt to get devices count failed")
      console.log(error);
    })
  };

  */

  async function update(page, page_size) {

    setTimeout(async() => {
      setIsLoaded(false);
      try {
        setCurrentPage(page)
        setLimit(page_size)
        setPages(Math.ceil(count / limit))

        var params = {
          "limit": page_size,
          "page": page
        }
        console.log("params:", params)
        await axios.post('http://localhost:4000/getDevices', params)
        .then(response => {
            console.log(response.data.data)
            console.log("length of data", response.data.data.length)
            let length_data = response.data.data.length;
            var array_peripherals = []
            for (var i = 0; i < length_data; i++){
              var peripheral = {
                id: `${response.data.data[i].DEVICE_ID}`,
                deviceType: response.data.data[i].device_type,
                brand: response.data.data[i].brand,
                model: response.data.data[i].model,
                serial: response.data.data[i].serial_number,
                acceptedCond: response.data.data[i].conditions_accepted ? <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/> : <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
                inCampus: response.data.data[i].in_campus ? <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/> : <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
                securityAutorization: response.data.data[i].Security_Auth ? <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/> : <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
                deviceStatus: response.data.data[i].device_state,
                button: <Link className='buttonInfo' to="/info" state={{peripheralID: response.data.data[i].DEVICE_ID}}>Peripheral Info</Link>,
              }
              array_peripherals.push(peripheral);
            }
            console.log("array peripherals", array_peripherals)
            setDevices(array_peripherals)
            console.log("peripherals inside request", devices)
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
  }

  /*
  async function getPeripherals(){
    var params = {
      "limit": limit,
      "page": current_page
    }
    console.log("params:", params)
    await axios.post('http://rancho-back.mybluemix.net/getDevices', params)
    .then(response => {
        console.log(response.data.data)
        console.log("length of data", response.data.data.length)
        let length_data = response.data.data.length;
        var array_peripherals = []
        for (var i = 0; i < length_data; i++){
          console.log(response.data.data[i].ID)
          var peripheral = {
            id: response.data.data[i].ID,
            deviceType: response.data.data[i].device_type,
            brand: response.data.data[i].brand,
            model: response.data.data[i].model,
            serial: response.data.data[i].serial_number,
            acceptedCond: response.data.data[i].conditions_accepted ? <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/> : <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
            inCampus: response.data.data[i].in_campus ? <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/> : <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
            securityAutorization: response.data.data[i].Security_Auth ? <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/> : <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
            button: <Button>Log Device Output</Button>,
          }
          array_peripherals.push(peripheral);
        }
        console.log("array peripherals", array_peripherals)
        setDevices(array_peripherals)
        
        setIsLoaded(true);
        if (isLoaded){
          console.log("peripherals inside request", devices)
        }
    })
    .catch(error => {
      console.log("Request attempt to get devices failed")
      console.log(error);
    })
  };
  */

  /*
  React.useEffect(() => {
    getPeripheralCount();
    setPages(Math.ceil(count / limit))
    getPeripherals()
    console.log("peripherals", devices)
  }, [])
*/
  React.useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      try {
        const responseCount = await axios.get('http://localhost:4000/countDevices')
        .then(response => {
            setCount(response.data.data.count)
            return response.data.data.count
        })
        .catch(error => {
          console.log("Request attempt to get devices count failed")
          console.log(error);
        })

        const currentLimit = 10; 

        setPages(Math.ceil(responseCount / currentLimit))

        var params = {
          "limit": currentLimit,
          "page": 1
        }
        console.log("params:", params)
        await axios.post('http://localhost:4000/getDevices', params)
        .then(response => {
            console.log(response.data.data)
            console.log("length of data", response.data.data.length)
            let length_data = response.data.data.length;
            var array_peripherals = []
            for (var i = 0; i < length_data; i++){
              var peripheral = {
                id: `${response.data.data[i].DEVICE_ID}`,
                deviceType: response.data.data[i].device_type,
                brand: response.data.data[i].brand,
                model: response.data.data[i].model,
                serial: response.data.data[i].serial_number,
                acceptedCond: response.data.data[i].conditions_accepted ? <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/> : <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
                inCampus: response.data.data[i].in_campus ? <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/> : <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
                securityAutorization: response.data.data[i].Security_Auth ? <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/> : <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
                deviceStatus: response.data.data[i].device_state,
                button: <Link className='buttonInfo' to="/info" state={{peripheralID: response.data.data[i].DEVICE_ID}}>Peripheral Info</Link>,
              }
              array_peripherals.push(peripheral);
            }
            console.log("array peripherals", array_peripherals)
            setDevices(array_peripherals)
        })
        .catch(error => {
          console.log("Request attempt to get devices failed")
          console.log(error);
        })

        setIsLoaded(true)

      } catch(err) {
        console.log(err)
      }
    });
  }, []);

  /*
  React.useEffect(() => {
    setIsLoaded(false);
    console.log("current page:", current_page)
    console.log("limit:", limit)
    getPeripherals()
    setIsLoaded(true);
  }, [current_page, limit])

  React.useEffect(() => {
    console.log("devices", devices)
  }, [devices])

*/

/*
      <div className='pageTitle'>
        <h1>Devices</h1>
      </div>
      <div className='actionsSection'>
        <Search
            size="lg"
            id="search-1"
            value={searchDevice} 
            onChange={e => setSearchDevice(e.target.value)}
            className='searchStyle'
        />
        <Button>Hola</Button>
      </div>
*/

async function windowRequest(objects) {
  setTimeout(async() => {
    try {
      console.log("tamaño de objectos que se mando", objects.length)
      console.log("Se activo y se mando algo", objects)
      const paramsCheckAvailability = []
      for (var i = 0; i < objects.length; i++){
        let currentJson = {
          "device_id": objects[i].id 
        }
        paramsCheckAvailability.push(currentJson)
      }
      console.log("params Check Device Availability", paramsCheckAvailability)
      await axios.post('http://localhost:4000/checkDeviceAvailability', paramsCheckAvailability)
      .then(response => {
        setTimeout(async() => {
          try {
            setCurrentAvailablePeripherals(response.data.data.available)
            setCurrentUnavailablePeripherals(response.data.data.unavailable)
            console.log("send request worked")
            console.log(response)
            console.log("Peripherals not available", response.data.data.unavailable)
            var unavailablePeripherals = ""
            for (var i = 0; i < response.data.data.unavailable_SN.length; i++){
              if (i === response.data.data.unavailable_SN.length - 1 || response.data.data.unavailable_SN.length === 1){
                unavailablePeripherals = unavailablePeripherals + `${response.data.data.unavailable_SN[i]}`
              } else {
                unavailablePeripherals = unavailablePeripherals + `${response.data.data.unavailable_SN[i]}` + ', '
              }
            }
            var availablePeripherals = ""
            setTotalPeripheralsRequest(response.data.data.available_SN.length)
            for (var z = 0; z < response.data.data.available_SN.length; z++){
              if (z === response.data.data.available_SN.length - 1 || response.data.data.available_SN.length === 1){
                availablePeripherals = availablePeripherals + `${response.data.data.available_SN[z]}`
              } else {
                availablePeripherals = availablePeripherals + `${response.data.data.available_SN[z]}` + ', '
              }
            }
            setCurrentAvailablePeripherals_SN(availablePeripherals)
            setCurrentUnavailablePeripherals_SN(unavailablePeripherals)
          } catch(err) {
            console.log(err)
          }
        })

      })
      .catch(error => {
        console.log("Request attempt to get check availability failed")
        console.log(error);
      })
    } catch(err) {
      console.log(err)
    }
  })
  setRequest(objects);
}

async function addToList2(){
  setTimeout(async() => {
    try {
      console.log("ADD TO LIST 2 CURRENT EMAIL: ", requestEmailInput)
      console.log("ADD TO LIST 2 CURRENT DATE: ", requestDateInput)
      console.log("ADD TO LIST 2 CURRENT AVAILABLE: ", currentAvailablePeripherals)
      console.log("ADD TO LIST 2 CURRENT UNAVAILABLE: ", currentUnavailablePeripherals)
      console.log("ADD TO LIST 2 REQUEST: ", request)

      const params = {
        "username": requestEmailInput
      }
      
      await axios.post('http://localhost:4000/userToID', params)
      .then(response => {
        setTimeout(async() => {
          try {
            console.log(response)

            const paramsNewRequest = []
            if (currentAvailablePeripherals.length !== 0){
              for (var i = 0; i < currentAvailablePeripherals.length; i++){
                let currentJson = {
                  "user_id": response.data.data[0].USER_ID,
                  "device_id": currentAvailablePeripherals[i],
                  "return_date": requestDateInput
                }
                paramsNewRequest.push(currentJson)
              }
              await axios.post('http://localhost:4000/newRequest', paramsNewRequest)
              .then(response => {

                console.log("send request worked")
                console.log(response)
                if (response.data.message.error || response.data.success === -2){
                  alert("Error: Perihperal Couldn't Be Added")
                } else {
                  alert("Peripherals " + currentAvailablePeripherals_SN + " got requested successfully")
                  window.location.reload()
                }
              })
              .catch(error => {
                console.log("Add New Request Not Success")
                console.log(error);
              })
            } else {
              alert("Cannot send request with any available devices to request")
            }

          } catch (err) {
            console.log(err)
          }
        })
      }).catch(error => {
        console.log(error)
      })

    } catch (err) {
      console.log(err)
    }
  })

}

async function addToList(objects) {
  setTimeout(async() => {
    try {
      console.log("tamaño de objectos que se mando", objects.length)
      console.log("Se activo y se mando algo", objects)
      const paramsCheckAvailability = []
      for (var i = 0; i < objects.length; i++){
        let currentJson = {
          "device_id": objects[i].id 
        }
        paramsCheckAvailability.push(currentJson)
      }
      console.log("params Check Device Availability", paramsCheckAvailability)
      await axios.post('http://localhost:4000/checkDeviceAvailability', paramsCheckAvailability)
      .then(response => {
        setTimeout(async() => {
          try {

            console.log("send request worked")
            console.log(response)
            console.log("Peripherals not available", response.data.data.unavailable)
            var unavailablePeripherals = ""
            for (var i = 0; i < response.data.data.unavailable_SN.length; i++){
              if (i === response.data.data.unavailable_SN.length - 1 || response.data.data.unavailable_SN.length === 1){
                unavailablePeripherals = unavailablePeripherals + `${response.data.data.unavailable_SN[i]}`
              } else {
                unavailablePeripherals = unavailablePeripherals + `${response.data.data.unavailable_SN[i]}` + ', '
              }
            }
            var availablePeripherals = ""
            for (var z = 0; z < response.data.data.available_SN.length; z++){
              if (z === response.data.data.available_SN.length - 1 || response.data.data.available_SN.length === 1){
                availablePeripherals = availablePeripherals + `${response.data.data.available_SN[z]}`
              } else {
                availablePeripherals = availablePeripherals + `${response.data.data.available_SN[z]}` + ', '
              }
            }
            console.log("unavailable devices", unavailablePeripherals)
            if (unavailablePeripherals !== ""){
              alert("Peripherals " + unavailablePeripherals + " are not available")
            }
            
            const userID = jsCookie.get("id");
            const paramsNewRequest = []
            if (response.data.data.available.length !== 0){
              for (var j = 0; j < response.data.data.available.length; j++){
                let currentJson = {
                  "user_id": userID,
                  "device_id": response.data.data.available[j],
                }
                paramsNewRequest.push(currentJson)
              }
              console.log("params Send Request", paramsNewRequest)
              await axios.post('http://localhost:4000/newRequest', paramsNewRequest)
              .then(response => {
                console.log("send request worked")
                console.log(response)
                if (availablePeripherals !== ""){
                  alert("Peripherals " + availablePeripherals + " got requested")
                }
                else {
                  alert("Any device selected got requested")
                }
                window.location.reload()
              })
              .catch(error => {
                console.log("Request attempt to get check availability failed")
                console.log(error);
              })
            }

          } catch(err) {
            console.log(err)
          }
        })

      })
      .catch(error => {
        console.log("Request attempt to get check availability failed")
        console.log(error);
      })
    } catch(err) {
      console.log(err)
    }
  })

}

function cancelRequest() {
  setTimeout(async () => {
    try {
      setRequest(null);
      setTotalPeripheralsRequest(0);
      setCurrentAvailablePeripherals_SN("");
      setCurrentUnavailablePeripherals_SN("");
      setCurrentAvailablePeripherals(null);
      setCurrentUnavailablePeripherals(null);
    } catch (err) {
      console.log(err)
    }
  })
}

function changeDateFormat(dateValue){
  var newDateFormat = new Date(dateValue).toISOString();
  newDateFormat = newDateFormat.substring(0, 10);
  newDateFormat = newDateFormat + " 17:00:00";
  setRequestDateInput(newDateFormat);
}
  
const headers = [
    {
      key: 'deviceType',
      header: 'Device Type',
    },
    {
      key: 'brand',
      header: 'Brand',
    },
    {
      key: 'model',
      header: 'Model',
    },
    {
      key: 'serial',
      header: 'Serial',
    }, 
    {
        key: 'acceptedCond',
        header: 'Accepted Conditions',
    },
    {
        key: 'inCampus',
        header: 'In Campus?',
    },
    {
        key: 'securityAutorization',
        header: 'Secutiry Autorization',
    },
    {
        key: 'deviceStatus',
        header: 'Device Availability Status'
    },
    {
        key: 'button',
        header: '',
    }
  ];

  return (
    <>
    <div className='devicesPageCont'>    
      <HomePageHeader />
      <div className='pageTitle'>
        <h1>Peripherals</h1>
      </div>
      {request !== null ? (
        <div className='windowRequestView'>
          <div className='whiteBox'>
            <div className='whiteBoxUp'>
              <h1>Request Peripheral</h1>
              <p className="whiteBoxInfo">Number of peripherals available to request: {totalPeripheralsRequest}</p>
              <p className="whiteBoxInfo">Peripherals available to request: {currentAvailablePeripherals_SN === "" ? "Any" : currentAvailablePeripherals_SN}</p>
              <p className="whiteBoxInfo">Perihperals not available to request: {currentUnavailablePeripherals_SN === "" ? "Any" : currentUnavailablePeripherals_SN}</p>
              <div className='emailInputBox'>
              <TextInput labelText="User Email To Send Request" className='emailInput' value={requestEmailInput} onChange={e => setRequestEmailInput(e.target.value)}></TextInput>
              </div>
              <div className='dateInput'>
              <DatePicker datePickerType="single" onChange={(dateValue) => changeDateFormat(dateValue)}>
                <DatePickerInput
                  placeholder="mm/dd/yyyy"
                  labelText="Select Peripheral Return Date (Hour Limit: 17:00)"
                  id="date-picker-single"
                  value={requestDateInput} onChange={e => setRequestDateInput(e.target.value)}
                />
              </DatePicker>
              </div>
            </div>
            <div className='whiteBoxDown'>
              <Button kind="secondary" className="whiteBoxButton" onClick={cancelRequest}>Cancel</Button>
              <Button className='whiteBoxButton' onClick={addToList2}>Send Request</Button>
            </div>
          </div>
        </div>
      ): (<></>)}
      { isLoaded ? (
        <DataTable rows={devices} headers={headers} >
        {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getSelectionProps,
          getToolbarProps,
          getBatchActionProps,
          onInputChange,
          selectedRows,
          getTableProps,
          getTableContainerProps,
        }) => {
          const batchActionProps = getBatchActionProps();
    
          return (
            <TableContainer
              {...getTableContainerProps()}>
              <TableToolbar {...getToolbarProps()}>
                <TableBatchActions {...batchActionProps}>
                  <TableBatchAction
                    tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                    renderIcon={ShoppingCart32}
                    onClick={() => windowRequest(selectedRows)}
                    >
                    Make Request
                  </TableBatchAction>
                </TableBatchActions>
                <TableToolbarContent
                  aria-hidden={batchActionProps.shouldShowBatchActions}>
                  <TableToolbarSearch
                    tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}
                    onChange={onInputChange}
                  />
                  <TableToolbarMenu
                    tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}>
                    <TableToolbarAction onClick={() => alert('Alert 1')}>
                      Action 1
                    </TableToolbarAction>
                    <TableToolbarAction onClick={() => alert('Alert 2')}>
                      Action 2
                    </TableToolbarAction>
                    <TableToolbarAction onClick={() => alert('Alert 3')}>
                      Action 3
                    </TableToolbarAction>
                  </TableToolbarMenu>
                  <Button
                    tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}
                    
                    size="small"
                    kind="primary" onClick={() => {window.location.href='/peripheralAdd';}}>
                    Add new
                  </Button>
                </TableToolbarContent>
              </TableToolbar>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    <TableSelectAll {...getSelectionProps()} />
                    {headers.map((header, i) => (
                      <TableHeader key={i} {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow key={i} {...getRowProps({ row })}>
                      <TableSelectRow {...getSelectionProps({ row })} />
                      {row.cells.map((cell) => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}                
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Pagination
                backwardText="Previous page"
                forwardText="Next page"
                itemsPerPageText="Items per page:"
                page={current_page}
                //onChange={function noRefCheck(){}}
                
                pageSize={limit}
                pageSizes={[
                  {
                    text: '20',
                    //value: update_limit(20)
                    value: 20
                  },
                  {
                    text: '15',
                    //value: update_limit(15)
                    value: 15
                  },
                  {
                    text: '10',
                    //value: update_limit(10)
                    value: 10
                  }
                ]}
                onChange={pages => update(pages.page, pages.pageSize)}
                size="md"
                totalItems={count}
              />
            </TableContainer>
          );
        }}
      </DataTable>
      ): (
        <div style={{ width: '100%' }}>
            <DataTableSkeleton headers={headers} />
            <Pagination
                backwardText="Previous page"
                forwardText="Next page"
                itemsPerPageText="Items per page:"
                page={current_page}
                //onChange={function noRefCheck(){}}
                
                pageSize={limit}
                pageSizes={[
                  {
                    text: '20',
                    //value: update_limit(20)
                    value: 20
                  },
                  {
                    text: '15',
                    //value: update_limit(15)
                    value: 15
                  },
                  {
                    text: '10',
                    //value: update_limit(10)
                    value: 10
                  }
                ]}
                onChange={pages => update(pages.page, pages.pageSize)}
                size="md"
                totalItems={count}
              />
            <br />
        </div>
      ) }
      
  </div>
</>
  )
}



/*
const rows = [
    {
      id: 'a',
      deviceType: 'Monitor',
      brand: 'Samsung',
      model: 'S22B300B',
      serial: 'ZWDTHTQCA00028BN',
      acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
      inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
      securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
      button: <Button>Log Device Output</Button>,
    },
    {
      id: 'b',
      deviceType: 'Mouse',
      brand: 'Apple',
      model: 'S22B300B',
      serial: 'ZWDTHTQCA00028BN',
      acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
      inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
      securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
      button: <Button>Log Device Output</Button>,
    },
    {
      id: 'c',
      deviceType: 'Teclado',
      brand: 'Vorago',
      model: 'S22B300B',
      serial: 'ZWDTHTQCA00028BN',
      acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
      inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
      securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
      button: <Button>Log Device Output</Button>,
    },
    {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      {
        id: 'c',
        deviceType: 'Teclado',
        brand: 'Vorago',
        model: 'S22B300B',
        serial: 'ZWDTHTQCA00028BN',
        acceptedCond: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        inCampus: <img src={TickGreenCircle} alt="iconCircle" className='iconCircle'/>,
        securityAutorization: <img src={CrossRedCircle} alt="iconCircle" className='iconCircle'/>,
        button: <Button>Log Device Output</Button>,
      },
      
  ];


*/