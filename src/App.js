// import logo from './logo.svg';
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from "./components/NavigationBar";
import Divisi from "./pages/Divisi";
import Home from "./pages/Home";
import Bph from "./pages/Bph";

// import Tentang from './pages/Tentang'
function App() {
  return (
    <div className="App">
      <div>
        <NavigationBar />
      </div>
      <div>
        <Home />
      </div>

      <div>
        <Bph />
      </div>

      <div>
        <Divisi />
      </div>
      <div>
        <div className="bg-dark">
          <p className="text-white">dawda</p>
        </div>

        <div className="container-fluid p-1 bg-white align-middle border-5">
          <p className="border align-middle">Copyright</p>
        </div>
      </div>
    </div>
  );
}

export default App;
