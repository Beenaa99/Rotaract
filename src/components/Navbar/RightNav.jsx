import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  color: #fff;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  li {
    text-decoration: none;
    padding:20px 20px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    z-index: 2;
    background-color: #111;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -6%;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    padding-right: 2.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
    
      <Link to='/' style={{ textDecoration: 'none', color: '#ddd'}}><li>Home</li></Link>
      <Link to='/team' style={{ textDecoration: 'none', color: 'white'}}><li>Team</li></Link>
      <Link  to='/projects' style={{ textDecoration: 'none', color: 'white'}}><li>Projects</li></Link>
      <Link to='/form' style={{ textDecoration: 'none', color: 'white'}}><li>Contact</li></Link>
    </Ul>
  )
}

export default RightNav;