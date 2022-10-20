import { Row, Col, Container, Button } from "react-bootstrap";
import Logo from "../components/img/LogoHimasti.png";
import Guntur from "./../components/img/Guntur.png"
import Gabriel from "./../components/img/Gabriel.png"


const Bph = () => {
  return (
    <div
      className="mt-5 border justify-content-center m-auto"
      style={{ height: "50q 0px", width: "1500px" }}
    >
      <h1 className="text-white">BPH</h1>
      <Container>
        <Row>
          <Row>
            <Col sm>
              {" "}
              <div className="border d-flex text-white justify-content-center ">
                <div>
                  <h2 className="text-justify">Ketua</h2>

                  <img
                    className="m-lg-3 border "
                    src={Guntur}
                    alt=""
                    width="500px"
                  />
                  <h3>Guntur</h3>
                </div>
              </div>
            </Col>
            <Col sm>
              {" "}
              <div className="border d-flex text-white justify-content-center ">
                <div>
                  <h2 className="text-justify">Wakil Ketua</h2>
                  <img
                    className="m-lg-3 border"
                    src={Gabriel}
                    alt=""
                    width="500px"
                  />
                  <h3>Gabriel</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Bph;
