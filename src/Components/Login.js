import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const navigate=useNavigate(); 
   useEffect(()=>
   {
    const auth=localStorage.getItem('users');
    if (auth ) {
      navigate('/')      
    } 

   },[])
   const handelLogin=async()=>
   {
    let result=await fetch('http://localhost:5000/login',{
      
        method: 'post',
        body: JSON.stringify({email, password }),
        headers: {
          'Content-Type': 'application/json'
        },
    })
    console.log(email,password);
    result=await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem('users',JSON.stringify(result))
      navigate('/')
      
    }else{
      alert('Please enter correct details')
    }

   }



  return (
    <div className='loginpage'>
    <h1>Login page</h1>
    <input type='text' className='inputbox' 
    onChange={(e)=>{setEmail(e.target.value)}} value={email}
    placeholder='Enter Email'/>
    <input type='password' className='inputbox'
    onChange={(e)=>{setPassword(e.target.value)}} value={password}
     placeholder='Enter Password'/>
    <button className='btn-reg'
    onClick={handelLogin}
     type='button'>Login</button>

    </div>
  )
}

export default Login;