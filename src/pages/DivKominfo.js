import { Col, Container, Image, Row } from "react-bootstrap";
import Dian from "./../components/img/DivKominfo/Dian.png";
import Amelia from "./../components/img/DivKominfo/amelia.jpeg";
import Cheilint from "./../components/img/DivKominfo/cheilint.jpeg";
import Dastin from "./../components/img/DivKominfo/dastin.jpeg";
import Gerald from "./../components/img/DivKominfo/gerald.jpeg";
import Rutha from "./../components/img/DivKominfo/rutha.jpeg";
import Theresia from "./../components/img/DivKominfo/theresia.jpeg";
import Jayfline from "./../components/img/DivKominfo/jayfline.jpeg";
import "./pages.css";

const DivKominfo = () => {
  return (
    <div id="kominfo" style={{ marginTop: "100px" }}>
      <div className="mb-5">
        <h1>Kominfo</h1>
        <div style={{ width: "1000px" }} className="tujuan">
          <h3 className="mb-4">Tujuan</h3>
          <ul>
            <li>
              <small>
                Memfasilitasi anggota Himpunan Mahasiswa Program Studi
                Informatika untuk mendapatkan berbagai informasi mengenai
                Kemahasiswaan Program Studi Informatika dan memberikan wadah
                bagi pengembangan kreativitas anggota himpunan.
              </small>
            </li>
            <li>
              <small>
                Mempublikasikan Himpunan Mahasiswa Program Studi Informatika dan
                berbagai acara yang diadakan oleh Himpunan Mahasiswa Prodi
                (HIMAPRO)
              </small>
            </li>
            <li>
              <small>
                Menyediakan sarana komunikasi antara HIMAPRO dengan pihak lain
                melalui media elektronik berupa internet dengan cara membuat
                akun jejaring social yang memudahkan Himpunan dalam menyampaikan
                informasi.
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
                  src={Dian}
                  className="rounded-circle"
                  alt="Dian"
                  style={{ width: "150px" }}
                />
                <h5>Dian Jorgy Gultom</h5>
                <p>Ketua</p>
              </div>
            </Col>
            <Col style={{ position: "relative" }}>
              <div>
                <Image src={Amelia} roundedCircle style={{ width: "150px" }} />
                <h5>Amelia Agustina Hutajulu</h5>
                <p>Wakil Ketua</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div>
                <Image
                  src={Cheilint}
                  roundedCircle
                  style={{ width: "100px" }}
                />
                <h5>Cheilint Claudina Siallagan</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image
                  src={Theresia}
                  roundedCircle
                  style={{ width: "100px" }}
                />
                <h5>Theresia Yolanda Laura Hutabarat</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Rutha} roundedCircle style={{ width: "100px" }} />
                <h5>Ruth Aulya Silalahi</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div>
                <Image src={Gerald} roundedCircle style={{ width: "100px" }} />
                <h5>Gerald Nathanael</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image
                  src={Jayfline}
                  roundedCircle
                  style={{ width: "100px" }}
                />
                <h5>Jayfline Elia Jaddy Hutagalung</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Dastin} roundedCircle style={{ width: "100px" }} />
                <h5>Dastin Raynold Sirait</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DivKominfo;
