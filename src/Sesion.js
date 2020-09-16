import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";

const Input = ({ label, name_, type_, register, required }) => ( 
    <>
      <label>{label}</label>
      <input name={name_} id={name_} type={type_} ref={register({ required })} />
    </>
  );

function  Sesion() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
   
    return (
        <Container>
          
        <form onSubmit={handleSubmit(onSubmit)} >
        <Row className="form">
          <div className="title">
            <h2>INICIA SESIÓN</h2>
          </div>
          <Col xs={0} md={4}></Col>
        <Col xs={12} md={4}>
            <Input label="Correo" name_="email" type_="email" register={register} required />
            </Col>
            <Col xs={0} md={4}></Col>
            <Col xs={0} md={4}></Col>
        <Col xs={12} md={4}>
            <Input label="Contraseña" name_="pass" type_="password" register={register} required />
            </Col>
            <Col xs={0} md={4}></Col>
            <Col xs={0} md={5}></Col>
        <Col xs={12} md={2}>
          <input name="submit" type="submit" id="contact-submit" data-submit="...Sending"/>
        </Col>
        <Col xs={0} md={5}></Col>
        </Row>
        </form>
        </Container>
  );
}

export default Sesion;