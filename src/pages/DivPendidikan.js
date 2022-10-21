import { Col, Container, Image, Row } from "react-bootstrap";
import Nanchy from "./../components/img/DivPendidikan/Nanchy.png";
import Grace from "./../components/img/DivPendidikan/Grace.png";
import Intan from "./../components/img/DivPendidikan/Intan.png";
import Rafel from "./../components/img/DivPendidikan/Rafel.png";
import Robert from "./../components/img/DivPendidikan/Robert.png";
import Cindty from "./../components/img/DivPendidikan/Cindty.png";

import "./pages.css";

const DivPendidikan = () => {
  return (
    <div id="kominfo" style={{ marginTop: "100px" }}>
      <div className="mb-5">
        <h1>Pendidikan</h1>
        <div style={{ width: "1000px" }} className="tujuan">
          <h3 className="mb-4">Tujuan</h3>
          <ul>
            <li>
              <small>
                Menjadikan HIMASTI sebagai sarana yang mendukung kegiatan
                akademik dan mengembangkan softskill mahasiswa sarjana
                Informatika.
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
                  src={Nanchy}
                  className="rounded-circle"
                  alt="Dian"
                  style={{ width: "150px" }}
                />
                <h5>Nanchy Siadari</h5>
                <p>Ketua</p>
              </div>
            </Col>
            <Col style={{ position: "relative" }}>
              <div>
                <img
                  src={Grace}
                  className="rounded-circle"
                  alt="Dian"
                  style={{ width: "150px" }}
                />
                <h5>Grace Sitepu</h5>
                <p>Wakil Ketua</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div>
                <Image src={Cindty} roundedCircle style={{ width: "100px" }} />
                <h5>Cindy Simangunsong</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col></Col>
            <Col>
              <div>
                <Image src={Rafel} roundedCircle style={{ width: "100px" }} />
                <h5>Rafael Manurung</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div>
                <Image src={Robert} roundedCircle style={{ width: "100px" }} />
                <h5>Robert Aritonang</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Intan} roundedCircle style={{ width: "100px" }} />
                <h5>Intan Sianipar</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DivPendidikan;
