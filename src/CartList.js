import React, { Component } from 'react';
import {Table} from 'reactstrap'
class CartList extends Component {
    renderCart(){
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
                            this.props.cart.map(cartItem=>(
                                <tr key={cartItem.product.id}>
                                    <th>{sayi.innerHTML, sayi++}</th>
                                    <td>{cartItem.product.productName}</td>
                                    <td>{cartItem.product.quantityPerUnit}</td>
                                    <td>{cartItem.product.unitPrice}</td>
                                    <td>{cartItem.product.unitsInStock}</td>
                                    <td>{cartItem.quantity}</td>
                                    <td><button onClick={()=>this.props.removeFromCart(cartItem.product)}><i className="far fa-trash-alt"></i></button></td>
                                </tr>
                            ))

                        }
                    </tbody>
                </Table>
            </div>
        )
    }
    render() {
        
        return (
            <div>
               {this.renderCart()}
            </div>
        );
    }
}

export default CartList;