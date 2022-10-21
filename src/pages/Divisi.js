import { Row, Col, Container, NavLink } from "react-bootstrap";
import Kominfo from "../components/img/logo/kominfo.webp";
import Humas from "../components/img/logo/sosial.jpg";
import Danus from "../components/img/logo/danausaha.png";
import Pendidikan from "../components/img/logo/pendidikan.png";
import Ristek from "../components/img/logo/teknologi.avif";
import Logo2 from "../components/img/logo/LogoHimasti.png";
import Ristek2 from "../components/img/riset.png";
import Kominfo2 from "../components/img/minfo.png";
import Humas2 from "../components/img/relation.png";
import Danus2 from "../components/img/dana.png";

const Divisi = () => {
  return (
    <div
      id="MainContent"
      className="mt-5 p-5 m-auto"
      style={{ backgroundColor: "white" }}
    >
      <h1 data-aos="fade-down" data-aos-duration="1000">Divisi</h1>
      <Container className='mt-4'>
        <NavLink href="/kominfo" >
          <Row className="mt-4 text-light" data-aos="fade-right" data-aos-duration="1000" style={{backgroundColor: "#1c323d", borderRadius: '20px'}}>
            <Col md={7} xs={6} > 
                <div className='d-flex'>
                  <img src={Kominfo2} alt="Kominfo" width="150px" height="150px" className='m-3 rounded-circle' />
                  <div className="w-auto" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                    <h4>Kominfo</h4>
                    <p className="mt-3 text-start">
                      Mempublikasikan Himpunan Mahasiswa Program Studi Informatika
                      dan berbagai acara yang diadakan oleh Himpunan Mahasiswa Prodi
                      (HIMAPRO)
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </NavLink>
        <Row className="mt-4 text-light" data-aos="fade-left" data-aos-duration="1000" style={{backgroundColor: "#1c323d", borderRadius: '20px'}}>
          <Col md={{ span: 7, offset: 5}} >
            <div className="d-flex">
              <div className="w-auto" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                <h4>Humas</h4>
                <p className="mt-3 text-end">
                  Menjadi penyambung hubungan antara setiap anggota HIMASTI
                  dengan Civitas Del dan juga Masyarakat
                </p>
              </div>
              <img src={Humas2} alt="Humas" width="150px" height="150px" className="m-3 rounded-circle" />
            </div>
          </Col>
        </Row>
        <Row className="mt-4 text-light" data-aos="fade-right" data-aos-duration="1000" style={{backgroundColor: "#1c323d", borderRadius: '20px'}}>
          <Col md={7} xs={6}>
            <div className='d-flex'>
              <img src={Danus2} alt="Danus" width="150px" height="150px" className='m-3 rounded-circle' />
              <div className="w-auto" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                <h4>Dana dan Usaha</h4>
                <p className="mt-3 text-start">
                  Sebagai sarana Himpunan Mahasiswa Sarjana Informatika
                  (HIMASTI) dalam menghasilkan dan menghimpun dana yang
                  dibutuhkan oleh himpunan untuk merealisasikan seluruh kegiatan
                  ataupun program kerja yang dimiliki himpunan.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 text-light" data-aos="fade-left" data-aos-duration="1000" style={{backgroundColor: "#1c323d", borderRadius: '20px'}}>
          <Col md={{ span: 7, offset: 5}} >
            <div className="d-flex">
              <div className="w-auto" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                <h4>Pendidikan</h4>
                <p className="mt-3 text-end">
                  Menjadikan HIMASTI sebagai sarana yang mendukung kegiatan
                  akademik dan mengembangkan softskill mahasiswa sarjana
                  Informatika.
                </p>
              </div>
              <img src={Pendidikan} alt="Humas" width="150px" height="150px" className="m-3 rounded-circle" />
            </div>
          </Col>
        </Row>
        <Row className="mt-4 text-light" data-aos="fade-right" data-aos-duration="1000" style={{backgroundColor: "#1c323d", borderRadius: '20px'}}>
          <Col md={7} xs={6}>
            <div className='d-flex'>
              <img src={Ristek2} alt="Danus" width="150px" height="150px" className='m-3 rounded-circle' />
              <div className="w-auto" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                <h4>Riset dan Teknologi</h4>
                <p className="mt-3 text-start">
                  Divisi Riset dan Teknologi bertujuan untuk menumbuhkan dan
                  meningkatkan jiwa kompetitif mahasiswa dan meningkatkan
                  softskill mahasiswa agar dapat menciptakan kualitas anggota
                  HIMASTI yang baik terlebih dalam bidang Informatika.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 text-light" data-aos="fade-left" data-aos-duration="1000" style={{backgroundColor: "#1c323d", borderRadius: '20px'}}>
          <Col md={{ span: 7, offset: 5}} >
            <div className="d-flex">
              <div className="w-auto" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                <h4>Minat dan Seni</h4>
                <p className="mt-3 text-end">
                  Menjadikan HIMASTI sebagai tempat untuk berekspresi di bidang
                  seni dan juga sebagai wadah aspirasi serta minat mahasiswa
                </p>
              </div>
            </Col>
          </Row>
        </NavLink>
      </Container>
    </div>
  );
};

export default Divisi;
