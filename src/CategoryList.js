import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from "prop-types";
import axios from "axios"
class CategoryList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: []

        }

    }
    componentDidMount() {//render işleminden önce tetiklemek için kullanılır.
        //var jsons = require('C:/react/intro/src/db.json');
        this.getCategories();
    }
    getCategories(jsons) {
        /* jsons.categories.forEach(element => {
             this.state.categories.push(element)
             
         })
        fetch("http://localhost:3000/categories")
            .then(Response => Response.json())
            .then(data => this.setState({ categories: data }));*/
            axios.get('http://localhost:3000/categories').then( res => {//axios ile json verisi çekildi
                this.setState({ categories: res.data })
              })
    }


    render() {

        const { currentCategory, chanceCategory, info } = this.props;//destructing ile props kullanmaya gerek kalmadan gelen değerleri  okuyabiliriz
        return (
            <div>
                <h3 >{info.title}<i className="fas fa-shopping-cart"></i></h3>
                <div>
                    <ListGroup className="list-group ">

                        {this.state.categories.map(category => (//json dan gelen categorileri map parametresi ile dönmesi olayı
                            <ListGroupItem

                                onClick={() => chanceCategory(category)}
                                key={category.id}
                                className=" list-group-item-warning"
                                active={category.categoryName === currentCategory ? true : false}>{/* */}
                                {category.categoryName}</ListGroupItem>
                        ))
                        }
                    </ListGroup>
                    
                </div>
            </div>
        );
    }
}
CategoryList.propTypes = {
    info: PropTypes.string.isRequired//info string olrak ve mutlaka gönderilmeli demek

}
CategoryList.defaultProps = {
    info: "değer gelmedi"//info değeri gelmezse bunu yaz demek
}
export default CategoryList;