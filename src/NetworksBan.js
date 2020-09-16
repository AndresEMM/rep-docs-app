import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function NetworksBan() {
    return (
        <Container>
        <Row className="networks-ban">
        <Col xs={12} md={12}>
            <h2>Sitios de Interés</h2>
            </Col>
        <Col xs={6} md={1}></Col>
            <Col xs={6} md={2}>
            <Image src="https://via.placeholder.com/171x130" rounded />
            </Col>
            <Col xs={6} md={2}>
            <Image src="https://via.placeholder.com/171x130" rounded />
            </Col>
            <Col xs={6} md={2}>
            <Image src="https://via.placeholder.com/171x130" rounded />
            </Col>
            <Col xs={6} md={2}>
            <Image src="https://via.placeholder.com/171x130" rounded />
            </Col>
            <Col xs={6} md={2}>
            <Image src="https://via.placeholder.com/171x130" rounded />
            </Col>
        <Col xs={6} md={1}></Col>
        </Row>
        </Container>
    );
}

export default NetworksBan;