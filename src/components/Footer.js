import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Location from "./img/icon/location.svg";
import Mail from "./img/icon/mail.svg"
import Call from "./img/icon/call.svg"
import Instagram from "./img/icon/instagram.svg"
import Youtube from "./img/icon/youtube.svg"
import Facebook from "./img/icon/facebook.svg"
import Del from "./img/logo/itdel.png"
import LogoHimasti from "./img/logo/LogoHimasti.png"
import "./components.css"

const Footer = () => {
  return (
    <div id="footer" style={{minWidth: '700px'}}>
      <div className="bg-white " style={{height: '30vh'}}>
        <Container className="" style={{marginTop: "1vh"}}>
          <Row >
            <Col className="mt-4" >
              <div className="mt-4">
                <h3 className="mb-4">Hubungi Kami</h3>
                <div className='d-flex'>
                  <img src={Location} alt="gambar" width='15px' />
                  <p className="text-start" style={{ fontSize: '13px', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', marginLeft: '10px'}}>JL. P.I. Del, Sitoluama, Laguboti, Toba Samosir, Sumatera Utara</p>
                </div>
                <div className='d-flex mt-1'>
                  <img src={Mail} alt="gambar" width='15px' />
                  <p style={{ fontSize: '13px', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', marginLeft: '10px' }}>informatika@del.ac.id</p>
                </div>
                <div className='d-flex mt-1'>
                  <img src={Call} alt="gambar" width='15px' />
                  <p style={{ fontSize: '13px', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', marginLeft: '10px' }}>+6281260388185</p>
                </div>
              </div>
            </Col>
            <Col className="mt-4 mt-auto">
              <a href="https://www.instagram.com/himasti_itdel">
                <img src={Instagram} alt="Instagram Himasti" width="50px" />
              </a>
              <img src={Youtube} alt="" width="60px" />
              <img src={Facebook} alt="" width="50px" />
            </Col>
            <Col className="mt-2">
                <img src={LogoHimasti} alt="HIMASTI" width="100px" className="mt-5 "/>
                <img src={Del} alt="IT DEL" width="100px" className="mt-5 "/>                
            </Col>
          </Row>
        </Container>
      </div>

      <div id="copyright"
        className="bg-dark d-flex h-auto"
      >
        <div>
          <p
            className="mx-auto"
            style={{
              width: "fit-content",
              float: "left",
              transform: "translateY(50%)",
            }}
          >
            Copyright &#169; 2022 Himasti IT Del. All rights reserved.
          </p>

          <p id="dd" style={{ float: "right", transform: "translateY(50%)" }}>
            Created by Kelompok 3
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
