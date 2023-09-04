import React, { useState } from 'react'
import { RiMenu3Line , RiCloseLine } from "react-icons/ri";

import './navbar.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';



const Menu = () => {
    return <>
            
               <p><a href='#wgpt3'>What is GPT?</a></p>
               <p><a href='#features'>features</a></p>
               <p><a href='#possibility'>Open AI</a></p>
               <p><a href='#blog'>Library</a></p>
    </>
}

const Navbar = () => {

  
    


    const user = useSelector((state) => state.UserState.user)
    const [toggleMenu , setToggleMenu] =  useState(false);
  return (
    <div className='gpt3__navbar'>
        <div className='gpt3__navbar-links'>
            <div className='gpt3__navbar-links_logo'>
           <h2 className='gradient__text'> <Link to='/'>GPT-3</Link> </h2>
            </div>
            <div className='gpt3__navbar-links_container'>
                <Menu />
            </div>
        </div>
        <div className='gpt3__navbar-sign'>
       

        </div>
        
        <div className='gpt3__navbar-menu '>
           { toggleMenu 
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
                <div className='gpt3__navbar-menu_container'>
                    <div className='gpt3__navbar-menu_container-links scale-up-center'>
                        <Menu/>
                        <div className='navbar-menu_menu_container-links-sign '>
                       

              
                        </div>
                    </div>
                </div>
            )
            
            }
        </div>
    </div>
  )
}

export default Navbar