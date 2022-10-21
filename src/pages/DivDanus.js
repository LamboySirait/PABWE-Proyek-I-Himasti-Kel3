import { Col, Container, Image, Row } from "react-bootstrap";
import Lasria from "./../components/img/DivDanus/Lasria.png";
import Ivan from "./../components/img/DivDanus/Ivan.png";
import Ketrina from "./../components/img/DivDanus/Ketrina.png";
import Gerry from "./../components/img/DivDanus/Gerry.png";
import Grey from "./../components/img/DivDanus/Grey.png";
import Putri from "./../components/img/DivDanus/Putri.png";
import Valen from "./../components/img/DivDanus/Valen.png";

import "./pages.css";

const DivDanus = () => {
  return (
    <div id="kominfo" style={{ marginTop: "100px" }}>
      <div className="mb-5">
        <h1>Danus</h1>
        <div style={{ width: "1000px" }} className="tujuan">
          <h3 className="mb-4">Tujuan</h3>
          <ul>
            <li>
              <small>
                Sebagai sarana Himpunan Mahasiswa Sarjana Informatika (HIMASTI)
                dalam menghasilkan dan menghimpun dana yang dibutuhkan oleh
                himpunan untuk merealisasikan seluruh kegiatan ataupun program
                kerja yang dimiliki himpunan.
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
                  src={Lasria}
                  className="rounded-circle"
                  alt="Dian"
                  style={{ width: "150px" }}
                />
                <h5>Lasria Rajagukguk</h5>
                <p>Ketua</p>
              </div>
            </Col>
            <Col style={{ position: "relative" }}>
              <div>
                <img
                  src={Ivan}
                  className="rounded-circle"
                  alt="Dian"
                  style={{ width: "150px" }}
                />
                <h5>Ivanston Simbolon</h5>
                <p>Wakil Ketua</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div>
                <Image src={Ketrina} roundedCircle style={{ width: "100px" }} />
                <h5>Ketrina Siagian</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Valen} roundedCircle style={{ width: "100px" }} />
                <h5>Valentina Siahaan</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Putri} roundedCircle style={{ width: "100px" }} />
                <h5>Putri Siahaan</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div>
                <Image src={Grey} roundedCircle style={{ width: "100px" }} />
                <h5>Greyssenly Simanjuntak</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Gerry} roundedCircle style={{ width: "100px" }} />
                <h5>Gerry Benyamin</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DivDanus;
