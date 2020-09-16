import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {XYPlot, LineSeries, VerticalBarSeries, MarkSeries, XAxis, YAxis} from 'react-vis';

class Statistics extends Component {
    
  render(){
    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];
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

        <Row className="chars">
            <Col xs={12} md={12}>
                <h3>Total de Tesis, Artículos y Proyectos</h3>
                </Col>
            <Col xs={4} md={4}>
                <XYPlot height={200} width={200}>
                    <VerticalBarSeries data={data} />
                    <XAxis />
                    <YAxis />
                </XYPlot>
            </Col>

            <Col xs={4} md={4}>
                <XYPlot height={200} width={200}>
                    <LineSeries data={data} />
                    <XAxis />
                    <YAxis />
                </XYPlot>
            </Col>

            <Col xs={4} md={4}>
                <XYPlot height={200} width={200}>
                    <MarkSeries data={data} />
                    <XAxis />
                    <YAxis />
                </XYPlot>
            </Col>
        </Row>
        </Container>
    );
  }
}

export default Statistics;