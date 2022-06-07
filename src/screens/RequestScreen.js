import React, {useState} from 'react'
import '../assets/RequestScreen.scss'
import axios from 'axios'
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

import { Link } from "react-router-dom";

export default function RequestScreen() {

    const [requestInfo, setRequestInfo] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [count, setCount] = useState(0)
    const [pages, setPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [current_page, setCurrentPage] = useState(1)
    const items = ['Pending', 'Accepted', 'Denied', 'Finished']
    const [currentStatus, setCurrentStatus] = useState("Pending")



    // id, user_id, device_id, date, status, return_date

    const headers = [
        {
            key: 'user_email',
            header: 'Requesting User',
        },
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
            key: 'request_date',
            header: 'Request Date',
        },
        {
            key: 'return_date',
            header: 'Return Date',
        },
        {
            key: 'status',
            header: 'Status',
        },
        {
            key: 'button',
            header: '',
        },
        {
            key: 'buttonR',
            header: '',
        }
    ];

/*

    const rows = [
        {
            id: 'a',
            user: 'Persona',
            deviceType: 'Monitor',
            brand: 'Samsung',
            model: 'S22B300B',
            serial: 'ZWDTHTQCA00028BN',
            button: <Button onClick={accept}>Accept</Button>,
            buttonR: <Button onClick={reject} kind="secondary">Reject</Button>,
        },
        {
            id: 'b',
            user: 'Persona',
            deviceType: 'Mouse',
            brand: 'Apple 2',
            model: 'S22B300B',
            serial: 'ZWDTHTQCA00028BN',
            button: <Button onClick={accept}>Accept</Button>,
            buttonR: <Button onClick={reject} kind="secondary">Reject</Button>,
        },
        {
            id: 'c',
            user: 'Persona',
            deviceType: 'Teclado',
            brand: 'Vorago',
            model: 'S22B300B',
            serial: 'ZWDTHTQCA00028BN',
            button: <Button onClick={accept}>Accept</Button>,
            buttonR: <Button onClick={reject} kind="secondary">Reject</Button>,
        },
        {
            id: 'd',
            user: 'Persona',
            deviceType: 'Teclado',
            brand: 'Vorago',
            model: 'S22B300B',
            serial: 'ZWDTHTQCA00028BN',
            button: <Button onClick={accept}>Accept</Button>,
            buttonR: <Button onClick={reject} kind="secondary">Reject</Button>,
        },
        {
            id: 'e',
            user: 'Persona',
            deviceType: 'Teclado',
            brand: 'Vorago',
            model: 'S22B300B',
            serial: 'ZWDTHTQCA00028BN',
            button: <Button onClick={accept}>Accept</Button>,
            buttonR: <Button onClick={reject} kind="secondary">Reject</Button>,
        },
        {
            id: 'f',
            user: 'Persona',
            deviceType: 'Teclado',
            brand: 'Vorago',
            model: 'S22B300B',
            serial: 'ZWDTHTQCA00028BN',
            button: <Button onClick={accept}>Accept</Button>,
            buttonR: <Button onClick={reject} kind="secondary">Reject</Button>,
        },
        {
            id: 'g',
            user: 'Persona',
            deviceType: 'Teclado',
            brand: 'Vorago',
            model: 'S22B300B',
            serial: 'ZWDTHTQCA00028BN',
            button: <Button onClick={accept}>Accept</Button>,
            buttonR: <Button onClick={reject} kind="secondary">Reject</Button>,
        },
        {
            id: 'h',
            user: 'Persona',
            deviceType: 'Monitor',
            brand: 'Samsung',
            model: 'S22B300B',
            serial: 'ZWDTHTQCA00028BN',
            button: <Button onClick={accept}>Accept</Button>,
            buttonR: <Button onClick={reject} kind="secondary">Reject</Button>,
        },
        {
            id: 'i',
            user: 'Persona',
            deviceType: 'Mouse',
            brand: 'Apple',
            model: 'S22B300B',
            serial: 'ZWDTHTQCA00028BN',
            button: <Button onClick={accept}>Accept</Button>,
            buttonR: <Button onClick={reject(id, user_id, device_id, deviceType,brand, model, serial)} kind="secondary">Reject</Button>,
        },
    ];

    */

    async function update(page, page_size) {

        setTimeout(async() => {
          setIsLoaded(false);
          try {
            
            setCurrentPage(page)
            setLimit(page_size)
            setPages(Math.ceil(count / limit))
            
            var params = {
              "STATUS": currentStatus,
              "limit": page_size,
              "page": page
            }
            console.log("params:", params)
            console.log("CURRENT STATUS UPDATE: ", currentStatus)
            if (currentStatus === "Pending") {
                await axios.post('http://localhost:4000/getRequests', params)
                .then(response => {
                    console.log(response)
                    var array_requests = [];
                    for(var i = 0; i < response.data.data.length; i++){
                        console.log("REQUEST ID: ", response.data.data[i].REQUEST_ID)
                        const id = response.data.data[i].REQUEST_ID;
                        const user_email = <Link className='buttonInfoRequestRequest' to="/myPeripherals" state={{USERNAME: response.data.data[i].USERNAME, USERID: response.data.data[i].USER_ID}}>{response.data.data[i].USERNAME}</Link>;
                        const deviceType = response.data.data[i].device_type;
                        const brand = response.data.data[i].brand;
                        const model = response.data.data[i].model;
                        const serial = response.data.data[i].serial_number;
                        const status = response.data.data[i].STATUS
                        const request_date = response.data.data[i].REQUEST_DATE.substring(0, 16);
                        const return_date = response.data.data[i].RETURN_DATE.substring(0, 16);
                        const device_id = response.data.data[i].DEVICE_ID;
                        var request = {
                            id: id,
                            user_email: user_email,
                            deviceType: deviceType,
                            brand: brand,
                            model: model,
                            serial: serial,
                            request_date: request_date,
                            return_date: return_date,
                            status: status,
                            button: <Button onClick={() => accept(id, device_id)}>Accept</Button>,
                            buttonR: <Button onClick={() => reject(id, device_id)} kind="secondary">Deny</Button>
                        }
                        array_requests.push(request);
                    }
                    setRequestInfo(array_requests)
                    setIsLoaded(true);
                })
                .catch(error => {
                    console.log("Get requests request failed")
                    console.log(error)
                })
            } else {
                await axios.post('http://localhost:4000/getRequests', params)
                .then(response => {
                    console.log(response)
                    var array_requests = [];
                    for(var i = 0; i < response.data.data.length; i++){
                        console.log("REQUEST ID: ", response.data.data[i].REQUEST_ID)
                        const id = response.data.data[i].REQUEST_ID;
                        const user_email = <Link className='buttonInfoRequest' to="/myPeripherals" state={{USERNAME: response.data.data[i].USERNAME, USERID: response.data.data[i].USER_ID}}>{response.data.data[i].USERNAME}</Link>;                        const deviceType = response.data.data[i].device_type;
                        const brand = response.data.data[i].brand;
                        const model = response.data.data[i].model;
                        const serial = response.data.data[i].serial_number;
                        const status = response.data.data[i].STATUS
                        const request_date = response.data.data[i].REQUEST_DATE.substring(0, 16);
                        const return_date = response.data.data[i].RETURN_DATE.substring(0, 16);
                        var request = {
                            id: id,
                            user_email: user_email,
                            deviceType: deviceType,
                            brand: brand,
                            model: model,
                            serial: serial,
                            request_date: request_date,
                            return_date: return_date,
                            status: status,
                            button: "",
                            buttonR: ""
                        }
                        array_requests.push(request);
                    }
                    setRequestInfo(array_requests)
                    setIsLoaded(true);

                })
                .catch(error => {
                    console.log("Get requests request failed")
                    console.log(error)
                })
            }

          } catch(err) {
            console.log(err)
          }
        })
    }

    async function updateStatus(statusSelect) {
        setTimeout(async() => {
            try { 
                setCurrentPage(1);
                setLimit(10)
                setIsLoaded(false);
                setCurrentStatus(statusSelect.selectedItem); 
                console.log("STATUS SELECT CHANGE: ", statusSelect)
                const responseCount = await axios.post('http://localhost:4000/countRequests', {"STATUS": statusSelect.selectedItem})
                .then(response => {
                    setCount(response.data.data.count)
                    return response.data.data.count
                })
                .catch(error => {
                  console.log("Request attempt to get requests count failed")
                  console.log(error);
                })

                console.log("STATUS SELECT CHANGE COUNT: ", responseCount)

                setPages(Math.ceil(responseCount / limit))

                var params = {
                    "STATUS": statusSelect.selectedItem,
                    "limit": limit,
                    "page": 1
                }
                if (statusSelect.selectedItem === "Pending") {
                    await axios.post('http://localhost:4000/getRequests', params)
                    .then(response => {
                        console.log(response)
                        var array_requests = [];
                        for(var i = 0; i < response.data.data.length; i++){
                            console.log("REQUEST ID: ", response.data.data[i].REQUEST_ID)
                            const id = `${response.data.data[i].REQUEST_ID}`;
                            const user_email = <Link className='buttonInfoRequest' to="/myPeripherals" state={{USERNAME: response.data.data[i].USERNAME, USERID: response.data.data[i].USER_ID}}>{response.data.data[i].USERNAME}</Link>;                            const deviceType = response.data.data[i].device_type;
                            const brand = response.data.data[i].brand;
                            const model = response.data.data[i].model;
                            const serial = response.data.data[i].serial_number;
                            const status = response.data.data[i].STATUS
                            const request_date = response.data.data[i].REQUEST_DATE.substring(0, 16);
                            const return_date = response.data.data[i].RETURN_DATE.substring(0, 16);
                            const device_id = response.data.data[i].DEVICE_ID;
                            var request = {
                                id: id,
                                user_email: user_email,
                                deviceType: deviceType,
                                brand: brand,
                                model: model,
                                serial: serial,
                                request_date: request_date,
                                return_date: return_date,
                                status: status,
                                button: <Button onClick={() => accept(id, device_id)}>Accept</Button>,
                                buttonR: <Button onClick={() => reject(id, device_id)} kind="secondary">Deny</Button>
                            }
                            array_requests.push(request);
                        }
                        setRequestInfo(array_requests)
                        setIsLoaded(true);
                    })
                    .catch(error => {
                        console.log("Get requests request failed")
                        console.log(error)
                    })
                } else {
                    await axios.post('http://localhost:4000/getRequests', params)
                    .then(response => {
                        console.log(response)
                        var array_requests = [];
                        for(var i = 0; i < response.data.data.length; i++){
                            console.log("REQUEST ID: ", response.data.data[i].REQUEST_ID)
                            const id = `${response.data.data[i].REQUEST_ID}`;
                            const user_email = <Link className='buttonInfoRequest' to="/myPeripherals" state={{USERNAME: response.data.data[i].USERNAME, USERID: response.data.data[i].USER_ID}}>{response.data.data[i].USERNAME}</Link>;                            const deviceType = response.data.data[i].device_type;
                            const brand = response.data.data[i].brand;
                            const model = response.data.data[i].model;
                            const serial = response.data.data[i].serial_number;
                            const status = response.data.data[i].STATUS
                            const request_date = response.data.data[i].REQUEST_DATE.substring(0, 16);
                            const return_date = response.data.data[i].RETURN_DATE.substring(0, 16);
                            var request = {
                                id: id,
                                user_email: user_email,
                                deviceType: deviceType,
                                brand: brand,
                                model: model,
                                serial: serial,
                                request_date: request_date,
                                return_date: return_date,
                                status: status,
                                button: "",
                                buttonR: ""
                            }
                            array_requests.push(request);
                        }
                        setRequestInfo(array_requests)
                        setIsLoaded(true);
                    })
                    .catch(error => {
                        console.log("Get requests request failed")
                        console.log(error)
                    })
                }
            } catch(err) {
                console.log(err)
            }
        })
    }


    React.useEffect(() => {
        setTimeout(async() => {
          // setIsLoading(false);
          try {
            const responseCount = await axios.post('http://localhost:4000/countRequests', {"STATUS": "Pending"})
            .then(response => {
                setCount(response.data.data.count)
                return response.data.data.count
            })
            .catch(error => {
              console.log("Request attempt to get requests count failed")
              console.log(error);
            })
            console.log("RESPONSE COUNT: ", responseCount)
    
            const currentLimit = 10; 
    
            setPages(Math.ceil(responseCount / currentLimit))
    
            var params = {
              "STATUS": "Pending",
              "limit": currentLimit,
              "page": 1
            }
            console.log("params:", params)

            await axios.post('http://localhost:4000/getRequests', params)
            .then(response => {
                console.log("RESPONSE GET DATA: ", response)
                var array_requests = [];
                for(var i = 0; i < response.data.data.length; i++){
                    console.log("REQUEST ID: ", response.data.data[i].REQUEST_ID)
                    const id = `${response.data.data[i].REQUEST_ID}`;
                    const user_email = <Link className='buttonInfoRequest' to="/myPeripherals" state={{USERNAME: response.data.data[i].USERNAME, USERID: response.data.data[i].USER_ID}}>{response.data.data[i].USERNAME}</Link>;                    
                    const deviceType = response.data.data[i].device_type;
                    const brand = response.data.data[i].brand;
                    const model = response.data.data[i].model;
                    const serial = response.data.data[i].serial_number;
                    const status = response.data.data[i].STATUS
                    const request_date = response.data.data[i].REQUEST_DATE.substring(0, 16);
                    const return_date = response.data.data[i].RETURN_DATE.substring(0, 16);
                    const device_id = response.data.data[i].DEVICE_ID;
                    var request = {
                        id: id,
                        user_email: user_email,
                        deviceType: deviceType,
                        brand: brand,
                        model: model,
                        serial: serial,
                        request_date: request_date,
                        return_date: return_date,
                        status: status,
                        button: <Button onClick={() => accept(id, device_id)}>Accept</Button>,
                        buttonR: <Button onClick={() => reject(id, device_id)} kind="secondary">Deny</Button>
                      }
                      array_requests.push(request);
                }
                setRequestInfo(array_requests)
                setIsLoaded(true);

            })
            .catch(error => {
                console.log("Get requests request failed")
                console.log(error)
            })
        
    
          } catch(err) {
            console.log(err)
          }
        });
      }, []);

    async function accept(id, device_id){
        setTimeout(async() => {
            try {
                console.log("Request accepted")
                console.log("Request Accept Data: ", id)
                await axios.post('http://localhost:4000/acceptRequest', {"request_id": id, "device_id": device_id})
                .then(response => {
                    console.log(response)
                    if (response.data.message.error || response.data.success === -2){
                        alert("Error: Request Couldn't be Accepted")
                    }
                    else {
                        alert('Accept Request Success') 
                        window.location.reload()
                    }
                })
                .catch(error => {
                    console.log("ACCEPT REQUEST NOT WORKING")
                    console.log(error)
                })      
            } catch(err) {
                console.log(err)
            }
        })
    }
    async function reject(id, device_id){
        setTimeout(async() => {
            try {
                console.log("Request rejected")
                console.log("Request Reject Data: ", id)
                await axios.post('http://localhost:4000/rejectRequest', {"request_id": id, "device_id": device_id})
                .then(response => {
                    console.log(response)
                    if (response.data.message.error || response.data.success === -2){
                        alert("Error: Request Couldn't be Rejected")
                    }
                    else {
                        alert('Reject Request Success') 
                        window.location.reload()
                    }
                })
                .catch(error => {
                    console.log("REJECT REQUEST NOT WORKING")
                    console.log(error)
                })
            } catch(err) {
                console.log(err)
            }
        })
    }

    return (
        <>
            <div className='devicesPageCont'>
                <HomePageHeader />
                <div className='pageTitle'>
                    <h1>Requests</h1>
                </div>
                <div className='dropdownSelectStatusView'>
                <p className='statusFilterText'>Select Status Filter: </p>
                <Dropdown
                    id="dropdownOut"
                    initialSelectedItem={items[0]}
                    items={items}
                    itemToString={(item) => (item ? item : '')}
                    className="dropdownSelectStatus"
                    onChange={(item) => updateStatus(item)}
                />
                </div>
                {isLoaded ? (
                    // <DataTable rows={requestInfo} headers={headers} >
                    //     {({
                    //         rows,
                    //         headers,
                    //         getHeaderProps,
                    //         getRowProps,
                    //         getSelectionProps,
                    //         getToolbarProps,
                    //         getBatchActionProps,
                    //         onInputChange,
                    //         selectedRows,
                    //         getTableProps,
                    //         getTableContainerProps,
                    //     }) => {
                    //         const batchActionProps = getBatchActionProps();

                    //         return (
                    //             <TableContainer
                    //                 {...getTableContainerProps()}>
                    //                 <TableToolbar {...getToolbarProps()}>
                    //                     <TableBatchActions {...batchActionProps}>
                    //                         <TableBatchAction
                    //                             tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                    //                             onClick={() => acceptAll(selectedRows)}
                    //                         >
                    //                             Accept All
                    //                         </TableBatchAction>
                    //                         <TableBatchAction
                    //                             tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                    //                             onClick={() => rejectAll(selectedRows)}
                    //                         >
                    //                             Reject All
                    //                         </TableBatchAction>
                    //                     </TableBatchActions>
                    //                     <TableToolbarContent
                    //                         aria-hidden={batchActionProps.shouldShowBatchActions}>
                    //                         <TableToolbarSearch
                    //                             tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}
                    //                             onChange={onInputChange}
                    //                         />
                    //                         <TableToolbarMenu
                    //                             tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}>
                    //                             <TableToolbarAction onClick={() => alert('Alert 1')}>
                    //                                 Action 1
                    //                             </TableToolbarAction>
                    //                             <TableToolbarAction onClick={() => alert('Alert 2')}>
                    //                                 Action 2
                    //                             </TableToolbarAction>
                    //                             <TableToolbarAction onClick={() => alert('Alert 3')}>
                    //                                 Action 3
                    //                             </TableToolbarAction>
                    //                         </TableToolbarMenu>
                    //                     </TableToolbarContent>
                    //                 </TableToolbar>
                    //                 <Table {...getTableProps()}>
                    //                     <TableHead>
                    //                         <TableRow>
                    //                             <TableSelectAll {...getSelectionProps()} />
                    //                             {headers.map((header, i) => (
                    //                                 <TableHeader key={i} {...getHeaderProps({ header })}>
                    //                                     {header.header}
                    //                                 </TableHeader>
                    //                             ))}
                    //                         </TableRow>
                    //                     </TableHead>
                    //                     <TableBody>
                    //                         {rows.map((row, i) => (
                    //                             <TableRow key={i} {...getRowProps({ row })}>
                    //                                 <TableSelectRow {...getSelectionProps({ row })} />
                    //                                 {row.cells.map((cell) => (
                    //                                     <TableCell key={cell.id}>{cell.value}</TableCell>
                    //                                 ))}
                    //                             </TableRow>
                    //                         ))}
                    //                     </TableBody>
                    //                 </Table>
                    //                 <Pagination
                    //                     backwardText="Previous page"
                    //                     forwardText="Next page"
                    //                     itemsPerPageText="Items per page:"
                    //                     page={current_page}
                    //                     //onChange={function noRefCheck(){}}
                                        
                    //                     pageSize={limit}
                    //                     pageSizes={[
                    //                     {
                    //                         text: '20',
                    //                         //value: update_limit(20)
                    //                         value: 20
                    //                     },
                    //                     {
                    //                         text: '15',
                    //                         //value: update_limit(15)
                    //                         value: 15
                    //                     },
                    //                     {
                    //                         text: '10',
                    //                         //value: update_limit(10)
                    //                         value: 10
                    //                     }
                    //                     ]}
                    //                     onChange={pages => update(pages.page, pages.pageSize)}
                    //                     size="md"
                    //                     totalItems={count}
                    //                 />
                    //             </TableContainer>
                    //         );
                    //     }}
                    // </DataTable>
                    <DataTable rows={requestInfo} headers={headers}>
                    {({
                        rows,
                        headers,
                        getHeaderProps,
                        getRowProps,
                        getTableProps,
                        onInputChange,
                        }) => (
                        <TableContainer>
                            <TableToolbar>
                            <TableToolbarContent>
                                {/* pass in `onInputChange` change here to make filtering work */}
                                <TableToolbarSearch onChange={onInputChange} />
                                <TableToolbarMenu>
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
                            </TableToolbarContent>
                            </TableToolbar>
                            <Table {...getTableProps()}>
                            <TableHead>
                                <TableRow>
                                {headers.map((header) => (
                                    <TableHeader key={header.key} {...getHeaderProps({ header })}>
                                    {header.header}
                                    </TableHeader>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                <TableRow key={row.id} {...getRowProps({ row })}>
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
                        )}
                    </DataTable>
                ) : (
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
                )}

            </div>
        </>
    )
}




