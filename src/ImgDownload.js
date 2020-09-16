import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function ImgDownload() {
    return (
        <Container>
        <Row className="img-download">
            <Col xs={6} md={3}>
            <a href="index.html" download>
                <Image src="https://via.placeholder.com/171x180" rounded />
            </a>
            </Col>
            <Col xs={6} md={3}>
            <a href="index.html" download>
                <Image src="https://via.placeholder.com/171x180" rounded />
            </a>
            </Col>
            <Col xs={6} md={3}>
            <a href="index.html" download>
                <Image src="https://via.placeholder.com/171x180" rounded />
            </a>
            </Col>
            <Col xs={6} md={3}>
            <a href="index.html" download>
                <Image src="https://via.placeholder.com/171x180" rounded />
            </a>
            </Col>
        </Row>
        </Container>
    );
}

export default ImgDownload;