import { Col, Container, Image, Row } from "react-bootstrap";
import Hedrin from "./../components/img/DivRistek/Hedrin.png";
import Fernando from "./../components/img/DivRistek/fernando.png";
import Boy from "./../components/img/DivRistek/Boy.png";
import Yosua from "./../components/img/DivRistek/Yosua.png";
import Samuel from "./../components/img/DivRistek/Samuel .png";
import Michael from "./../components/img/DivRistek/Michael.png";

import "./pages.css";

const DivRistek = () => {
  return (
    <div id="kominfo" style={{ marginTop: "100px" }}>
      <div className="mb-5">
        <h1>Ristek</h1>
        <div style={{ width: "1000px" }} className="tujuan">
          <h3 className="mb-4">Tujuan</h3>
          <ul>
            <li>
              <small>
                Divisi Riset dan Teknologi bertujuan untuk menumbuhkan dan
                meningkatkan jiwa kompetitif mahasiswa dan meningkatkan
                softskill mahasiswa agar dapat menciptakan kualitas anggota
                HIMASTI yang baik terlebih dalam bidang Informatika
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
                  src={Hedrin}
                  className="rounded-circle"
                  alt="Dian"
                  style={{ width: "150px" }}
                />
                <h5>Hedrin Sitorus</h5>
                <p>Ketua</p>
              </div>
            </Col>
            <Col style={{ position: "relative" }}>
              <div>
                <img
                  src={Fernando}
                  className="rounded-circle"
                  alt="Dian"
                  style={{ width: "170px" }}
                />
                <h5>Fernando Pakpahan</h5>
                <p>Wakil Ketua</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div>
                <Image src={Michael} roundedCircle style={{ width: "100px" }} />
                <h5>Michael</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col></Col>
            <Col>
              <div>
                <Image src={Yosua} roundedCircle style={{ width: "100px" }} />
                <h5>Yosua Sihaloho</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div>
                <Image src={Samuel} roundedCircle style={{ width: "100px" }} />
                <h5>Samuel Sibuea</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Boy} roundedCircle style={{ width: "100px" }} />
                <h5>Boy Sitorus</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DivRistek;
