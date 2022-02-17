import React, { useState } from 'react'
import { 
    MDBContainer, 
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarToggler, 
    MDBIcon, 
    MDBNavbarNav, 
    MDBNavbarItem, 
    MDBCollapse 
}  from 'mdb-react-ui-kit'

import { NavLink } from 'react-router-dom'

export const Header = () => {
    const [showBasic,setShowBasic] = useState(false)
  return (
    <>
    <MDBNavbar expand='lg' light bgColor='dark'>
        <MDBContainer fluid>

            <MDBNavbarBrand className='text-white'>
                <span style={{ marginRight: '10px' }}>
                <i className="fab fa-github"></i>
                </span>
                CCAT 2.0
            </MDBNavbarBrand>

            <MDBNavbarToggler
                aria-controls='navbar'
                aria-expanded='false'
                aria-label='Toggle navigation'
                className='text-white'
                onClick={() => setShowBasic(!showBasic)}
            >
                <MDBIcon fas icon="bars" />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

                <MDBNavbarItem>
                
                    <NavLink to='/' className='nav-link text-white'> Home </NavLink>
                
                </MDBNavbarItem>

                <MDBNavbarItem>
            
                    <NavLink to='/addPost' className='nav-link text-white'> Add Post </NavLink>
              
                </MDBNavbarItem>

                <MDBNavbarItem>
             
                    <NavLink to='/ccatSays' className='nav-link text-white'> CCAT Says </NavLink>
          
                </MDBNavbarItem>


                       

                  
                    
                </MDBNavbarNav>
            </MDBCollapse>

        </MDBContainer>
    </MDBNavbar>
    </>
  )
}
