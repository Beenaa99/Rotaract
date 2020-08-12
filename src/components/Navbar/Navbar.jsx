import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from '../../assets/images/logo_w.png';
import {motion} from 'framer-motion';

const Nav = styled.nav`
color: #222;
width: 97.3%;
height: 55px;


padding: 0 10px;
display: flex;

justify-content: space-between;
  .logo {
    padding: 5px 0;
   
  }
`

const Navbar = () => {
  return (
    <motion.div animate={{ y: 0 }}
    initial={{y : -100}}
    transition={{ ease: "easeOut", duration: 2 }}>
    <Nav>
      <div className="logo">
        <img src={Logo} alt='logo' height='70px' width='auto'/>
      </div>
      <Burger />
    </Nav>
    </motion.div>
  )
}

export default Navbar;