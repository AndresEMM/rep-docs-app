import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function ImgLink() {
    return (
        <Container>
        <Row className="img-links">
            <Col xs={4} md={4}>
            <Image src="https://via.placeholder.com/171x180" rounded />
            </Col>
            <Col xs={4} md={4}>
            <Image src="https://via.placeholder.com/171x180" rounded />
            </Col>
            <Col xs={4} md={4}>
            <Image src="https://via.placeholder.com/171x180" rounded />
            </Col>
        </Row>
        </Container>
    );
}

export default ImgLink;