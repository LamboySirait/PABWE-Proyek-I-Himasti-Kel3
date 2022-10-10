import { Carousel, CarouselItem } from 'react-bootstrap'
import Tanoto from './../components/img/tanoto.jpg'
import Logo from './../components/img/LogoHimasti.png'

const Home = () => {
    return (
        <div >
            <div>
                <Carousel className='justify-content-center m-auto' style={{height: '90vh'}}>
                    <CarouselItem>
                        <div style={{height: '90vh'}}>
                            <img src={Tanoto} alt="" height='725px'/>
                        </div> 
                    </CarouselItem> 
                    <CarouselItem>
                        <div style={{height: '90vh', backgroundColor: 'gray'}}></div>
                    </CarouselItem>
                </Carousel>
            </div>
            
            <div className='mt-5 border justify-content-center m-auto' style={{width: '1300px'}}>
                <h1 className='text-white'>Tentang Himasti</h1>
                <div className='d-flex m-5 border'>
                    <img className='m-lg-3' src={Logo} alt="" width='300px'/>
                    <div className='text-white m-lg-3'>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
                <div className='d-flex m-5 text-white border'>
                    <h1 className='m-lg-3'>Visi</h1>
                    <p className='m-lg-3'>IT Del nama civitas kita, sungguh mulia cita citanya, tekadnya membangun manusia ilmunya dan wataknya</p>
                </div>
            </div>
        </div>
    )
}

export default Home