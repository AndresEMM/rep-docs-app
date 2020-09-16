import React from 'react';
import { Player } from 'video-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "video-react/dist/video-react.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Media() {
    return (
        <Row className="media">
            <Col xs={12} md={12}>
                <p>¡Bienvenido!</p>
                <Player
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            </Col>
        </Row>
    )
}

export default Media;