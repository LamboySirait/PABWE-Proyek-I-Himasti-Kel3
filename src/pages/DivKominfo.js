import { Col, Container, Image, Row } from "react-bootstrap";
import Dian from "./../components/img/DivKominfo/Dian.png";
import Amel from "./../components/img/DivKominfo/amelia.jpeg";
import Cheilint from "./../components/img/DivKominfo/cheilint.jpeg";
import Theresia from "./../components/img/DivKominfo/theresia.jpeg";
import Rutha from "./../components/img/DivKominfo/rutha.jpeg"; 
import Gerald from "./../components/img/DivKominfo/gerald.jpeg"; 
import Jay from "./../components/img/DivKominfo/jayfline.jpeg";
import Dastin from "./../components/img/DivKominfo/dastin.jpeg";

const DivKominfo = () => {
  return (
    <div style={{ marginTop: "75px" }}>
      <div className="text-white border" style={{ height: "500px" }}>
        <h1>Kominfo</h1>
      </div>
      <div className="text-white mb-5">
        <h1>Anggota</h1>
        <Container>
          <Row className="mt-5">
            <Col>
              <div>
                <Image src={Dian} roundedCircle style={{ width: "150px" }} />
                <h5>Dian Jorgy Gultom</h5>
                <p>Ketua</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Amel} roundedCircle style={{ width: "150px" }} />
                <h5>Amelia Agustina Hutajulu</h5>
                <p>Wakil Ketua</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div>
                <Image src={Cheilint} roundedCircle style={{ width: "100px" }} />
                <h5>Cheilint Claudina Siallagan</h5>
                <p>Anggota</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Theresia} roundedCircle style={{ width: "100px" }} />
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
                <Image src={Jay} roundedCircle style={{ width: "100px" }} />
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
