import { Card, CardGroup, Carousel, CarouselItem } from "react-bootstrap";
import Tanoto from "./../components/img/tanoto.jpg";
import Logo from "./../components/img/LogoHimasti.png";
import Gambar from "./../components/img/Gambar1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Divisi from "./Divisi";
import BPH from "./Bph";

const Home = () => {
  return (
    <div style={{ marginTop: "75px" }}>
      <div>
        <Carousel
          className="justify-content-center m-auto"
          style={{ height: "90vh" }}
        >
          <CarouselItem
            style={{
              height: "90vh",
              backgroundImage: `url(${Tanoto})`,
              opacity: "50%",
            }}
          >
            <h1 className="text-white text-center">SYALALALALALA</h1>
          </CarouselItem>
          <CarouselItem
            style={{
              height: "90vh",
              backgroundImage: `url(${Gambar})`,
              backgroundSize: " 90vh",
              opacity: "50%",
            }}
          >
            <h1>ULALALALALALAL</h1>
          </CarouselItem>
        </Carousel>
      </div>

      <div className="d-flex">
        <div className="mt-5 m-auto border" style={{ width: "1300px" }}>
          <h1 className="text-white" data-aos="fade-up">
            Tentang Himasti
          </h1>
          <div className="d-flex m-5" data-aos="fade-up">
            <img className="m-lg-3" src={Logo} alt="" width="300px" />
            <div
              className="text-white m-lg-3 d-flex"
              style={{ alignItems: "center", backgroundImage: { Tanoto } }}
            >
              <p>
                "Program Studi S1 Informatika merupakan salah satu dari 4
                (empat) program studi di bawah Fakultas Teknik Informatika dan
                Elektro di Institut Teknologi Del."
              </p>
            </div>
          </div>
          <div className="d-flex m-5 text-white" data-aos="fade-up">
            <h1 className="m-lg-5" style={{ fontSize: "100px" }}>
              Visi
            </h1>
            <p className="m-lg-5">
              Menjadi program Teknik Informatika yang unggul yang berperan dalam
              menghasilkan dan memanfaatkan teknologi untuk mengembangkan
              potensi lokal bagi kemajuan bangsa pada tahun 2023.
            </p>
          </div>
          <div className="d-flex m-5 text-white text-start" data-aos="fade-up">
            <ul className="m-lg-5">
              <li>
                Menyelenggarakan pendidikan teknik informatika yang bermutu,
                profesional dan diperhitungkan secara nasional.
              </li>
              <li>
                Menyelenggarakan penelitian yang menghasilkan dan memanfaatkan
                teknologi untuk mengembangkan potensi lokal.
              </li>
              <li>
                Melakukan pengabdian kepada masyarakat dalam bidang teknik
                informatika.
              </li>
            </ul>
            <h1 className="m-lg-5" style={{ fontSize: "100px" }}>
              Misi
            </h1>
          </div>
        </div>
      </div>

      <Divisi />

      <div className="d-flex" data-aos="fade-up">
        <div
          className="text-white mt-5 m-auto border"
          style={{ width: "80%" }}
        >
          <div className="d-flex">
            <h1 style={{ margin: "0" }}>Berita Himasti</h1>
            <h5
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "auto",
              }}
            >
              berita lainnya
            </h5>
          </div>

          <Swiper
            style={{ marginTop: "40px", height: "400px", minWidth: "100%" }}
            className="mySwiper"
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination]}
          >
            <CardGroup>
              <SwiperSlide style={{ width: "auto" }}>
                <Card className="text-dark">
                  <Card.Img src={Logo} style={{ height: "200px" }} />
                  <Card.Body>
                    <Card.Title>1. Pengangkatan Ketua Himasti</Card.Title>
                    <Card.Text>Syalalalalallalla lalal alala lah</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small>Dari Anggota Himasti</small>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide style={{ width: "auto" }}>
                <Card className="text-dark">
                  <Card.Img src={Logo} style={{ height: "200px" }} />
                  <Card.Body>
                    <Card.Title>2. Pengangkatan Ketua Himasti</Card.Title>
                    <Card.Text>Syalalalalallalla lalal alala lah</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small>Dari Anggota Himasti</small>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide style={{ width: "auto" }}>
                <Card className="text-dark">
                  <Card.Img src={Logo} style={{ height: "200px" }} />
                  <Card.Body>
                    <Card.Title>3. Pengangkatan Ketua Himasti</Card.Title>
                    <Card.Text>Syalalalalallalla lalal alala lah</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small>Dari Anggota Himasti</small>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide style={{ width: "auto" }}>
                <Card className="text-dark">
                  <Card.Img src={Logo} style={{ height: "200px" }} />
                  <Card.Body>
                    <Card.Title>4. Pengangkatan Ketua Himasti</Card.Title>
                    <Card.Text>Syalalalalallalla lalal alala lah</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small>Dari Anggota Himasti</small>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide style={{ width: "auto" }}>
                <Card className="text-dark">
                  <Card.Img src={Logo} style={{ height: "200px" }} />
                  <Card.Body>
                    <Card.Title>5. Pengangkatan Ketua Himasti</Card.Title>
                    <Card.Text>Syalalalalallalla lalal alala lah</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small>Dari Anggota Himasti</small>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
            </CardGroup>
          </Swiper>
        </div>
      </div>

      <div className="d-flex">
        <div
          className="border m-auto"
          style={{ height: "500px", width: "1300px" }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
