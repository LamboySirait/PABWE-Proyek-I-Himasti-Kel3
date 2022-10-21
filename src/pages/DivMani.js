import { Col, Container, Image, Row } from "react-bootstrap";
import Kevin from "./../components/img/DivMani/Kevin.png";
import Lamboy from "./../components/img/DivMani/Lamboy.png";
import Agustina from "./../components/img/DivMani/Agustina.png";
import Dea from "./../components/img/DivMani/Dea.png";
import Wilona from "./../components/img/DivMani/Wilona.png";
import Yefta from "./../components/img/DivMani/Yefta.png";
import Yose from "./../components/img/DivMani/Yose.png";

import "./pages.css";

const DivMani = () => {
  return (
    <div id="kominfo" style={{ marginTop: "100px" }}>
      <div className="mb-5">
        <h1>Minat dan Seni</h1>
        <div style={{ width: "1000px" }} className="tujuan">
          <h3 className="mb-4">Tujuan</h3>
          <ul>
            <li>
              <small>
                Menjadikan HIMASTI sebagai tempat untuk berekspresi di bidang
                seni dan juga sebagai wadah aspirasi serta minat mahasiswa
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
                  src={Kevin}
                  className="rounded-circle"
                  alt="KEvin"
                  style={{ width: "150px" }}
                />
                <h5>Kevin Samosir</h5>
                <p>Ketua</p>
              </div>
            </Col>
            <Col style={{ position: "relative" }}>
              <div>
                <img
                  src={Lamboy}
                  className="rounded-circle"
                  alt="Dian"
                  style={{ width: "150px" }}
                />
                <h5>Lamboy Sirait</h5>
                <p>Wakil Ketua</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div>
                <Image
                  src={Agustina}
                  roundedCircle
                  style={{ width: "100px" }}
                />
                <h5>Agustina Butar-butar</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Yefta} roundedCircle style={{ width: "100px" }} />
                <h5>Yefta Siahaan</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Dea} roundedCircle style={{ width: "100px" }} />
                <h5>Dea Saragih</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div>
                <Image src={Yose} roundedCircle style={{ width: "100px" }} />
                <h5>Yose Siagian</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Wilona} roundedCircle style={{ width: "100px" }} />
                <h5>Wilona Simbolon</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DivMani;
