import React, { useEffect,useState } from 'react';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';

function FormDemo1(){
    const [state,setstate]= useState({userName:"",city:""})
    
        const onChangeHandler=(event)=>{
            //this.setState({userName:event.target.value})
            let name=event.target.name
            let value=event.target.value
            setstate({[name]:value})//tıklanan eventin name'ine göre değerini state e yaz demek *event name i ile state aynı olmalı
            
        }
    
   
    const onSubmitHandler=(event)=>{
        event.preventDefault();//submit yapıldığı zaman sayfayı yenileme demek 
        alert(state.userName)

    }
    
        return (
            <div>
                <h3><br></br></h3>
                <Form onSubmit={onSubmitHandler} className="form-group">
                    <FormGroup>
                    <Input name="userName" onChange={onChangeHandler} type="text" className="form-control col-md-5 "></Input>
                    <Label htmlFor="userName">User Name is:{state.userName}</Label>   
                    </FormGroup>
                    
                    <FormGroup>
                    <Input name="city" onChange={onChangeHandler} type="text" className="form-control col-md-5 "></Input>
                    <Label>city:{state.city}</Label>    
                    </FormGroup>
                    <FormGroup>
                     <Button type="submit"  className="btn btn-danger">save</Button>   
                    </FormGroup>
                    
                </Form>
            </div>
        );
    }


export default FormDemo1;