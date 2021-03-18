/* Annova Software

File:CartList.js

Contents:sepet elemanları listelendi

History: 17.03.2021 FatihK
*/
import React, { useEffect,useState } from 'react';
import {Table} from 'reactstrap'
function CartList ({cart,removeFromCart}){


   function renderCart(){
        var sayi=0;
        return(
            <div>
                 <h3>Sepetteki Ürünler</h3>
                <Table hpver dark>
                <thead>
                        <tr>
                            <th>#</th>
                            <th>Ürün İsmi</th>
                            <th>Bir Porsiyondaki Miktar</th>
                            <th>Birim Fiyat</th>
                            <th>Ürün Stok</th>
                            <th>Sepet Miktarı</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(cartItem=>(
                                <tr key={cartItem.product.id}>
                                    <th>{sayi.innerHTML, sayi++}</th>
                                    <td>{cartItem.product.productName}</td>
                                    <td>{cartItem.product.quantityPerUnit}</td>
                                    <td>{cartItem.product.unitPrice}</td>
                                    <td>{cartItem.product.unitsInStock}</td>
                                    <td>{cartItem.quantity}</td>
                                    <td><button onClick={()=>removeFromCart(cartItem.product)} className="btn btn-sm btn-danger"><i className="far fa-trash-alt"></i></button></td>
                                </tr>
                            ))

                        }
                    </tbody>
                </Table>
            </div>
        )
    }
    
        
        return (
            <div>
               {renderCart()}
            </div>
        );
    
}

export default CartList;