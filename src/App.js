// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar';

// import Tentang from './pages/Tentang'
// import Beranda from './pages/Home'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div >
          <NavigationBar />
      </div>

      <div id='MainContent' style={{height: '1500px'}}>
          <Home/>

        {/* <Carousel>
          <CarouselItem>
            <div style={{height: '500px', backgroundColor: 'blue'}}>

            </div> 
          </CarouselItem> 
          <CarouselItem>
            <div style={{height: '500px', backgroundColor: 'yellow'}}></div>

          </CarouselItem>

        </Carousel> */}

      </div>
      
      <div>

        <div className='bg-dark'>
          <p className='text-white'>dawda</p>
        </div>

        <div className='container-fluid p-1 bg-white align-middle border-5' >
            <p className='border align-middle'>Copyright</p>
        </div>

      </div>
    </div>
  );
}

export default App;
