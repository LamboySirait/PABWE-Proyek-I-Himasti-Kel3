import React from 'react'
import { Navbar, Container, Nav, NavLink, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from './img/LogoHimasti.png'

const NavigationBar = () => {
  return (
    
    <div style={{backgroundColor: '#FFFFFF'}} className='fixed-top'>
      <Navbar expand='lg' className='m-auto d-flex border classes.appBarTransparent' 
          style={{
            width: 'auto',
            display: 'flex'
          }}>
        <div className='opacity-100 border'>
          <NavbarBrand style={{float: 'left'}}><img src={Logo} alt="" width='50px'/></NavbarBrand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-navd'>
            <Nav className='opacity-100 m-lg-auto' >
              <Link to='/' >Beranda</Link>
              <Link to='/tentang' >Tentang</Link>
              <NavLink  id='ada' to='/berita'>Berita</NavLink>
              <NavLink>Kegiatan</NavLink>
              <NavLink>Prestasi</NavLink>
            </Nav>
          </Navbar.Collapse>  
          
        </div>
      </Navbar>
    </div>
  )
}

export default NavigationBar