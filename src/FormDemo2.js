/* Annova Software

File:FormDemo2.js

Contents: gelişmiş form yapısı hazırlandı reactstrap ile

History: 17.03.2021 FatihK
*/
import React, { useEffect,useState } from 'react';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import alertify from 'alertifyjs'
function FormDemo2(){
const [state,setstate]=useState({email:"",password:"",city:"",description:""})

    
   function handleChange(event){
        let name=event.target.name
        let value=event.target.value
        setstate(state =>({...state,[name]:value}))/*tek state içerisinde birden fazla nesne var ise kullanım bu şekilde olmak zorunda */
    }
    function handleSubmit(event){
        event.preventDefault();//kayıt yapıldığı zaman sayfanın yenilenmesini engellemek için kullanılır.
        alertify.success("kayıt başarılı");
        alert(state.email+" "+state.password+" "+state.description+" "+ state.city)
    }
    
        return (
            <div>
                <h3><br></br></h3>
                
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Enter email" onChange={handleChange} ></Input>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="password" onChange={handleChange} ></Input>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="city">city</Label>
                    <Input type="text" name="city" id="city" placeholder="city" onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="description">description</Label>
                    <Input type="textarea" name="description" id="description" placeholder="description" onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                    <Button type="submit" className="col-auto">save</Button>
                    </FormGroup>
  
                    
                    
                </Form>
            </div>
        );
    }


export default FormDemo2;