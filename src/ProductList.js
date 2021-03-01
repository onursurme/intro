import React, { Component } from 'react';
import { Table} from 'reactstrap';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []

        }
    }
    componentDidMount() {//render işleminden önce tetiklemek için kullanılır.
        var jsons= require('C:/react/intro/src/db.json');
        this.getProducts(jsons);
    }
    getProducts(jsons) {
       
        jsons.products.forEach(element => {
            this.state.products.push(element)
            
        })
        
        /*fetch("http://localhost:3000/products")
            .then(Response => Response.json())
            .then(data => this.setState({ products: data }));*/
    }

    render() {
        var sayi=0;
        
        return (
            <div>
                <h3>{this.props.info.title}-{this.props.currentId}</h3>
                <Table hover dark>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ürün İsmi</th>
                            <th>Bir Porsiyondaki Miktar</th>
                            <th>Birim Fiyat</th>
                            <th>Ürün Stok</th>
                        </tr>
                    </thead>
                    {this.state.products.map(product => (
                        (this.props.currentId===product.categoryId)?
                    <tbody className="">
                        
                        <tr key={product.id}>
                            <th scope="row">{sayi.innerHTML, sayi++}</th>
                            <td>{product.productName}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td><button className=" fas fa-plus-circle "  ></button></td>
                        </tr>
                        
                    </tbody>
                    :null
                    ))
                    }
                </Table>
            </div>
        );
    }
}

export default ProductList;
/*

                <ListGroup className="text-dark">
                    {this.state.products.map(product => (
                        (this.props.currentId==product.categoryId)?
                        <ListGroupItem key={product.id}>{

                            product.productName

                            }</ListGroupItem>:null
                    ))
                    }
                </ListGroup>*/