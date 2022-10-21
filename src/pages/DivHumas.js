import { Col, Container, Image, Row } from "react-bootstrap";
import Rein from "./../components/img/DivHumas/Rein.png";
import Icha from "./../components/img/DivHumas/Icha .png";
import Nada from "./../components/img/DivHumas/Nada.png";
import Rio from "./../components/img/DivHumas/Rio.png";
import Rolasta from "./../components/img/DivHumas/Rolasta.png";
import Royman from "./../components/img/DivHumas/Royman.png";

import "./pages.css";

const DivHumas = () => {
  return (
    <div id="kominfo" style={{ marginTop: "100px" }}>
      <div className="mb-5">
        <h1>Humas</h1>
        <div style={{ width: "1000px" }} className="tujuan">
          <h3 className="mb-4">Tujuan</h3>
          <ul>
            <li>
              <small>
                Menjadi penyambung hubungan antara setiap anggota HIMASTI dengan
                Civitas Del dan juga Masyarakat.
              </small>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mb-5">
        <h3>Anggota</h3>
        <Container className="">
          <Row className="mt-5">
            <Col>
              <div>
                <img
                  src={Rein}
                  className="rounded-circle"
                  alt="Dian"
                  style={{ width: "150px" }}
                />
                <h5>Rein Simbolon</h5>
                <p>Ketua</p>
              </div>
            </Col>
            <Col style={{ position: "relative" }}>
              <div>
                <Image src={Rolasta} roundedCircle style={{ width: "150px" }} />
                <h5>Rolasta Sitorus</h5>
                <p>Wakil Ketua</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div>
                <Image src={Nada} roundedCircle style={{ width: "100px" }} />
                <h5>Nada Bakara</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <div>
                <Image src={Royman} roundedCircle style={{ width: "100px" }} />
                <h5>Royman Situmeang</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div>
                <Image src={Rio} roundedCircle style={{ width: "100px" }} />
                <h5>Rio Pasaribu</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Icha} roundedCircle style={{ width: "100px" }} />
                <h5>Icha Samosir</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DivHumas;
