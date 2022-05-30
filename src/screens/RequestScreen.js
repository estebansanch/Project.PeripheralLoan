import React from 'react'
import '../assets/RequestScreen.scss'
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
    Pagination
} from 'carbon-components-react';

export default function RequestScreen() {

    const headers = [
        {
            key: 'user',
            header: 'User',
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
            key: 'button',
            header: '',
        },
        {
            key: 'buttonR',
            header: '',
        }
    ];

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
            buttonR: <Button onClick={reject} kind="secondary">Reject</Button>,
        },
    ];

    async function acceptAll(objects){
        console.log("Requests accepted: ", objects)
    }
    async function rejectAll(objects){
        console.log("Requests rejected: ", objects)
    }

    async function accept(){
        console.log("Request accepted")
    }
    async function reject(){
        console.log("Request rejected")
    }

    return (
        <>
            <div className='devicesPageCont'>
                <HomePageHeader />
                <div className='pageTitle'>
                    <h1>Requests</h1>
                </div>
                {true ? (
                    <DataTable rows={rows} headers={headers} >
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
                                </TableContainer>
                            );
                        }}
                    </DataTable>
                ) : (
                    <div></div>
                )}

            </div>
        </>
    )
}




