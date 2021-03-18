/* Annova Software

File:Navi.js

Contents: navbar oluşturuldu

History: 17.03.2021 FatihK
*/
import React, { useState} from 'react';
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
import CartSummary from './CartSummary';
const Navi =(props)=>{


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
 
    return (
      <div >
        <Navbar color="light " light expand="md">
          <NavbarBrand ><Link to="/" className="text-muted" style={{textDecoration:'none'}}>HepsiAnnova</Link></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar >
            <Nav className="ml-auto" navbar >
              <NavItem >
                <NavLink><Link to="/form" className="text-muted" style={{textDecoration:'none'}}>Form</Link></NavLink>
                
              </NavItem>
              <NavItem>
              <NavLink><Link to="/form2" className="text-muted"style={{textDecoration:'none'}}>Form2</Link></NavLink>
              </NavItem>
              <NavItem>
              <NavLink><Link to="/form3" className="text-muted"style={{textDecoration:'none'}}>Form3</Link></NavLink>
              </NavItem>
              <CartSummary
                cart={props.cart}
                removeFromCart={props.removeFromCart}
                dellCart={props.dellCart}
                />{/*buradan CartSummary js dosyasına ulaşılıyor */}
            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }



export default Navi;