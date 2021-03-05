import React, { Component } from 'react';

class FormDemo1 extends Component {
    constructor(props){
        super(props);
        this.state={userName:''}
        this.onSubmitHandler=this.onSubmitHandler.bind(this)
    }
    
    onChangeHandler(event){
        this.setState({userName:event.target.value})
    }
    onSubmitHandler(event){
        event.preventDefault();//submit yapıldığı zaman sayfayı yenileme demek 
        alert(this.state.userName)

    }
    render() {
        return (
            <div>
                <h3><br></br></h3>
                <form onSubmit={this.onSubmitHandler} className="form-group">
                    <h4 for="fromfile" className="form-label">User Name</h4>
                    <input onChange={this.onChangeHandler.bind(this)} type="text" className="form-control col-md-5 "></input>
                    <h3>User Name is:{this.state.userName}</h3>
                    <input type="submit" value="save"></input>
                </form>
            </div>
        );
    }
}

export default FormDemo1;