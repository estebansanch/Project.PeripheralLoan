import React, {useState} from "react";
import '../assets/TicketReader.scss'
import QrScan from 'react-qr-reader'
import HomePageHeader from './components/HomePageHeader';


export default function ReaderQR(){
  const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
            window.location.href="/info"
        }
    }
    const handleError = err => {
    console.error(err)
    }

    return (
      <>
      {/* <HomePageHeader /> */}
      <div className=".readContent">
        <center>
          <div style={{marginTop:30}}>
              <QrScan
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ height: 240, width: 320 }}
              />
          </div>
        </center>

        <h1
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}
            >{qrscan}</h1>

      </div>
      </>
    )
}