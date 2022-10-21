import React from "react";
import { Navbar, Container, Nav, NavLink, NavbarBrand } from "react-bootstrap";
import Logo2 from "./img/logo/LogoHimasti2.png";

const NavigationBar = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="fixed-top">
      <Navbar
        expand="lg"
        className="m-auto d-flex border"
        style={{
          display: "flex",
          height: '80px'
        }}
      >
        <Container>
          <NavbarBrand style={{ float: "left" }}>
            <NavLink href="/">
              <img src={Logo2} alt="Himasti" width="100px" />
              </NavLink>
          </NavbarBrand>
          <Nav style={{marginLeft: '-19px'}}>
            <NavLink href="/" style={{fontFamily: 'Droid Sans Bold',fontSize:25}}>Himpunan Mahasiswa Informatika</NavLink>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink href="/">Beranda</NavLink>
              <NavLink href="/tentang" className="ms-3">Tentang</NavLink>
              <NavLink href="/berita" className="ms-3">Berita</NavLink>
              <NavLink href="/kegiatan" className="ms-3">Kegiatan</NavLink>
              <NavLink href="/prestasi" className="ms-3">Prestasi</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
