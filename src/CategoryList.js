import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from "prop-types";

class CategoryList extends Component {
    
    constructor(props) {
        super(props);
        
        this.state= {
            categories:[ ]
            
         }
        
    }
    componentDidMount(){//render işleminden önce tetiklemek için kullanılır.
        this.getCategories();
    }
    getCategories(){
        fetch("http://localhost:3000/categories")
        .then(Response=>Response.json())
        .then(data=>this.setState({categories:data}));
    }
    
    render() {
        
        const {currentCategory,chanceCategory,info}=this.props;//destructing ile props kullanmaya gerek kalmadan gelen değerleri  okuyabiliriz
        return (
            <div>
                <h3 >{info.title}<i class="fas fa-shopping-cart"></i></h3>
                <div>
                <ListGroup className="btn-group text-dark ">
                    {this.state.categories.map(category =>(
                        <ListGroupItem 
                        onClick={()=>this.props.chanceCategory(category)} 
                        key={category.id}
                        className="btn btn-warning">{category.categoryName}</ListGroupItem>
                    ))
                    }
                </ListGroup>
                <h4>{currentCategory}</h4>
                </div>
            </div>
        );
    }
}
CategoryList.propTypes={
    info:PropTypes.string.isRequired//info string olrak ve mutlaka gönderilmeli demek

}
CategoryList.defaultProps={
    info:"değer gelmedi"//info değeri gelmezse bunu yaz demek
}
export default CategoryList;