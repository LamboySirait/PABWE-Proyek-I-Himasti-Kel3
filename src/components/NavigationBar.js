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
            <NavLink href="/">
              <img src={Logo} alt="Himasti" width="50px" />
            </NavLink>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="opacity-100 m-lg-auto">
              <NavLink href="/">Beranda</NavLink>
              <NavLink href="/tentang">Tentang</NavLink>
              <NavLink href="/berita">Berita</NavLink>
              <NavLink href="/kegiatan">Kegiatan</NavLink>
              <NavLink href="/prestasi">Prestasi</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
