import React, {useEffect,useState } from 'react';
import { Table} from 'reactstrap';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import axios from 'axios'
function ProductList({currentId,info,addToCart}){

   const [state,setstate]= useState({products:[]})

    useEffect(() => {//class yapısında karşılığı componentdidmount
        getProducts();
      function getProducts (){
          axios
            .get("http://localhost:3000/products")
            .then((Response) => {
              //axios ile json verisi çekildi
              setstate({ products: Response.data }); //Hooks da karşılığı useState
            })
            .catch((error) => {
              console.log(error);
            });
        };
    }, []);// boş köşeli parantez renderdan önce useeffecti çalıştır demek
    
    

    
        var sayi=0;
        
        return (
            <div>
                <h3>{info.title}</h3>
                <PerfectScrollbar style={{display: 600, height: 500}}>
                        <div>
                <Table hover dark>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ürün İsmi</th>
                            <th>Bir Porsiyondaki Miktar</th>
                            <th>Birim Fiyat</th>
                            <th>Ürün Stok</th>
                            <th></th>
                        </tr>
                    </thead>
                    
                    {state.products.map(product => (
                        (currentId===product.categoryId)?
                    <tbody className="">
                        
                        <tr key={product.id}>
                            <th scope="row">{sayi.innerHTML, sayi++}</th>
                            <td>{product.productName}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td><button onClick={()=>addToCart(product)}  className="btn btn-primary btn-circle btn-sm" ><i className="fas fa-plus-circle"></i></button></td>
                        </tr>
                        
                    </tbody>
                    :null
                    ))
                    }
                    
                </Table>
                </div>
                </PerfectScrollbar>
            </div>
        );
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
                </ListGroup>
                */