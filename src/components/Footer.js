import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import location from './img/location.svg'

const Footer = () => {
  return (
    <div className="">
      <div className="bg-dark text-white" style={{}}>
        <Container style={{ width: "1300px" }}>
          <Row style={{ height: "100px", border: '1px solid' }}>
            <Col>
              <div className='border'>
                <h3>Hubungi Kami</h3>
                <div className='text-start border'>
                  <img src={location} alt="gambar" width='30px' />
                  <p>JL. P.I. Del, Sitoluama, Laguboti,</p>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <h3>Media Sosial</h3>
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
        style={{ height: "50px", width: "auto" }}
      >
        <div style={{ width: "1300px", margin: "0 auto" }} className="border">
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

          <p style={{ float: "right", transform: "translateY(50%)" }}>
            Created by Kelompok 3
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
