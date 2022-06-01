import React, {useState} from 'react'
import '../assets/RequestScreen.scss'
import axios from 'axios'
import HomePageHeader from './components/HomePageHeader'
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
    Pagination,
    DataTableSkeleton
} from 'carbon-components-react';

export default function RequestScreen() {

    const [requestInfo, setRequestInfo] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [count, setCount] = useState(0)
    const [pages, setPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [current_page, setCurrentPage] = useState(1)

    // id, user_id, device_id, date, status, return_date

    const headers = [
        {
            key: 'id_peripheral',
            header: 'Peripheral ID'
        },
        {
            key: 'user_email',
            header: 'User Email',
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
              "limit": page_size,
              "page": page
            }
            console.log("params:", params)
    
          } catch(err) {
            console.log(err)
          }
        })
    }


    React.useEffect(() => {
        setTimeout(async() => {
          // setIsLoading(false);
          try {
            const responseCount = await axios.get('http://localhost:4000/countRequests')
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
    
            setIsLoaded(true)
    
          } catch(err) {
            console.log(err)
          }
        });
      }, []);



    async function acceptAll(objects){
        console.log("Requests accepted: ", objects)
    }
    async function rejectAll(objects){
        console.log("Requests rejected: ", objects)
    }

    async function accept(object){
        console.log("Request accepted")
    }
    async function reject(object){
        console.log("Request rejected")
    }

    return (
        <>
            <div className='devicesPageCont'>
                <HomePageHeader />
                <div className='pageTitle'>
                    <h1>Requests</h1>
                </div>
                {isLoaded ? (
                    <DataTable rows={requestInfo} headers={headers} >
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
                                                onClick={() => acceptAll(selectedRows)}
                                            >
                                                Accept All
                                            </TableBatchAction>
                                            <TableBatchAction
                                                tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                                                onClick={() => rejectAll(selectedRows)}
                                            >
                                                Reject All
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




