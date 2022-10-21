import "./App.css";
import NavigationBar from "./components/NavigationBar";
import AOS from "aos";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Prestasi from "./pages/Prestasi";
import DivKominfo from "./pages/DivKominfo";
import DivHumas from "./pages/DivHumas";
import DivDanus from "./pages/DivDanus";
import DivPendidikan from "./pages/DivPendidikan";
import DivRistek from "./pages/DivRistek";
import DivMani from "./pages/DivMani";
import Berita from "./pages/Berita"

function App() {
  AOS.init();
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Main />} />
        <Route path="/prestasi" element={<Prestasi />} />
        <Route path="/kominfo" element={<DivKominfo />} />
        <Route path="/humas" element={<DivHumas />} />
        <Route path="/danus" element={<DivDanus />} />
        <Route path="/pendidikan" element={<DivPendidikan />} />
        <Route path="/riset" element={<DivRistek />} />
        <Route path="/danus" element={<DivDanus />} />
        <Route path="/mani" element={<DivMani />} />
        <Route path="/berita/1" element={<Berita />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
