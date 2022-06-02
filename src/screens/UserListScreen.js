import React, { useState } from "react";
import "../assets/UserScreen.scss";
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
    const [userData, setUserData] = useState([]);


    async function update(page, page_size) {
        setTimeout(async () => {
            setIsLoaded(false);
            try {
                setCurrentPage(page);
                setLimit(page_size);

                var params = {
                    limit: page_size,
                    page: page,
                };
                console.log("params:", params);
                await axios.post('http://localhost:4000/users', params)
                .then(response => {
                    var array_requests = [];
                    for (var i = 0; i < response.data.data.length; i++){
                        var request = {
                            id: response.data.data[i].USER_ID,
                            email: response.data.data[i].USERNAME,
                            role: response.data.data[i].ROLE,
                            button: <Button>Edit User</Button>
                        }
                        array_requests.push(request);
                    }
                    setUserData(array_requests);
                    console.log(response)
                    setIsLoaded(true);
                })
                .catch(error => {
                    console.log("Attempt to get request of users failed")
                    console.log(error)
                })
                
            } catch (err) {
                console.log(err);
            }
        });
    }

    React.useEffect(() => {
        setTimeout(async () => {
            // setIsLoading(false);
            try {
                const responseCount = await axios.get("http://localhost:4000/countUsers")
                    .then((response) => {
                        console.log(response.data.data.count)
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
                await axios.post('http://localhost:4000/users', params)
                .then(response => {
                    var array_requests = [];
                    for (var i = 0; i < response.data.data.length; i++){
                        var request = {
                            id: response.data.data[i].USER_ID,
                            email: response.data.data[i].USERNAME,
                            role: response.data.data[i].ROLE,
                            button: <Button>Edit User</Button>
                        }
                        array_requests.push(request);
                    }
                    setUserData(array_requests);
                    console.log(response)
                    setIsLoaded(true);
                })
                .catch(error => {
                    console.log("Attempt to get request of users failed")
                    console.log(error)
                })

            } catch (err) {
                console.log(err);
            }
        });
    }, []);

    return (
        <>
        <div className="userListView">

            <div className="devicesPageCont2">
                <HomePageHeader />
                <div className="pageTitle">
                    <h1>Users</h1>
                </div>
                {isLoaded ? (
                    <DataTable rows={userData} headers={headers}>
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
        </div>
        </>
    );
}

// ROLE: 1 = user, 2 = focal, 3 = seguridad, 4 = admin

const headers = [
    {
        key: "email",
        header: "Email",
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