import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  
} from './NavbarElements';
import Logo from "../../../admin/image/ll.jpg"


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        
<img src={Logo} alt="" />

                


                   
            
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/offers' activeStyle>
            Les Offers
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>  
          <NavLink to='/Admin' >
            Admin
          </NavLink>
          <NavLink to='/adminadd' >
            AddCandidats
          </NavLink> 
          <NavLink to='/candidat' >
            Candidats
          </NavLink> 
         
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
        <NavBtn>
       
        <NavBtnLink to='/signin'>S'authentifier</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;