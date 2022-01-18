import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function AboutComponent() {
    return (
        <div className="about-container-bg">
            <Container className="container">
                <Row>
                    <Col xs={12} md={6}>
                        <img
                        src="assets/pizza.jpg"
                        className="img-fluid"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div>
                            <h2>Best offer in town</h2>
                            <b> Tasty food only wait you</b>
                            <br/>
                            <br/>
                            <p>
                                Tired to always eat the same misarable sandwich every lunchday ?
                            </p>
                            <p>
                                Enough is enough download now the Fodo app and get delicious 
                                deliveries from hundreds of restaurants
                            </p>
                            <button className="btn btn-custom">Explore More</button>
                        </div>
                    </Col>
                </Row>
            </Container>            
        </div>
    )
}

export default AboutComponent
