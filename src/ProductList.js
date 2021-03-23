/* Annova Software

File:ProductList.js

Contents: ürün listelemesi yapıldı scrollbar eklendi

History: 17.03.2021 FatihK
*/
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import axios from "axios";
function ProductList({ currentId, info, addToCart }) {
  const [state, setstate] = useState({ products: [] });
  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    //class yapısında karşılığı componentdidmount
    setIsLoading(true);
    axios
      .get("http://localhost:3000/products")
      .then((Response) => {
        //axios ile json verisi çekildi
        setstate({ products: Response.data }); //Hooks da karşılığı useState

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // boş köşeli parantez renderdan önce useeffecti çalıştır demek

  useEffect(async () => {
    setFilterProducts(
      state.products.filter((productt) =>
        productt.productName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, state]);

  var sayi = 0;

  return (
    <div>
      <h3>{info.title}</h3>
      <input
        type="text"
        className="form-control col-md-5"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <PerfectScrollbar style={{ display: 600, height: 500 }}>
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
            {isLoading && (
              <tbody>
                <tr>
                  <td>Loading...</td>
                </tr>
              </tbody>
            )}
            {filterProducts.map((product) =>
              currentId === product.categoryId ? (
                <tbody className="">
                  <tr key={product.id}>
                    <th scope="row">{(sayi.innerHTML, sayi++)}</th>
                    <td>{product.productName}</td>
                    <td>{product.quantityPerUnit}</td>
                    <td>{product.unitPrice}</td>
                    <td>{product.unitsInStock}</td>
                    <td>
                      <button
                        onClick={() => addToCart(product)}
                        className="btn btn-primary btn-circle btn-sm"
                      >
                        <i className="fas fa-plus-circle"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ) : null
            )}
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
