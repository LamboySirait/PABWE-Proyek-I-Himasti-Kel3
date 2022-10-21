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
    <div id="footer">
      <div className="bg-white " style={{height: '30vh'}}>
        <Container className="container" style={{marginTop: "1vh"}}>
          <Row className="row" style={{marginTop: '0 auto', marginBottom: ''}}>
            <Col className="" >
              <div className="mt-4">
                <h3 className="mb-4">Hubungi Kami</h3>
                <div className='d-flex border'>
                  <img src={Location} alt="gambar" width='15px' />
                  <p style={{fontSize: '13px', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', marginLeft: '10px'}}>JL. P.I. Del, Sitoluama, Laguboti, Toba Samosir, Sumatera Utara</p>
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
            <Col>
              <div className="mt-4">
                <img src={Instagram} alt="Instagram Himasti" width="50px" />
                <img src={Youtube} alt="" width="60px" />
                <img src={Facebook} alt="" width="50px" />
              </div>
            </Col>
            <Col className="">
                <img src={LogoHimasti} alt="" width="150px" className="mt-4 "/>
                
            </Col>
          </Row>
        </Container>
      </div>

      <div id="copyright"
        className="bg-dark d-flex"
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
