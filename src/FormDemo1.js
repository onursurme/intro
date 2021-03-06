import React, { Component } from 'react';

class FormDemo1 extends Component {
    constructor(props){
        super(props);
        this.state={userName:'',city:''}
        this.onSubmitHandler=this.onSubmitHandler.bind(this)
    }
    
    onChangeHandler(event){
        //this.setState({userName:event.target.value})
        let name=event.target.name
        let value=event.target.value
        this.setState({[name]:value})//tıklanan eventin name'ine göre değerini state e yaz demek *event name i ile state aynı olmalı
        
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
                    <h4 htmlFor="fromfile" className="form-label">User Name</h4>
                    <input name="userName" onChange={this.onChangeHandler.bind(this)} type="text" className="form-control col-md-5 "></input>
                    <h3>User Name is:{this.state.userName}</h3>
                    <h4 htmlFor="fromfile" className="form-label">city</h4>
                    <input name="city" onChange={this.onChangeHandler.bind(this)} type="text" className="form-control col-md-5 "></input>
                    <h3>User Name is:{this.state.city}</h3>
                    <input type="submit" value="save" className="btn btn-danger"></input>
                </form>
            </div>
        );
    }
}

export default FormDemo1;