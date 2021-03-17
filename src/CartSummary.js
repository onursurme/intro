import React, { useState,useEffect} from 'react';
import {

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    

} from 'reactstrap';
import {Link} from "react-router-dom"
function CartSummary({cart,removeFromCart,dellCart}){

        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Cart-{cart.length}
                    </DropdownToggle>
                    <DropdownMenu right>
                        {
                            cart.map(cartItem => (
                                <DropdownItem key={cartItem.product.id} className="ml-auto" >
                                    <Badge color="danger" onClick={()=>removeFromCart(cartItem.product)}><i className="far fa-trash-alt"></i></Badge>
                                     {cartItem.product.productName}-
                                     
                                    <Badge color="success" >{cartItem.quantity}</Badge>
                                    
                                </DropdownItem>
                            ))
                        }


                        <DropdownItem divider />
                        
                        <DropdownItem onClick={()=>dellCart()}>
                            Sepeti Sil
                        </DropdownItem>
                        <DropdownItem >
                            <Link to="cart">Sepete Git</Link>
                        </DropdownItem>
                         
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }


export default CartSummary;