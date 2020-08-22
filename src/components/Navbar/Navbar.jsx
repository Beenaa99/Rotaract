import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from '../../assets/images/Optimized-logo_w.png';
import {motion} from 'framer-motion';

const Nav = styled.nav`
color: #222;
width: 100%;
height: auto;

background-color:rgb(0,0,0,0.99);
padding: 0 10px;
display: flex;

justify-content: space-between;
  .logo {
    padding: 5px 0;
   
  }
`

const Navbar = () => {
  return (
    <motion.div animate={{ opacity: 1 }}
    initial={{opacity:0}}
    transition={{ ease: "easeOut", duration: 2 }}>
    <Nav>
      <div className="logo">
        <img src={Logo} alt='logo' height='60vw' width='auto'/>
      </div>
      <Burger />
    </Nav>
    </motion.div>
  )
}

export default Navbar;