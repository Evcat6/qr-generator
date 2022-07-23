import React from 'react';

const QrImage = ({QrCode}) => {
    return (
        <div className="qr-code-panel">
          <img src={QrCode} alt='qr-code'/>
        </div>
    )
}

export default QrImage;