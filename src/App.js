import React, { useState } from 'react'
import SearchInput from './components/SearchInput'
import Button from './components/Button'
import QrImage from './components/QrImage'

function App() {

  const [ Qrtext, setQrText ] = useState("")
  const [ QrCode, setQrCode ] = useState("")
  const [ show, setShow] = useState(false)


  const generateQR = () => {
    if (Qrtext.trim().length > 0) {
      setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${Qrtext}`)
      setShow(true)
      }  
    }
    



  return (
    <div className="App">
      <div className="container" >
          <SearchInput QrCode={QrCode} setQrText={setQrText} />
          <Button generateQR={generateQR} />
          {show && <QrImage QrCode={QrCode} /> }
      </div>
    </div>
  );
}

export default App;
