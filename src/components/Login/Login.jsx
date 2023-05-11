import React, { useState } from 'react'
import './Login.css'
import { auth } from '../../firebase'
import logo from '../../assets/logo.svg'
import { useSelector , useDispatch } from 'react-redux'
import { createUserWithEmailAndPassword  , signInWithEmailAndPassword } from "firebase/auth";
import { LOGIN , CREATE_ACCOUNT } from '../../Redux/UserSlice';
import { useNavigate } from 'react-router';

const Login = () => {

  const dispatch = useDispatch()
  const [email , setEmail ] = useState("")
  const [password , setPassword ] = useState("")
  const user = useSelector((state) => state.UserState.user)
  const Navigate = useNavigate()






  return (
    <div className='container'>
      <div className='Login gradient__bg' >

        <h2 className='gradient__text'><a href='./'> GPT-3 </a></h2>
        <form  onClick={(e) => { e.preventDefault()}}>

          <input
           placeholder='email...'
           value={email}
           onChange={(e) => setEmail(e.target.value)}
            />

          <input
           placeholder='password...'
           value={password}
           type='password'
           onChange={(e) => setPassword(e.target.value)}
            />
            <div className='btns'>
            <button className='gradient__text' >Create Account</button>
            <button className='gradient__text' >sign In</button>
            </div>
           
        </form>
     
      </div>
    </div>
  )
}

export default Login

