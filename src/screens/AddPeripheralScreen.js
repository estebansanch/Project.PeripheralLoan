import React from 'react'
import '../assets/AddDeviceScreen.scss';
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
    TableSelectRow
} from 'carbon-components-react';

import {
    TrashCan32, Save32, Download32
} from '@carbon/icons-react';

export default function AddDeviceScreen() {
    return(
        <>
        <div className='addDeviceCont'> 
        <HomePageHeader />
            <div className='pageTitle'>
                <h1>Add Peripheral</h1>
            </div>
            <form>
                <div>
                    <label>
                        Device Type:
                            <select>
                                <option selected value="placeholder">Select Device</option>
                                <option value="monitor">Monitor</option>
                                <option value="mouse">Mouse</option>
                                <option value="keyboard">Keyboard</option>
                                <option value="headset">Headset</option>
                            </select>
                    </label>
                </div>
                <div>
                    <label>
                        Brand:
                            <select>
                                <option selected value="placeholder">Select Brand</option>
                                <option value="samsung">Samsung</option>
                                <option value="apple">Apple</option>
                                <option value="vorago">Vorago</option>
                            </select>
                    </label>
                </div>
                <div>
                    <label>
                        Model:
                            <input type="text" id="model" />
                    </label>
                </div>
                <div>
                    <label>
                        Serial Number:
                            <input type="text" id="serial_number" />
                    </label>
                </div>
                <input type="submit" value="Add Peripheral"/>
            </form>
        </div>
        </>
    )
}