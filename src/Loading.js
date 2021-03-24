/* Annova Software

File:App.js

Contents: switch route yapısı ile sayfalar arası geçiş yapıldı diğer dosyaar ile bağlanntılar gerçekleştirildi

History: 23.03.2021 FatihK
*/
import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './css/loading.css';
export default function Loading() {
    return (
        <div className="Loading" >
            
        <Loader 
        type="Grid"
        color="	#000000"
        height={200}
        width={200}
        timeout={2000} //3 secs
         />
         </div>
        
      
    )
}
