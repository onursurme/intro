import React, { Component } from 'react';
import {

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    

} from 'reactstrap';
class CartSummary extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Cart-{this.props.cart.length}
                    </DropdownToggle>
                    <DropdownMenu right>
                        {
                            this.props.cart.map(cartItem => (
                                <DropdownItem key={cartItem.product.id} className="ml-auto" >
                                    <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}><i class="far fa-trash-alt"></i></Badge>
                                     {cartItem.product.productName}-
                                     
                                    <Badge color="success" >{cartItem.quantity}</Badge>
                                    
                                </DropdownItem>
                            ))
                        }


                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}

export default CartSummary;