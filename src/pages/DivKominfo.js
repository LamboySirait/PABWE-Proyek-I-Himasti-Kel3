import { Col, Container, Image, Row } from "react-bootstrap";
import Dian from "./../components/img/DivKominfo/Dian.png";
import Amelia from "./../components/img/DivKominfo/amelia.jpeg";
import Cheilint from "./../components/img/DivKominfo/cheilint.jpeg";
import Dastin from "./../components/img/DivKominfo/dastin.jpeg";
import Gerald from "./../components/img/DivKominfo/gerald.jpeg";
import Rutha from "./../components/img/DivKominfo/rutha.jpeg"
import Theresia from "./../components/img/DivKominfo/theresia.jpeg";
import Jayfline from "./../components/img/DivKominfo/jayfline.jpeg";
import "./pages.css"

const DivKominfo = () => {
  return (
    <div id="kominfo">
      <div className="mb-5" >
        <h1>Kominfo</h1>
        <div className="tujuan border bg-white text-dark rounded-4">
          <h3 className="mb-4">Tujuan</h3>
          <ul style={{listStyleType: "none", paddingLeft: "0"}}>
            <li style={{width: "1000px", marginLeft: "auto", marginRight: "auto"}}>
                Memfasilitasi anggota Himpunan Mahasiswa Program Studi
                Informatika untuk mendapatkan berbagai informasi mengenai
                Kemahasiswaan Program Studi Informatika dan memberikan wadah
                bagi pengembangan kreativitas anggota himpunan.
            </li>
            <li stystyle={{width: "1000px", marginLeft: "auto", marginRight: "auto", marginTop: "50px"}}>
                Mempublikasikan Himpunan Mahasiswa Program Studi
                Informatika dan berbagai acara yang diadakan oleh Himpunan
                Mahasiswa Prodi (HIMAPRO)
            </li>
            <li>
              <small>
                Menyediakan sarana komunikasi antara HIMAPRO dengan pihak
                lain melalui media elektronik berupa internet dengan cara membuat
                akun jejaring social yang memudahkan Himpunan dalam
                menyampaikan informasi.
              </small>
            </li>
          </ul>
        </div>
      </div>
      <div className="anggota mb-5">
        <h3>Anggota</h3>
        <Container className="container">
          <Row className="row mt-5">
            <Col className="col">
              <div>
                <img src={Dian} className="rounded-circle" alt="Dian" />
                <h5>Dian Jorgy Gultom</h5>
                <p>Ketua</p>
              </div>
            </Col>
            <Col style={{position: 'relative'}}>
              <div>
                <img src={Amelia} className="rounded-circle" alt="Amelia" />
                <h5>Amelia Agustina Hutajulu</h5>
                <p>Wakil Ketua</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div>
                <Image src={Cheilint} roundedCircle />
                <h5>Cheilint Claudina Siallagan</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Theresia} roundedCircle  />
                <h5>Theresia Yolanda Laura Hutabarat</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Rutha} roundedCircle/>
                <h5>Ruth Aulya Silalahi</h5>
                <p>Anggota</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div>
                <Image src={Gerald} roundedCircle />
                <h5>Gerald Nathanael</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Jayfline} roundedCircle />
                <h5>Jayfline Elia Jaddy Hutagalung</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Dastin} roundedCircle />
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
