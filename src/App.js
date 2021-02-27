
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import React, { Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  this.state={currentCategory:"",currentId:""
    }
  }
  
   chanceCategory(category){
    
    this.setState({currentCategory:category.categoryName,currentId:category.id})
    
    
  }
  
    render() {
      
      let CategoryInfo = { title: "Categoriler" }
      let ProductInfo = { title: "Ürünler" }
      return (
        <div >
  
          <Container>
            <Row>
              <Navi></Navi>
            </Row>
            <Row>
              <Col xs="4">
              <CategoryList  
              currentCategory={this.state.currentCategory} 
              chanceCategory={this.chanceCategory.bind(this)} 
              info={CategoryInfo} 
              />
                
              </Col>
              <Col xs="8">
              <ProductList currentId={this.state.currentId} info={ProductInfo} />
              </Col>
            </Row>
          </Container>
  
        </div>
       
      );
  
    }
  }


export default App;
 







