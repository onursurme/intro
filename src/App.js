/* Annova Software

File:App.js

Contents: switch route yapısı ile sayfalar arası geçiş yapıldı diğer dosyaar ile bağlanntılar gerçekleştirildi

History: 23.03.2021 FatihK
*/
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import React, { useState, useEffect } from "react";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";
import NotFound from "./NotFound";
import FormDemo3 from "./FormDemo3";
import Loading from "./Loading";
import LoginForm from "./components/LoginForm";
import './css/index.css'
function App() {
  const [state, setstate] = useState({ currentCategory: [] });
  const [stateId, setstateId] = useState({ currentId: [] });
  const [stateCart, setstateCart] = useState({ cart: [] });
  const [isLoading, setIsLoading] = useState(true);
//TODO://category listdeki listitem den kontrol ediliyor
  function site() {
    const chanceCategory = (category) => {
      

      setstate({ currentCategory: category.categoryName });
      setstateId({ currentId: category.id });
    };
//TODO://product list deki ekle butonundan kontrol ediliyor
    const addToCart = (product) => {
      
      let newCart = stateCart.cart;
      var addedItem = newCart.find((c) => c.product.id === product.id);
      addedItem
        ? (addedItem.quantity += 1)
        : newCart.push({ product: product, quantity: 1 }); //eğer additem deki id uyuşuyorsa miktarını arttır eşleşmiyorsa  ürün ekle demek
      setstateCart({ cart: newCart });
      alertify.success(product.productName + " Sepete Eklendi", 3); //ekranda ekleme yapıldığı zaman çıkacak olan alert mesajı 3sn kalıyor
    };
    //TODO:cart
    function removeFromCart(product) {
      let newCart = stateCart.cart.filter((c) => c.product.id !== product.id); //tıklanan cart elemanını silmek için kullanıldı filter özelliği ters mantık ile kullanıldı

      setstateCart({ cart: newCart });
      alertify.error(product.productName + "Sepetten Silindi", 3);
    }
    function dellCart() {
      setstateCart({ cart: [] });
      alertify.error("Sepet Silindi", 3);
    }

    let CategoryInfo = { title: "Categoriler" };
    let ProductInfo = { title: "Ürünler" };
    //TODO:site return
    return (
      <div>
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
              <Switch>
                {/*switch bütün routeları dolaşmak için kullanılır tek / ana sayfa demek */}
                <Route
                  exact
                  path="/"
                  render={(
                    props //render ile productlist hem çağırıp hemde değer gönderimi yapılabiliyor
                  ) => (
                    <ProductList
                      {...props}
                      currentId={stateId.currentId}
                      info={ProductInfo}
                      addToCart={addToCart}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={stateCart.cart}
                      removeFromCart={removeFromCart}
                    />
                  )}
                />
                {/* component ile .js dosyasına ulaşmayı sağlıyor parametresiz ulaşım için*/}
                <Route exact path="/form" component={FormDemo1} />
                <Route exact path="/form2" component={FormDemo2} />
                <Route exact path="/form3" component={FormDemo3} />
                <Route component={NotFound} />
                {/* eğer / dan sonra bulunmayan bir sayfa ismi yazılırsa switch path yolu olmadığı için burayı çalıştırır*/}
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  //TODO:App return
  const adminUser = {
    name: "fatih",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.password == adminUser.password &&
      details.name == adminUser.name
    ) {
      setError("")
      console.log("giriş başarılı");
      setUser({
        name: details.name,
        password: details.password,
      });
    } else {
      console.log("tekrar dene");
      setError("tekrar dene")
    }
  };
  const Logout =()=>{
    setUser({name: "", password: ""})
  }
  return (
  
    <div >
      {user.name != "" ? (
        isLoading == true ? <Loading /> : site()
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    
    
  </div>
  );
}

export default App;
