/* Annova Software

File:hooks.js

Contents: ilk hooks yapısı denendi

History: 17.03.2021 FatihK
*/
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
