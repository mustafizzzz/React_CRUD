import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('users')
    if (auth) {
      navigate('/')

    }
  })


  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch('http://localhost:5000/register', 
    {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },

    })
    result = await result.json()
    console.log(result);
    if (result) {
      navigate('/')


    }
    localStorage.setItem('users', JSON.stringify(result));
  }

  return (
    <div>
      <h1>Register Page</h1>
      <input className='inputbox' type='text'
        value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />

      <input className='inputbox' type='text'
        value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />

      <input className='inputbox' type='password'
        value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />

      <button className='btn-reg' onClick={collectData} type='button'>Register</button>

    </div>
  )
}

export default SignUp