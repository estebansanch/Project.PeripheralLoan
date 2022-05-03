import React from 'react'
import '../assets/DevicesScreen.scss';
import CrossRedCircle from '../assets/img/Cross_red_circle.png'
import TickGreenCircle from '../assets/img/Tick_green_circle.png'
import HomePageHeader from './components/HomePageHeader';
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

import {
    TrashCan32, Save32, Download32
  } from '@carbon/icons-react';

export default function DevicesScreen() {

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
        key: 'button',
        header: '',
    }
  ];

  return (
    <>
    <div className='devicesPageCont'>    
      <HomePageHeader />
      <div className='pageTitle'>
        <h1>Devices</h1>
      </div>
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
                renderIcon={TrashCan32}
                >
                Delete
              </TableBatchAction>
              <TableBatchAction
                tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                renderIcon={Save32}
              >
                Save
              </TableBatchAction>
              <TableBatchAction
                tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                renderIcon={Download32}
                >
                Download
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
            onChange={function noRefCheck(){}}
            page={1}
            pageSize={10}
            pageSizes={[
              {
                text: 'Ten',
                value: 10
              },
              {
                text: 'Twenty',
                value: 20
              },
              {
                text: 'Thirty',
                value: 30
              },
              {
                text: 'Forty',
                value: 40
              },
              {
                text: 'Fifty',
                value: 50
              }
            ]}
            size="md"
            totalItems={103}
          />
        </TableContainer>
      );
    }}
  </DataTable>
  </div>
</>
  )
}
