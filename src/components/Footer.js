import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Location from "./img/location.svg";
import Mail from "./img/mail.svg"
import Call from "./img/call.svg"
import Instagram from "./img/instagram.svg"
import "./components.css"

const Footer = () => {
  return (
    <div id="footer">
      <div className="bg-dark" style={{width: '100%'}} >
        <Container style={{ width: "90%" }}>
          <Row style={{ height: "200px"}}>
            <Col>
              <div className="mt-4">
                <h3 className="mb-4">Hubungi Kami</h3>
                <div className='d-flex'>
                  <img src={Location} alt="gambar" width='15px' />
                  <p style={{fontSize: '13px', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', marginLeft: '10px'}}>JL. P.I. Del, Sitoluama, Laguboti, Toba Samosir, Sumatera Utara</p>
                </div>
                <div className='d-flex mt-1'>
                  <img src={Mail} alt="gambar" width='15px' />
                  <p style={{fontSize: '13px', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', marginLeft: '10px'}}>informatika@del.ac.id</p>
                </div>
                <div className='d-flex mt-1'>
                  <img src={Call} alt="gambar" width='15px' />
                  <p style={{fontSize: '13px', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', marginLeft: '10px'}}>+6281260388185</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="mt-4 border">
                <img src={Instagram} alt="" />
              </div>
            </Col>
            <Col>
              <div>
                <h3>Logo</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className="bg-white d-flex"
      >
        <div style={{ width: "95%", margin: "0 auto" }}>
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
