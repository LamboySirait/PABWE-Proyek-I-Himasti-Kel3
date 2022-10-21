import {
  Button,
  Card,
  CardGroup,
  Carousel,
  CarouselItem,
  NavLink,
} from "react-bootstrap";
import Tanoto from "./../components/img/tanoto.jpg";
import Logo from "./../components/img/logo/LogoHimasti.png";
import Gambar from "./../components/img/Gambar1.jpg";
import Daftar from "./../components/img/pendaftaran.jpg";
import Wisuda from "./../components/img/wisuda.jpg";
import Temu from "./../components/img/temu.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Divisi from "./Divisi";
import Feedback from "./../components/img/icon/feedback.svg";
import React, { useState } from "react";
import GiveFeedback from "../components/GiveFeedback";
import Graduation from "../components/img/berita/graduation.jpeg";
import DepanITDEL from "../components/img/Depan_ITDEL.jpg";
import GedungDel from "../components/img/GedungDel.jpg";
import Gedung1 from "../components/img/gedung/Gedung1.jpg";
import Gedung2 from "../components/img/gedung/Gedung2.jpg";
import Gedung3 from "../components/img/gedung/Gedung3.jpg";
import Gedung4 from "../components/img/gedung/Gedung4.jpg";
import Pemandangan from "../components/img/gedung/Pemandangan.jpg";

const Home = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div style={{ marginTop: "75px", minWidth: "700px" }}>
      <div>
        <Carousel
          fade
          className="justify-content-center "
          style={{ height: "90vh" }}
        >
          <CarouselItem
            style={{
              height: "90vh",
              backgroundImage: `url(${Tanoto})`,
              backgroundSize: "100%",
              opacity: "50%",
            }}
          >
            <h1 className="text-white text-center">SYALALALALALA</h1>
          </CarouselItem>
          <CarouselItem
            style={{
              height: "90vh",
              backgroundImage: `url(${Gambar})`,
              backgroundSize: "100%",
              opacity: "50%",
            }}
          >
            <h1>ULALALALALALAL</h1>
          </CarouselItem>
          <CarouselItem
            style={{
              backgroundImage: `url(${DepanITDEL})`,
              height: "90vh",
              backgroundSize: "100%",
            }}
          ></CarouselItem>
          <CarouselItem
            style={{
              backgroundImage: `url(${Graduation})`,
              height: "90vh",
              backgroundSize: "100%",
            }}
          ></CarouselItem>
          <CarouselItem
            style={{
              backgroundImage: `url(${Wisuda})`,
              height: "90vh",
              backgroundSize: "100%",
            }}
          ></CarouselItem>
        </Carousel>
      </div>

      <div className=" mt-5 m-auto" style={{ width: "90%" }}>
        <h1 className="text-white" data-aos="fade-up" data-aos-duration="1000">
          Tentang Himasti
        </h1>
        <div className="d-flex m-5" data-aos="fade-up" data-aos-duration="1000">
          <img className="m-lg-3" src={Logo} alt="" width="300px" />
          <div
            className="text-white m-lg-3 d-flex"
            style={{ alignItems: "center", backgroundImage: { Tanoto } }}
          >
            <p>
              "Program Studi S1 Informatika merupakan salah satu dari 4 (empat)
              program studi di bawah Fakultas Teknik Informatika dan Elektro di
              Institut Teknologi Del."
            </p>
          </div>
        </div>
        <div
          className="d-flex m-5 text-white"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="m-lg-5" style={{ fontSize: "100px" }}>
            Visi
          </h1>
          <p className="m-lg-5">
            Menjadi program Teknik Informatika yang unggul yang berperan dalam
            menghasilkan dan memanfaatkan teknologi untuk mengembangkan potensi
            lokal bagi kemajuan bangsa pada tahun 2023.
          </p>
        </div>
        <div
          className="d-flex m-5 text-white text-start"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
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

      <Divisi />

      <div className="d-flex " data-aos="zoom-in" data-aos-duration="1000">
        <div className="text-white mt-5 m-auto" style={{ width: "90%" }}>
          <div className="d-flex">
            <h1 style={{ margin: "0 auto" }}>Berita Himasti</h1>
          </div>

          <Swiper
            style={{ marginTop: "40px", height: "400px", minWidth: "50%" }}
            className="mySwiper"
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination]}
          >
            <CardGroup>
              <SwiperSlide style={{ width: "30%" }}>
                <Card className="text-dark">
                  <Card.Img src={Graduation} style={{ height: "200px" }} />
                  <Card.Body>
                    <Card.Title>Graduation Day Informatics 17 18</Card.Title>
                    <Card.Text>
                      Sabtu, 15 Oktober 2022, 44 orang mahasiswa/i Informatika
                      di wisuda di Gedung serbaguna Del dengan meriah.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <NavLink href="/berita/1">
                      <small>Lihat Selengkapnya</small>
                    </NavLink>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide style={{ width: "30%" }}>
                <Card className="text-dark">
                  <Card.Img src={Temu} style={{ height: "200px" }} />
                  <Card.Body>
                    <Card.Title>Temu Ramah Informatika 20 22</Card.Title>
                    <Card.Text>
                      Sabtu, 15 Oktober 2022, 44 orang mahasiswa/i Informatika
                      di wisuda di Gedung serbaguna Del dengan meriah.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <NavLink href="/berita/1">
                      <small>Lihat Selengkapnya</small>
                    </NavLink>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide style={{ width: "30%" }}>
                <Card className="text-dark">
                  <Card.Img src={Graduation} height="200px" />
                  <Card.Body>
                    <Card.Title>Graduation Day Informatics 17 18</Card.Title>
                    <Card.Text>
                      Sabtu, 15 Oktober 2022, 44 orang mahasiswa/i Informatika
                      di wisuda di Gedung serbaguna Del dengan meriah.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <NavLink href="/berita/1">
                      <small>Lihat Selengkapnya</small>
                    </NavLink>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide style={{ width: "30%" }}>
                <Card className="text-dark">
                  <Card.Img src={Graduation} height="200px" />
                  <Card.Body>
                    <Card.Title>Graduation Day Informatics 17 18</Card.Title>
                    <Card.Text>
                      Sabtu, 15 Oktober 2022, 44 orang mahasiswa/i Informatika
                      di wisuda di Gedung serbaguna Del dengan meriah.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {/* style={{marginTop: 'auto', marginBottom: 'auto'}} */}
                    <small>Lihat Selengkapnya</small>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
            </CardGroup>
          </Swiper>
        </div>
      </div>

      <div className="d-flex mt-5">
        <div className="m-auto text-white" style={{ width: "90%" }}>
          <h1 className="mb-3">Gallery di IT Del</h1>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-3 mb-lg-0">
              <img src={Gedung1} className="w-100 shadow-1-strong rounded mb-4" alt="GD4" />

              <img src={Gedung2} className="w-100 shadow-1-strong rounded mb-3" alt="Lapangan Hijau"/>
            </div>

            <div className="col-lg-4 mb-3 mb-lg-0">
              <img src={Pemandangan} className="w-100 shadow-1-strong rounded mb-4" alt="Pemandangan dari OT" height={"90%"}/>
            </div>

            <div className="col-lg-4 mb-3 mb-lg-0">
              <img src={Gedung3} className="w-100 shadow-1-strong rounded mb-4" alt="GD7" />

              <img src={Gedung4} className="w-100 shadow-1-strong rounded mb-4" alt="Asrama Dantop" />
            </div>
          </div>
        </div>
      </div>

      <NavLink onClick={() => setShowFeedback(!showFeedback)}>
        <img
          src={Feedback}
          alt=""
          style={{ position: "fixed", bottom: "7%", right: "1%", zIndex: "5" }}
        />
      </NavLink>

      {showFeedback ? <GiveFeedback /> : null}
    </div>
  );
};

export default Home;
