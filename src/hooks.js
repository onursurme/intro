import React from 'react'

export default function hooks({propss}) {

    const basla=()=>{
        console.log(propss);
    }
    return (
        <div>
            <button onClick={basla}>Tıkla</button>
        </div>
    )
}
