import React, { Component } from 'react';
import { ListGroup, ListGroupItem,Table} from 'reactstrap';
class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []

        }
    }
    componentDidMount() {//render işleminden önce tetiklemek için kullanılır.
        this.getProducts();
    }
    getProducts() {
        fetch("http://localhost:3000/products")
            .then(Response => Response.json())
            .then(data => this.setState({ products: data }));
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
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    {this.state.products.map(product => (
                        (this.props.currentId==product.categoryId)?
                    <tbody>
                        
                        <tr>
                            <th scope="row">{sayi.innerHTML, sayi++}</th>
                            <td>{product.productName}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitPrice}</td>
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