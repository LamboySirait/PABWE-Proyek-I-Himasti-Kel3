import Graduation from "../components/img/berita/graduation.jpeg";

const Berita = () => {
  return (
    <div
      className=" text-white"
      style={{ marginTop: "120px", minWidth: "700px", marginBottom: "50px" }}
    >
      <div className="mt-5" style={{ margin: "0 auto", width: "90%" }}>
        <h1 className="mb-3">Graduation Day Informatics 2022</h1>
        <img src={Graduation} alt="Foto Wisuda ke-V Informatika 2022" />
        <h5 className="mt-3">Acara wisuda ke-V Informatika tahun 2022</h5>
      </div>
    </div>
  );
};

export default Berita;
