import React from 'react';

const Button = ({generateQR}) => {
    return (
        <button className='btn' onClick={() => generateQR()} >Generate Qr</button>
    )
}

export default Button;