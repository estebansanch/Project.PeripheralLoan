import React, {useState} from 'react'
import '../assets/MainPageScreen.scss';
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Dropdown } from 'carbon-components-react';
import HomePageHeader from './components/HomePageHeader';

export default function MainPageScreen() {

  Chart.register(ArcElement);

  const [outNum, setOutNum] = useState(2099);
  const [inNum, setInNum] = useState(438);
  const totalNum = outNum + inNum;
  const percentageOut = ((outNum*100) / totalNum).toFixed(2);
  const percentageIn = ((inNum*100) / totalNum).toFixed(2);
  const items = ['1 day', '1 week', '1 month', '3 months', '6 months', '1 year']

  return (
    <>
    <HomePageHeader />
  
    <div className='mainPageCont'>
      
      <div className='pageTitle'>
        <h1>Panel</h1>
      </div>
      <div className='panelContainers'>
        <div className='panelContainer'>
          <div className='left'>
            <h2 className='panelTitle'>Device distribution</h2>
            <h2 className='panelTitleNumber'>({totalNum} total)</h2>
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
            <h2 className='panelTitleNumber2'>1</h2>
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
            <h2 className='panelTitleNumber2'>0</h2>
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
    </div>
    
    </>
  )
}
