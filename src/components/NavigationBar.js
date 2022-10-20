import React from "react";
import { Navbar, Container, Nav, NavLink, NavbarBrand } from "react-bootstrap";
import Logo from "./img/LogoHimasti.png";

const NavigationBar = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="fixed-top">
      <Navbar
        expand="lg"
        className="m-auto d-flex border classes.appBarTransparent"
        style={{
          width: "auto",
          display: "flex",
        }}
      >
        <Container>
          <NavbarBrand style={{ float: "left" }}>
            <NavLink href="/" >
              <img src={Logo} alt="Himasti" width="50px" />
            </NavLink>
          </NavbarBrand>
          <Nav style={{marginLeft: '-19px'}}>
            <NavLink href="/">Himpunan Mahasiswa Informatika</NavLink>
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
