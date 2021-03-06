
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import CartSummary from './CartSummary'
class Navi extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div >
        <Navbar color="light " light expand="md">
          <NavbarBrand href="/">HepsiAnnova</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className="ml-auto" navbar >
              <NavItem >
                <NavLink><Link to="form" className="text-muted">Form</Link></NavLink>
                
              </NavItem>
              <NavItem>
              <NavLink><Link to="form2" className="text-muted">Form2</Link></NavLink>
              </NavItem>
              <CartSummary
                cart={this.props.cart}
                removeFromCart={this.props.removeFromCart}
                dellCart={this.props.dellCart}
                />{/*buradan CartSummary js dosyasına ulaşılıyor */}
            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}


export default Navi;