import { Navbar, Container, Nav, NavLink, NavbarBrand } from 'react-bootstrap'
import Logo from './img/LogoHimasti.png'

const NavigationBar = () => {
  return (
    <div style={{backgroundColor: '#FFFDFA'}}>
      <Navbar className='m-auto border' style={{
            width: '1300px',
          }}>
        <Container>
          <NavbarBrand><img src={Logo} alt="" width='50px'/></NavbarBrand>
          <Nav style={{marginRight: '25%'}}>
            <NavLink to='/beranda' >Beranda</NavLink>
            <NavLink to='tentang' >Tentang</NavLink>
            <NavLink to='/berita'>Berita</NavLink>
            <NavLink>Kegiatan</NavLink>
            <NavLink>Prestasi</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar