import React from "react";

const SearchInput = ({ Qrtext, setQrText }) => {
    return (
        <input type="text" className="input-search" name='text' value={Qrtext} placeholder="Search" onChange={(e) => setQrText(e.target.value)} />
    )
}


export default SearchInput;