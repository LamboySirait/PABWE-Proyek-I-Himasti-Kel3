import './App.css';
import NavigationBar from './components/NavigationBar';
import AOS from 'aos'
import Home from './pages/Home';
import Footer from './components/Footer'
import Main from './components/Main'
import 'aos/dist/aos.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    AOS.init()
    return (
        <div className="App">
            {/* <BrowserRouter> */}

            <NavigationBar/>

            {/* <Home />
      
            <Footer /> */}
            
            <Routes>

                <Route path='/' element={<Home />}/>
                <Route path='/tentang' element={<Main />}/>

            </Routes>
            {/* </BrowserRouter> */}

            <Footer />
        </div>
    );
}

export default App;
