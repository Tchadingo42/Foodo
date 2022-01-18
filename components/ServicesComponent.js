import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ServicesComponent() {
    return (
        <div className="service-container-bg">
            <Container className="service-container">
                <Row>
                    <Col xs={12} md={4}>
                        <img
                        className="img-fluid service-img"
                        src="/assets/image-one.png"
                        />
                        <h2>Best offer</h2>
                        <p>Quicker and Cheaper</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <img
                        className="img-fluid service-img"
                        src="/assets/image-two.png"
                        />
                        <h2>Fast Delivery</h2>
                        <p>Faster than anyone else </p>
                    </Col>
                    <Col xs={12} md={4}>
                        <img
                        className="img-fluid service-img"
                        src="/assets/image-three.png"
                        />
                        <h2>Quality Food</h2>
                        <p>partenair with the best restaurants in the UK </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesComponent