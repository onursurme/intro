import React, { Component } from 'react';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import alertify from 'alertifyjs'
class FormDemo2 extends Component {
    constructor(props){
        super(props);
        this.state={email:"",password:"",city:"",description:""}
    }
    
    handleChange(event){
        let name=event.target.name
        let value=event.target.value
        this.setState({[name]:value})
    }
    handleSubmit(event){
        event.preventDefault();//kayıt yapıldığı zaman sayfanın yenilenmesini engellemek için kullanılır.
        alertify.success("kayıt başarılı");
    }
    render() {
        return (
            <div>
                <h3><br></br></h3>
                
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Enter email" onChange={this.handleChange.bind(this)}></Input>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange.bind(this)}></Input>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="city">city</Label>
                    <Input type="text" name="city" id="city" placeholder="city" onChange={this.handleChange.bind(this)}></Input>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="description">description</Label>
                    <Input type="textarea" name="description" id="description" placeholder="description" onChange={this.handleChange.bind(this)}></Input>
                    </FormGroup>
                    <FormGroup>
                    <Button type="submit" className="col-auto">save</Button>
                    </FormGroup>
  
                    
                    
                </Form>
            </div>
        );
    }
}

export default FormDemo2;