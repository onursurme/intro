/* Annova Software

File:App.js

Contents: switch route yapısı ile sayfalar arası geçiş yapıldı diğer dosyaar ile bağlanntılar gerçekleştirildi

History: 17.03.2021 FatihK
*/
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import React, { useState,useEffect } from 'react';
import alertify from 'alertifyjs';
import { Route, Switch } from 'react-router-dom';

import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';
import NotFound from './NotFound';

function App (){

  const [state,setstate]=useState({currentCategory:[]})
  const [stateId,setstateId]=useState({currentId:[]})
  const [stateCart,setstateCart]=useState({cart:[]})


  function chanceCategory(category) {//category listdeki listitem den kontrol ediliyor

    setstate({ currentCategory: category.categoryName})
    setstateId({currentId:category.id})


  }
  function addToCart(product) {//product list deki ekle butonundan kontrol ediliyor
    let newCart = stateCart.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    (addedItem) ? addedItem.quantity += 1 : (newCart.push({ product: product, quantity: 1 }))//eğer additem deki id uyuşuyorsa miktarını arttır eşleşmiyorsa  ürün ekle demek
    setstateCart({ cart: newCart });
    alertify.success(product.productName + " Sepete Eklendi", 3);//ekranda ekleme yapıldığı zaman çıkacak olan alert mesajı 3sn kalıyor
  }
  function removeFromCart(product) {
    let newCart = stateCart.cart.filter(c => c.product.id !== product.id);
    setstateCart({ cart: newCart });
    alertify.error(product.productName + "Sepetten Silindi", 3);
  }
  function dellCart() {
    setstateCart({ cart: [] });
    alertify.error("Sepet Silindi", 3);
  }


  

    let CategoryInfo = { title: "Categoriler" }
    let ProductInfo = { title: "Ürünler" }
    return (
      <div >

        <Container>

          <Navi
            cart={stateCart.cart}
            removeFromCart={removeFromCart}
            dellCart={dellCart}
          ></Navi>

          <Row>
            <Col xs="4">
              <CategoryList
                currentCategory={state.currentCategory}
                chanceCategory={chanceCategory}
                info={CategoryInfo}
                
              />
              
            </Col>
            
            <Col xs="8">
              <Switch>{/*switch bütün routeları dolaşmak için kullanılır tek / ana sayfa demek */}
                <Route exact path="/" render={props => (//render ile productlist hem çağırıp hemde değer gönderimi yapılabiliyor
                  <ProductList
                    {...props}
                    currentId={stateId.currentId}
                    info={ProductInfo}
                    addToCart={addToCart}

                  />
                )} />
                <Route exact path="/cart" render={props => (
                  <CartList
                    {...props}
                    cart={stateCart.cart}
                    removeFromCart={removeFromCart}

                  />
                )} />{/* component ile .js dosyasına ulaşmayı sağlıyor parametresiz ulaşım için*/}
                <Route exact path="/form" component={FormDemo1}/>
                <Route exact path="/form2" component={FormDemo2}/>
                <Route component={NotFound}/>{/* eğer / dan sonra bulunmayan bir sayfa ismi yazılırsa switch path yolu olmadığı için burayı çalıştırır*/}
                

                
              </Switch>

            </Col>
          </Row>
        </Container>

      </div>

    );

  }



export default App;








