import React, { useState } from "react";
import "../assets/DevicesScreen.scss";
import CrossRedCircle from "../assets/img/Cross_red_circle.png";
import TickGreenCircle from "../assets/img/Tick_green_circle.png";
import HomePageHeader from "./components/HomePageHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import jsCookie from "js-cookie";
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
} from "carbon-components-react";

export default function UserListScreen() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [count, setCount] = useState(0);
    const [pages, setPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [current_page, setCurrentPage] = useState(1);
    const [devices, setDevices] = useState([]);

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
        setTimeout(async () => {
            setIsLoaded(false);
            try {
                setCurrentPage(page);
                setLimit(page_size);
                setPages(Math.ceil(count / limit));

                var params = {
                    limit: page_size,
                    page: page,
                };
                console.log("params:", params);
                await axios
                    .post("http://localhost:4000/getDevices", params)
                    .then((response) => {
                        console.log(response.data.data);
                        console.log("length of data", response.data.data.length);
                        let length_data = response.data.data.length;
                        var array_peripherals = [];
                        for (var i = 0; i < length_data; i++) {
                            console.log(response.data.data[i].ID);
                            var peripheral = {
                                id: response.data.data[i].DEVICE_ID,
                                deviceType: response.data.data[i].device_type,
                                brand: response.data.data[i].brand,
                                model: response.data.data[i].model,
                                serial: response.data.data[i].serial_number,
                                acceptedCond: response.data.data[i].conditions_accepted ? (
                                    <img
                                        src={TickGreenCircle}
                                        alt="iconCircle"
                                        className="iconCircle"
                                    />
                                ) : (
                                    <img
                                        src={CrossRedCircle}
                                        alt="iconCircle"
                                        className="iconCircle"
                                    />
                                ),
                                inCampus: response.data.data[i].in_campus ? (
                                    <img
                                        src={TickGreenCircle}
                                        alt="iconCircle"
                                        className="iconCircle"
                                    />
                                ) : (
                                    <img
                                        src={CrossRedCircle}
                                        alt="iconCircle"
                                        className="iconCircle"
                                    />
                                ),
                                securityAutorization: response.data.data[i].Security_Auth ? (
                                    <img
                                        src={TickGreenCircle}
                                        alt="iconCircle"
                                        className="iconCircle"
                                    />
                                ) : (
                                    <img
                                        src={CrossRedCircle}
                                        alt="iconCircle"
                                        className="iconCircle"
                                    />
                                ),
                                deviceStatus: response.data.data[i].device_state,
                                button: (
                                    <Link
                                        className="buttonInfo"
                                        to="/info"
                                        state={{ peripheralID: response.data.data[i].ID }}
                                    >
                                        Peripheral Info
                                    </Link>
                                ),
                            };
                            array_peripherals.push(peripheral);
                        }
                        console.log("array peripherals", array_peripherals);
                        setDevices(array_peripherals);
                        console.log("peripherals inside request", devices);
                        setIsLoaded(true);
                    })
                    .catch((error) => {
                        console.log("Request attempt to get devices failed");
                        console.log(error);
                    });
            } catch (err) {
                console.log(err);
            }
        });
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
        setTimeout(async () => {
            // setIsLoading(false);
            try {
                const responseCount = await axios
                    .get("http://localhost:4000/countDevices")
                    .then((response) => {
                        setCount(response.data.data.count);
                        return response.data.data.count;
                    })
                    .catch((error) => {
                        console.log("Request attempt to get devices count failed");
                        console.log(error);
                    });

                const currentLimit = 10;

                setPages(Math.ceil(responseCount / currentLimit));

                var params = {
                    limit: currentLimit,
                    page: 1,
                };
                console.log("params:", params);
                await axios
                    .post("http://localhost:4000/getDevices", params)
                    .then((response) => {
                        console.log(response.data.data);
                        console.log("length of data", response.data.data.length);
                        let length_data = response.data.data.length;
                        var array_peripherals = [];
                        for (var i = 0; i < length_data; i++) {
                            console.log(response.data.data[i].ID);
                            var peripheral = {
                                id: response.data.data[i].DEVICE_ID,
                                deviceType: response.data.data[i].device_type,
                                brand: response.data.data[i].brand,
                                model: response.data.data[i].model,
                                serial: response.data.data[i].serial_number,
                                acceptedCond: response.data.data[i].conditions_accepted ? (
                                    <img
                                        src={TickGreenCircle}
                                        alt="iconCircle"
                                        className="iconCircle"
                                    />
                                ) : (
                                    <img
                                        src={CrossRedCircle}
                                        alt="iconCircle"
                                        className="iconCircle"
                                    />
                                ),
                                inCampus: response.data.data[i].in_campus ? (
                                    <img
                                        src={TickGreenCircle}
                                        alt="iconCircle"
                                        className="iconCircle"
                                    />
                                ) : (
                                    <img
                                        src={CrossRedCircle}
                                        alt="iconCircle"
                                        className="iconCircle"
                                    />
                                ),
                                securityAutorization: response.data.data[i].Security_Auth ? (
                                    <img
                                        src={TickGreenCircle}
                                        alt="iconCircle"
                                        className="iconCircle"
                                    />
                                ) : (
                                    <img
                                        src={CrossRedCircle}
                                        alt="iconCircle"
                                        className="iconCircle"
                                    />
                                ),
                                deviceStatus: response.data.data[i].device_state,
                                button: (
                                    <Link
                                        className="buttonInfo"
                                        to="/info"
                                        state={{ peripheralID: response.data.data[i].ID }}
                                    >
                                        Peripheral Info
                                    </Link>
                                ),
                            };
                            array_peripherals.push(peripheral);
                        }
                        console.log("array peripherals", array_peripherals);
                        setDevices(array_peripherals);
                    })
                    .catch((error) => {
                        console.log("Request attempt to get devices failed");
                        console.log(error);
                    });

                setIsLoaded(true);
            } catch (err) {
                console.log(err);
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


    return (
        <>
            <div className="devicesPageCont">
                <HomePageHeader />
                <div className="pageTitle">
                    <h1>Users</h1>
                </div>
                {isLoaded ? (
                    <DataTable rows={rows} headers={headers}>
                        {({
                            rows,
                            headers,
                            getHeaderProps,
                            getRowProps,
                            getToolbarProps,
                            getBatchActionProps,
                            onInputChange,
                            getTableProps,
                            getTableContainerProps,
                        }) => {
                            const batchActionProps = getBatchActionProps();

                            return (
                                <TableContainer {...getTableContainerProps()}>
                                    <TableToolbar {...getToolbarProps()}>
                                        <TableToolbarContent
                                            aria-hidden={batchActionProps.shouldShowBatchActions}
                                        >
                                            <TableToolbarSearch
                                                tabIndex={
                                                    batchActionProps.shouldShowBatchActions ? -1 : 0
                                                }
                                                onChange={onInputChange}
                                            />
                                            <TableToolbarMenu
                                                tabIndex={
                                                    batchActionProps.shouldShowBatchActions ? -1 : 0
                                                }
                                            >
                                                <TableToolbarAction onClick={() => alert("Alert 1")}>
                                                    Action 1
                                                </TableToolbarAction>
                                                <TableToolbarAction onClick={() => alert("Alert 2")}>
                                                    Action 2
                                                </TableToolbarAction>
                                                <TableToolbarAction onClick={() => alert("Alert 3")}>
                                                    Action 3
                                                </TableToolbarAction>
                                            </TableToolbarMenu>
                                            <Button
                                                tabIndex={
                                                    batchActionProps.shouldShowBatchActions ? -1 : 0
                                                }
                                                size="small"
                                                kind="primary"
                                                onClick={() => {
                                                    window.location.href = "/userCreate";
                                                }}
                                            >
                                                Create user
                                            </Button>
                                        </TableToolbarContent>
                                    </TableToolbar>
                                    <Table {...getTableProps()}>
                                        <TableHead>
                                            <TableRow>
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
                                                text: "20",
                                                //value: update_limit(20)
                                                value: 20,
                                            },
                                            {
                                                text: "15",
                                                //value: update_limit(15)
                                                value: 15,
                                            },
                                            {
                                                text: "10",
                                                //value: update_limit(10)
                                                value: 10,
                                            },
                                        ]}
                                        onChange={(pages) => update(pages.page, pages.pageSize)}
                                        size="md"
                                        totalItems={count}
                                    />
                                </TableContainer>
                            );
                        }}
                    </DataTable>
                ) : (
                    <div style={{ width: "100%" }}>
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
                                    text: "20",
                                    //value: update_limit(20)
                                    value: 20,
                                },
                                {
                                    text: "15",
                                    //value: update_limit(15)
                                    value: 15,
                                },
                                {
                                    text: "10",
                                    //value: update_limit(10)
                                    value: 10,
                                },
                            ]}
                            onChange={(pages) => update(pages.page, pages.pageSize)}
                            size="md"
                            totalItems={count}
                        />
                        <br />
                    </div>
                )}
            </div>
        </>
    );
}

// ROLE: 1 = user, 2 = focal, 3 = seguridad, 4 = admin

const headers = [
    {
        key: "userName",
        header: "Username",
    },
    {
        key: "email",
        header: "Email",
    },
    {
        key: "userSerial",
        header: "Serial",
    },
    {
        key: 'role',
        header: 'Role'
    },
    {
        key: "button",
        header: "",
    },
];

const rows = [
    {
        id: 'a',
        userName: 'Admin IBM',
        email: 'admin@ibm.com',
        userSerial: 'ZWDTHTQCA00028BN',
        role: '4',
        button: <Button>Edit</Button>,
    },
    {
        id: 'b',
        userName: 'Security IBM',
        email: 'security@ibm.com',
        userSerial: 'ZWDTHTQCA00028BN',
        role: '3',
        button: <Button>Edit</Button>,
    },
    {
        id: 'c',
        userName: 'User IBM',
        email: 'user@ibm.com',
        userSerial: 'ZWDTHTQCA00028BN',
        role: '1',
        button: <Button>Edit</Button>,
    },
];