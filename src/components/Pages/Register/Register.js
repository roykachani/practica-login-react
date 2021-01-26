import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { schema } from './schema';
import { usePost } from './../../../CustomHooks/useHTTP';

const Register = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [post, response, fetching] = usePost();

  const submitRegForm = (data) => {
    console.log(data);
    post('users', data);
  };

  return (
    <Row>
      <Col md={6}>
        <Form onSubmit={handleSubmit(submitRegForm)}>
          <Form.Group>
            {errors.name && <span>Ingresa tu nombre</span>}
            <Form.Control name="name" ref={register} placeholder="Nombre" />
          </Form.Group>
          <Form.Group>
            {errors.lastname && <span>Requerido</span>}
            <Form.Control
              name="lastname"
              ref={register}
              placeholder="Apellido"
            />
          </Form.Group>
          <Form.Group>
            {errors.email && <span>Correo invalido</span>}
            <Form.Control name="email" ref={register} placeholder="email" />
          </Form.Group>
          <Form.Group>
            {errors.password && <span>Requerido</span>}
            <Form.Control
              type="password"
              name="password"
              ref={register}
              placeholder="****"
            />
          </Form.Group>
          <Button type="submit">Registrarse</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
