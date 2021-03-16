import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import PropTypes from "prop-types";
import axios from "axios";
function CategoryList({ currentCategory, chanceCategory, info }) {
    
  const [state, setstate] = useState({ categories: [] });//class yapısında karşılığı setstate

  useEffect(() => {//class yapısında karşılığı componentdidmount
      getCategories();
    function getCategories (){
        axios
          .get("http://localhost:3000/categories")
          .then((Response) => {
            //axios ile json verisi çekildi
            setstate({ categories: Response.data }); //Hooks da karşılığı useState
          })
          .catch((error) => {
            console.log(error);
          });
      };
  }, []);// boş köşeli parantez renderdan önce useeffecti çalıştır demek

  

  return (
    <div>
      <h3>
        {info.title}
        <i className="fas fa-shopping-cart"></i>
      </h3>
      <div>
        <ListGroup className="list-group ">
          {state.categories.map((
            category //json dan gelen categorileri map parametresi ile dönmesi olayı
          ) => (
            <ListGroupItem
              onClick={() => chanceCategory(category)}
              key={category.id}
              className=" list-group-item-warning"
              active={category.categoryName === currentCategory ? true : false}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default CategoryList;
