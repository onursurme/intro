import React, { useEffect,useState } from 'react';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {useForm} from "react-hook-form";//use form kullanımı için form eklemesi yapılır

function FormDemo1(){
    const {register,handleSubmit,errors}=useForm();//oluşturulan form yapısını state oluşturup state e kaydediyor kolay form kullanımı için kullanılır
    

    const onSubmit=(event)=>{ 
        alert(event.userName+event.city)
    }
    
    /*const [state,setstate]= useState({userName:"",city:""})
    
        const onChangeHandler=(event)=>{
            //this.setState({userName:event.target.value})
            let name=event.target.name
            let value=event.target.value
            setstate({[name]:value})//tıklanan eventin name'ine göre değerini state e yaz demek *event name i ile state aynı olmalı
            
        }
    
   
    const onSubmitHandler=(event)=>{
        event.preventDefault();//submit yapıldığı zaman sayfayı yenileme demek 
        alert(state.userName)

    }*/
    
        return (
            <div>
                <h3><br></br></h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                    
                    <input name="userName"  type="text" className="form-control col-md-5 " ref={register}></input>
                    <Label htmlFor="userName">User Name is:{}</Label>   
                    <input name="city"  type="text" className="form-control col-md-5 " ref={register({required:true,minLength:3})}></input>
                    <label>city:{}</label> 
                    {errors.city && <p>şehir 3 harften az olamaz</p>}   
                     <button type="submit"  className="btn btn-danger">save</button>   
                    
                    
                </form>
            </div>
        );
    }


export default FormDemo1;