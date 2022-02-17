import React, { useState } from 'react'
import { 
    MDBContainer, 
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarToggler, 
    MDBIcon, 
    MDBNavbarNav, 
    MDBNavbarItem, 
    MDBNavbarLink, 
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
                <i class="fab fa-github"></i>
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
                <MDBNavbarLink className='nav-link'>
                    <NavLink to='/' className='text-white'> Home </NavLink>
                </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                <MDBNavbarLink className='nav-link'>
                    <NavLink to='/AddNew' className='text-white'> Add Post </NavLink>
                </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                <MDBNavbarLink className='nav-link'>
                    <NavLink to='/ccatSays' className='text-white'> CCAT Says </NavLink>
                </MDBNavbarLink>
                </MDBNavbarItem>


                       

                  
                    
                </MDBNavbarNav>
            </MDBCollapse>

        </MDBContainer>
    </MDBNavbar>
    </>
  )
}
