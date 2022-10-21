import React from "react";
import { Navbar, Container, Nav, NavLink, NavbarBrand } from "react-bootstrap";
import Logo from "./img/logo/LogoHimasti.png";

const NavigationBar = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="fixed-top">
      <Navbar
        expand="lg"
        className="m-auto d-flex border"
        style={{
        }}
      >
        <Container>
          <NavbarBrand style={{ float: "left" }}>
            <NavLink href="/">
              <img src={Logo} alt="Himasti" width="80px" />
              </NavLink>
          </NavbarBrand>
          <Nav style={{marginLeft: '-19px'}}>
            <NavLink href="/">Himpunan Mahasiswa Informatika</NavLink>
          </Nav>
          <Navbar.Toggle  />
          <Navbar.Collapse >
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
