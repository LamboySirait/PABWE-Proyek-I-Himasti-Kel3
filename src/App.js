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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
