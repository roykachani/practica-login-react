import { useForm } from 'react-hook-form';
// inplementa un hoock de control de formularios * que nos provee un register para controlar a travez de un atributo que provee react que se llama ref que permite referenciar como si fuera un id(que no lo es por que en react no se usan id´s), un handleSubmit que evaluda los datos atravez del schema que definimos y para ejecutar el envio a nuestra funcion con los datos(en este caso sumbitForm)
import { schema } from './schema';
import { usePost } from './../../../CustomHooks/useHTTP';
import { yupResolver } from '@hookform/resolvers/yup';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  }); //hoock *

  const [post, response, fetching] = usePost();

  const submitform = (data) => {
    console.log(data); //por data es donde nos envia los datos el handleSubmit ya evaluados. hay que hacer una composicion de funciones (anidado) en la etiqueta que se nombra al evento, para que esto funcione deberia llamarse a la funcion del hook y anidar la funcion que va a recibir la info(en este caso submitForm)
    post('users', data);
  };

  return (
    <Row className="mt-5">
      <Col md={6}>
        <Form onSubmit={handleSubmit(submitform)}>
          <Form.Group>
            {errors.email && <span>correo invalido</span>}
            <Form.Control name="email" ref={register} placeholder="email" />
          </Form.Group>
          <Form.Group>
            {errors.password && <span>Requerido</span>}
            <Form.Control
              type="password"
              name="password"
              ref={register}
              placeholder="*******"
            />
          </Form.Group>
          <Button type="submit">Ingresar</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
