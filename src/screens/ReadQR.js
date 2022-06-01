import React from "react";
import '../assets/TicketReader.scss'
import HomePageHeader from './components/HomePageHeader';
import QrReader from "react-qr-scanner";

class QRScan extends React.Component {
  state = {
    delay: 100,
    result: "No result"
  };

  handleScan = (data) => {
      window.location.href= data;
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
    <>
    <HomePageHeader />
      <div className="readContent">
          <div className='qr-reader-wrapper'>
            <QrReader 
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan} />
          </div>
        
        <p>{this.state.result}</p>
      </div>
    </>
    );
  }
}

export default QRScan;

    //   return (
//       <>
//       <HomePageHeader />
//         <div className="readContent">
//             <h1>Hello QR Code Reader</h1>
//             <QRScan />
//         </div>
//     </>
//   );