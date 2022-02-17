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

export const Header = () => {
  return (
    <>
    <MDBNavbar expand='lg' light bgColor='primary'>
        <MDBContainer fluid>

            <MDBNavbarBrand className='text-white'>
                <span style={{marginRight: '10px'}}>
                <MDBIcon fas icon="book-open" />
                </span>
                CCAT 2.0
            </MDBNavbarBrand>

            <MDBNavbarToggler
                aria-controls='navbarColor02'
                aria-expanded='false'
                aria-label='Toggle navigation'
                className='text-white'
            >
            </MDBNavbarToggler>
            

            <MDBIcon fas icon="bars" className='text-white lg' />


        </MDBContainer>
    </MDBNavbar>
    </>
  )
}
