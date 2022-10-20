import { Card, CardGroup, Carousel, CarouselItem, NavLink } from "react-bootstrap";
import Tanoto from "./../components/img/tanoto.jpg";
import Logo from "./../components/img/logo/LogoHimasti.png";
import Gambar from "./../components/img/Gambar1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Divisi from "./Divisi";
import Feedback from "./../components/img/icon/feedback.svg"
import React, {useState} from "react";
import GiveFeedback from "../components/GiveFeedback";
import Graduation from "../components/img/berita/graduation.jpeg"


const Home = () => {
  const [showFeed, setShowFeed] = useState(false)

  return (
    <div style={{ marginTop: "75px" }} >
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
              backgroundSize: "1550px",
              opacity: "50%",
            }}
          >
            <h1>ULALALALALALAL</h1>
          </CarouselItem>
        </Carousel>
      </div>

      <div className=" mt-5 m-auto border" style={{ width: "90%" }}>
        <h1 className="text-white" >
          Tentang Himasti
        </h1>
        <div className="d-flex m-5" >
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
        <div className="d-flex m-5 text-white" >
          <h1 className="m-lg-5" style={{ fontSize: "100px" }}>
            Visi
          </h1>
          <p className="m-lg-5">
            Menjadi program Teknik Informatika yang unggul yang berperan dalam
            menghasilkan dan memanfaatkan teknologi untuk mengembangkan
            potensi lokal bagi kemajuan bangsa pada tahun 2023.
          </p>
        </div>
        <div className="d-flex m-5 text-white text-start" >
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

      <div className="d-flex" >
        <div
          className="text-white mt-5 m-auto border"
          style={{ width: "90%" }}
        >
          <div className="d-flex">
            <h1 style={{margin: '0 auto'}}>Berita Himasti</h1>
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
                  <Card.Img src={Graduation} height="250px"/>
                  <Card.Body>
                    <Card.Title>Graduation Day Informatics 2022</Card.Title>
                    {/* <Card.Text></Card.Text> */}
                  </Card.Body>
                  <Card.Footer>
                    <small>Lihat Selengkapnya</small>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide style={{ width: "30%" }}>
                <Card className="text-dark">
                  <Card.Img src={Graduation} height="250px" />
                  <Card.Body>
                    <Card.Title>Graduation Day Informatics 2022</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small>Lihat Selengkapnya</small>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide style={{ width: "30%" }}>
                <Card className="text-dark">
                  <Card.Img src={Graduation} height="250px" />
                  <Card.Body>
                    <Card.Title>Graduation Day Informatics 2022</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small>Lihat Selengkapnya</small>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide style={{ width: "30%" }}>
                <Card className="text-dark">
                  <Card.Img src={Graduation} height="250px" />
                  <Card.Body>
                    <Card.Title>Graduation Day Informatics 2022</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small>Lihat Selengkapnya</small>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
              <SwiperSlide style={{ width: "30%" }}>
                <Card className="text-dark">
                  <Card.Img src={Graduation} height="250px" />
                  <Card.Body>
                    <Card.Title>Graduation Day Informatics 2022</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small>Lihat Selengkapnya</small>
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
      
      <NavLink onClick={() => setShowFeed(!showFeed)}>
        <img src={Feedback} alt="" style={{position: 'fixed', bottom: '7%', right: '1%', zIndex: '5'}} />
      </NavLink>

      {showFeed ? <GiveFeedback /> : null}


    </div>
  );
}

export default Home;
