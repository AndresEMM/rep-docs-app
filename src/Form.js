import React from 'react';
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

  const TextArea = ({for_, name_, label, register, required }) => ( 
    <>
      <label for={for_}>{label}</label>
      <textarea name={name_} id={for_} className="form-textarea" rows="4" ref={register} ></textarea>
    </>
  );
  
  // you can use React.forwardRef to pass the ref too
  const Select = React.forwardRef(({ name_, label, register }, ref) => ( 
    <>
      <label>{label}</label>
      <select name={name_} id={name_} ref={ref}>
      <option value></option>
        <option value="Duda sobre un artículo/tesis/proyecto">Duda sobre un artículo/tesis/proyecto</option>
        <option value="Sugerencia">Sugerencia</option>
        <option value="Solicitar información">Solicitar información</option>
        <option value="Otro">Otro</option>
      </select>
    </>
  ));

function  Form() {
    const { register/*, handleSubmit*/ } = useForm();
    //const onSubmit = data => console.log(data);
   
    return (
        <Container>
          
        <form /*onSubmit={handleSubmit(onSubmit)}*/ action="scripts/sendmail_2.php" method="post">
        <Row className="form">
          <div className="title">
            <h2>¿Tienes alguna duda?</h2>
            <h2>CONTÁCTANOS</h2>
          </div>
        <Col xs={12} md={6}>
            <Input label="Nombre *" name_="uname" register={register} required />
        </Col>
        <Col xs={12} md={6}>
            <Input label="Apellidos *" name_="undname" register={register} required />
            </Col>
        <Col xs={12} md={6}>
            <Input label="Correo *" type_="email" name_="email" register={register} required />
            </Col>
        <Col xs={12} md={6}>
            <Select label="¿Qué nesesitas?*" name_="questn" ref={register} />
            </Col>
        <Col xs={12} md={12}>
            <TextArea for_="msg" label="Mensaje *" name_="msg" register={register} />
            </Col>
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

export default Form;