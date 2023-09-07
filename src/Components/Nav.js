import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('users');
  const navigate = useNavigate();
  const logout = () => {
    console.log('Apple');
    localStorage.clear();
    navigate('/signup');
  }
  return (
    <div className='nav-ul'>
      {auth ? <ul>
        <li><Link to='/'>Products</Link></li>
        <li><Link to='/add'>Add Products</Link></li>
        <li><Link to='/update'>Update Products</Link></li>
        <li><Link to='/signup' onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>
      </ul>
        :
        <ul className='nav-ul nav-right'>
          <li><Link to='/signup'>Sign Up</Link> </li>
          <li><Link to='/login'>Login</Link> </li>
        </ul>
      }
    </div >
  )
}

export default Nav;