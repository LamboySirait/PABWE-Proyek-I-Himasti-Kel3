import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (
        <div>
            <Container className='bg-dark text-white border' style={{ width: '1300px' }}>
                <Row>
                    <Col className='border' style={{ height: '100px' }}>Hubungi Kami</Col>
                    
                    <Col>Media Sosial</Col>
                    <Col>Logo Loh</Col>
                </Row>
            </Container>

            <div className='bg-white d-flex' style={{ height: '50px', width: 'auto' }}>
                <div style={{ width: '1300px', margin: '0 auto' }}>
                    <p className="mx-auto" style={{ width: 'fit-content', float: 'left', transform: 'translateY(50%)' }}>&#169; Copyright 2022 Himasti IT Del. All rights reserved.</p>

                    <p style={{ float: 'right', transform: 'translateY(50%)' }}>Created by Kelompok 3</p>
                </div>
            </div>
        </div>
    )
}

export default Footer