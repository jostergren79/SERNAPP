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
    <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>

            <MDBNavbarBrand className='text-black'>
                <span style={{ marginRight: '10px' }}>
          

                <i className="fas fa-cat"></i>
                </span>
                CCAT 2.0
            </MDBNavbarBrand>

            <MDBNavbarToggler
                aria-controls='navbar'
                aria-expanded='false'
                aria-label='Toggle navigation'
                className='text-black'
                onClick={() => setShowBasic(!showBasic)}
            >
                <MDBIcon fas icon="bars" />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

                <MDBNavbarItem>
                <NavLink to='/' className='nav-link text-black'> Home </NavLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                <NavLink to='/addPost' className='nav-link text-black'> Add Post </NavLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                <NavLink to='/ccatSays' className='nav-link text-black'> CCAT Says </NavLink>
                </MDBNavbarItem>
                    
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
    </MDBNavbar>
    </>
  )
}
