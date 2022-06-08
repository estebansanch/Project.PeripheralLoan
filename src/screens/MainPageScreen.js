import React, {useState, useEffect} from 'react'
import '../assets/MainPageScreen.scss';
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Dropdown } from 'carbon-components-react';
import HomePageHeader from './components/HomePageHeader';
import axios from 'axios';

export default function MainPageScreen() {

  Chart.register(ArcElement);
  const [isLoaded, setIsLoaded] = useState(false);
  const [outNum, setOutNum] = useState(0);
  const [inNum, setInNum] = useState(0);
  const [totalPeripherals, setTotalPeripherals] = useState(0);
  const percentageOut = ((outNum*100) / totalPeripherals).toFixed(2);
  const percentageIn = ((inNum*100) / totalPeripherals).toFixed(2);
  const items = ['1 day', '1 week', '1 month', '3 months', '6 months', '1 year']
  const [devicesInDate, setDevicesInDate] = useState(0);
  const [devicesOutDate, setDevicesOutDate] = useState(0);

  React.useEffect(() => {
    setTimeout(async() => {
      try {
        await axios.get('https://rancho-back.mybluemix.net/countDevicesPanel')
        .then(response => {
          console.log(response)
          setInNum(response.data.data.DEVICESIN)
          setOutNum(response.data.data.DEVICESOUT)
          setTotalPeripherals(response.data.data.DEVICESNO)
        })
        .catch(error => {
          console.log(error)
        })
        var param = {
          "days": 1
        }
        await axios.post('https://rancho-back.mybluemix.net/countPanelOut', param)
        .then(response => {
          console.log(response)
          setDevicesOutDate(response.data.data["1"])
        })
        .catch(error => {
          console.log(error)
        })
        await axios.post('https://rancho-back.mybluemix.net/countPanelIn', param)
        .then(response => {
          console.log(response)
          setDevicesInDate(response.data.data["1"])
        })
        .catch(error => {
          console.log(error)
        })
        setIsLoaded(true);
      }
      catch(error) {
        console.log(error)
      }
    })
  }, [])

  async function changeDevicesOut (dataSent) {
    setTimeout(async() => {
      try {
        console.log("DATA SENT: ", dataSent)
        var numParam = -1;
        if (dataSent.selectedItem === '1 day') {
          numParam = 1;
        }
        if (dataSent.selectedItem === '1 week') {
          numParam = 7;
        }
        if (dataSent.selectedItem === '1 month') {
          numParam = 30;
        }
        if (dataSent.selectedItem === '3 months') {
          numParam = 90;
        }
        if (dataSent.selectedItem === '6 months') {
          numParam = 180;
        }
        if (dataSent.selectedItem === '1 year') {
          numParam = 365;
        }
        console.log(numParam)
        var param = {
          "days": numParam
        }
        await axios.post('https://rancho-back.mybluemix.net/countPanelOut', param)
        .then(response => {
          console.log(response)
          setDevicesOutDate(response.data.data["1"])
        })
        .catch(error => {
          console.log(error)
        })
      }
      catch(error) {
        console.log(error)
      }
    })
  }

  async function changeDevicesIn (dataSent) {
    setTimeout(async() => {
      try {
        console.log("DATA SENT: ", dataSent)
        var numParam = -1;
        if (dataSent.selectedItem === '1 day') {
          numParam = 1;
        }
        if (dataSent.selectedItem === '1 week') {
          numParam = 7;
        }
        if (dataSent.selectedItem === '1 month') {
          numParam = 30;
        }
        if (dataSent.selectedItem === '3 months') {
          numParam = 90;
        }
        if (dataSent.selectedItem === '6 months') {
          numParam = 180;
        }
        if (dataSent.selectedItem === '1 year') {
          numParam = 365;
        }
        console.log(numParam)
        var param = {
          "days": numParam
        }
        await axios.post('https://rancho-back.mybluemix.net/countPanelIn', param)
        .then(response => {
          console.log(response)
          setDevicesInDate(response.data.data["1"])
        })
        .catch(error => {
          console.log(error)
        })
      }
      catch(error) {
        console.log(error)
      }
    })
  }

  return (
    <>
    <HomePageHeader />
  
    <div className='mainPageCont'>
      
      <div className='pageTitle'>
        <h1>Panel</h1>
      </div>
      {isLoaded ? (
        <div className='panelContainers'>
          <div className='panelContainer'>
            <div className='left'>
              <h2 className='panelTitle'>Device distribution</h2>
              <h2 className='panelTitleNumber'>({totalPeripherals} total)</h2>
              <div>
                <div className='infoNumbers'>
                  <div className='redSquare'></div>
                  <p className='infoNumber'>Out ({outNum} - {percentageOut}%)</p>
                </div>
                <div className='infoNumbers'>
                  <div className='greenSquare'></div>
                  <p className='infoNumber'>In ({inNum} - {percentageIn}%)</p>
                </div>
              </div>
            </div>
            <div className='right'>
                <Doughnut 
                  data={{
                    datasets: [
                      {
                        data: [outNum, inNum],
                        backgroundColor: [
                          'rgba(255, 0, 0, 0.5)',
                          'rgba(0, 255, 0, 0.5)'
                        ],
                      }
                    ]
                  }}
                  
                  options={{
                    maintainAspectRatio: false,
                    responsive: true
                  }}
                />
            </div>
          </div>
          <div className='panelContainer'>
            <div className='left'>
              <h2 className='panelTitle'>Devices Out</h2>
              <h2 className='panelTitleNumber2'>{devicesOutDate}</h2>
            </div>
            <div className='right2'>
              <Dropdown
                id="dropdownOut"
                initialSelectedItem={items[0]}
                items={items}
                itemToString={(item) => (item ? item : '')}
                className="dropdownStyle"
                onChange={(item) => changeDevicesOut(item)}
              />
            </div>
          </div>
          <div className='panelContainer'>
          <div className='left'>
              <h2 className='panelTitle'>Devices In</h2>
              <h2 className='panelTitleNumber2'>{devicesInDate}</h2>
            </div>
            <div className='right2'>
              <Dropdown
                id="dropdownOut"
                initialSelectedItem={items[0]}
                items={items}
                itemToString={(item) => (item ? item : '')}
                className="dropdownStyle"
                onChange={(item) => changeDevicesIn(item)}
              />
            </div>
          </div>
        </div>

) : (
        <div className='panelContainers'>
        <div className='panelContainer'>
          <div className='left'>
            <h2 className='panelTitle'>Device distribution</h2>
            <h2 className='panelTitleNumber'>(total)</h2>
            <div>
              <div className='infoNumbers'>
                <div className='redSquare'></div>
                <p className='infoNumber'>Out (%)</p>
              </div>
              <div className='infoNumbers'>
                <div className='greenSquare'></div>
                <p className='infoNumber'>In (%)</p>
              </div>
            </div>
          </div>
          <div className='right'>
              <Doughnut 
                data={{
                  datasets: [
                    {
                      data: [outNum, inNum],
                      backgroundColor: [
                        'rgba(255, 0, 0, 0.5)',
                        'rgba(0, 255, 0, 0.5)'
                      ],
                    }
                  ]
                }}
                
                options={{
                  maintainAspectRatio: false,
                  responsive: true
                }}
              />
          </div>
        </div>
        <div className='panelContainer'>
          <div className='left'>
            <h2 className='panelTitle'>Devices Out</h2>
            <h2 className='panelTitleNumber2'></h2>
          </div>
          <div className='right2'>
            <Dropdown
              id="dropdownOut"
              initialSelectedItem={items[0]}
              items={items}
              itemToString={(item) => (item ? item : '')}
              className="dropdownStyle"
            />
          </div>
        </div>
        <div className='panelContainer'>
        <div className='left'>
            <h2 className='panelTitle'>Devices In</h2>
            <h2 className='panelTitleNumber2'></h2>
          </div>
          <div className='right2'>
            <Dropdown
              id="dropdownOut"
              initialSelectedItem={items[0]}
              items={items}
              itemToString={(item) => (item ? item : '')}
              className="dropdownStyle"
            />
          </div>
        </div>
      </div>
  )}
    
  </div>
    </>
  )
}
