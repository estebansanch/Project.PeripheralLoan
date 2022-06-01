import React, {useState} from "react";
import '../assets/TicketReader.scss'
import QrScan from 'react-qr-reader'
import HomePageHeader from './components/HomePageHeader';


export default function ReaderQR(){
  const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
            window.location=data
        }
    }
    const handleError = err => {
    console.error(err)
    }

    return (
      <>
      <HomePageHeader />
      <div className="readContent">
        <div className="contentWrapperQRScan">
          <div className="contentHeader">
            <h1>QR Scanner</h1>
            <h2 className="scanInstruct">Aim the camera at the QR Ticket provided by the soliciter</h2>
          </div>
          <div className="cameraBox" >
              <QrScan
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ height: 240, width: 320 }}
              />
          </div>

          <h1 className="QRScanResultState"
                  rowsMax={4}
                  defaultValue={qrscan}
                  value={qrscan}
              >{qrscan}</h1>
          </div>
        

      </div>
      </>
    )
}