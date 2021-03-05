
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import React, { Component } from 'react';
import alertify from 'alertifyjs';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: [], currentId: [], cart: []//
    }
  }

  chanceCategory(category) {//category listdeki listitem den kontrol ediliyor

    this.setState({ currentCategory: category.categoryName, currentId: category.id })


  }
  addToCart(product) {//product list deki ekle butonundan kontrol ediliyor
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    (addedItem) ? addedItem.quantity += 1 : (newCart.push({ product: product, quantity: 1 }))//eğer additem deki id uyuşuyorsa miktarını arttır eşleşmiyorsa  ürün ekle demek
    this.setState({ cart: newCart });
    alertify.success(product.productName + " Sepete Eklendi", 3);//ekranda ekleme yapıldığı zaman çıkacak olan alert mesajı 3sn kalıyor
  }
  removeFromCart(product) {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + "Sepetten Silindi", 3);
  }
  dellCart() {
    this.setState({ cart: [] });
    alertify.error("Sepet Silindi", 3);
  }


  render() {

    let CategoryInfo = { title: "Categoriler" }
    let ProductInfo = { title: "Ürünler" }
    return (
      <div >

        <Container>

          <Navi
            cart={this.state.cart}
            removeFromCart={this.removeFromCart.bind(this)}
            dellCart={this.dellCart.bind(this)}
          ></Navi>

          <Row>
            <Col xs="4">
              <CategoryList
                currentCategory={this.state.currentCategory}
                chanceCategory={this.chanceCategory.bind(this)}
                info={CategoryInfo}
              />

            </Col>
            <Col xs="8">
              <Switch>{/*switch bütün routeları dolaşmak için kullanılır tek / ana sayfa demek */}
                <Route exact path="/" render={props => (//render ile productlist hem çağırıp hemde değer gönderimi yapılabiliyor
                  <ProductList
                    {...props}
                    currentId={this.state.currentId}
                    info={ProductInfo}
                    addToCart={this.addToCart.bind(this)}

                  />
                )} />
                <Route exact path="/cart" render={props => (
                  <CartList
                    {...props}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart.bind(this)}

                  />
                )} />{/* component ile .js dosyasına ulaşmayı sağlıyor parametresiz ulaşım için*/}
                <Route exact path="/form" component={FormDemo1}/>
                <Route component={NotFound} />{/* eğer / dan sonra bulunmayan bir sayfa ismi yazılırsa switch path yolu olmadığı için burayı çalıştırır*/}
                

                
              </Switch>

            </Col>
          </Row>
        </Container>

      </div>

    );

  }
}


export default App;








