import React, { useState } from 'react'

function LoginForm({Login,error}) {
    const [details,setDetails]=useState({name:"",password:""})
    const handleChance=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        setDetails({...details,[name]:value})
    }
    const submitHandler=e=>{
        e.preventDefault();
        Login(details);
    }
    return (
        <div className="App">
        <form onSubmit={submitHandler} className="form">
            <div className="form-inner">
                <h2>Login</h2>
                {(error!="")?<div>{error}</div>:""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={handleChance}></input>
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={handleChance}></input>
                </div>
                <input type="submit" value="Submit"></input>
            </div>
        </form>
        </div>
    )
}

export default LoginForm;