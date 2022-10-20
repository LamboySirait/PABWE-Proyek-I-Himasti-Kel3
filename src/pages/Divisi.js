import { Row, Col, Container, Button } from "react-bootstrap";
import Logo from "../components/img/LogoHimasti.png";
import Pendidikan from "../components/img/pendidikan.png";
import Ristek from "../components/img/riset.png";
import Kominfo from "../components/img/minfo.png";
import Humas from "../components/img/relation.png";
import Danus from "../components/img/dana.png";
import Minat from "../components/img/bakat.png";


const Divisi = () => {
  return (
    <div
      id="MainContent"
      className="mt-5 border justify-content-center m-auto"
      style={{ height: "1500px", width: "1500px" }}
    >
      <div>
        <h1 className="text-white justify-content-center">Divisi</h1>
      </div>

      <Container className="text-white border">
        <Row>
          <Col md={4} xs={6}>
            <div className="border d-flex">
              <div>
                <img
                  className="m-lg-3 rounded-circle"
                  src={Kominfo}
                  alt=""
                  width="100px"
                />
              </div>
              <div className="border">
                <h2>Kominfo</h2>
                <p className="text-start text break">
                  Mempublikasikan Himpunan Mahasiswa Program Studi Informatika
                  dan berbagai acara yang diadakan oleh Himpunan Mahasiswa Prodi
                  (HIMAPRO)
                </p>
                <button>Ingfo</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="text-white border">
        <Row>
          <Col md={{ span: 4, offset: 8 }}>
            <div className="border d-flex">
              <div>
                <h2>Humas</h2>
                <p className="text-end">
                  Menjadi penyambung hubungan antara setiap anggota HIMASTI
                  dengan Civitas Del dan juga Masyaraka{" "}
                </p>
                <button>Ingfo</button>
              </div>
              <div>
                <img
                  className="m-lg-3 rounded-circle"
                  src={Humas}
                  alt=""
                  width="100px"
                  style={{
                    height: "fit-content",
                    transform: "translateY(20%)",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="text-white border w">
        <Row>
          <Col md={4} xs={6}>
            <div className="border d-flex">
              <div className="border">
                <img
                  className="m-lg-3 rounded-circle"
                  src={Danus}
                  alt=""
                  width="100px"
                  style={{
                    height: "fit-content",
                    transform: "translateY(50%)",
                  }}
                />
              </div>
              <div>
                <h2> Dana dan Usaha</h2>
                <p className="text-start">
                  Sebagai sarana Himpunan Mahasiswa Sarjana Informatika
                  (HIMASTI) dalam menghasilkan dan menghimpun dana yang
                  dibutuhkan oleh himpunan untuk merealisasikan seluruh kegiatan
                  ataupun program kerja yang dimiliki himpunan.
                </p>
                <button>Ingfo</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="text-white border">
        <Row>
          <Col md={{ span: 4, offset: 8 }}>
            <div className="border d-flex">
              <div className="border">
                <h2>Pendidikan</h2>
                <p className="text-end">
                  Menjadikan HIMASTI sebagai sarana yang mendukung kegiatan
                  akademik dan mengembangkan softskill mahasiswa sarjana
                  Informatika.
                </p>
                <button>Ingfo</button>
              </div>
              <div
                className="border"
                style={{
                  height: "fit-content",
                  transform: "translateY(25%)",
                }}
              >
                <img
                  className="m-lg-3 rounded-circle justify-content-center"
                  src={Pendidikan}
                  alt=""
                  width="100px"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="text-white border">
        <Row>
          <Col md={4}>
            <div className="border d-flex">
              <div className="">
                <img
                  className="m-lg-3 rounded-circle mx-auto"
                  src={Ristek}
                  alt=""
                  width="100px"
                />
              </div>

              <div className="border">
                <h2>Riset dan Teknologi</h2>
                <p className="text-start">
                  Divisi Riset dan Teknologi bertujuan untuk menumbuhkan dan
                  meningkatkan jiwa kompetitif mahasiswa dan meningkatkan
                  softskill mahasiswa agar dapat menciptakan kualitas anggota
                  HIMASTI yang baik terlebih dalam bidang Informatika.
                </p>
                <button>Ingfo</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="text-white border">
        <Row>
          <Col md={{ span: 4, offset: 8 }}>
            <div className="border d-flex">
              <div className="border">
                <h2> Seni dan Minat</h2>
                <p className="text-end">
                  Menjadikan HIMASTI sebagai tempat untuk berekspresi di bidang
                  seni dan juga sebagai wadah aspirasi serta minat mahasiswa
                </p>
                <button>Ingfo</button>
              </div>
              <div
                className="border"
                style={{
                  height: "fit-content",
                  transform: "translateY(25%)",
                }}
              >
                <img
                  className="m-lg-3 rounded-circle justify-content-center"
                  src={Minat}
                  alt=""
                  width="100px"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Divisi;
