import * as yup from 'yup';

//cosas a filtrar en un login, mail valido y pass
//yup.object hace ref al formato a validar, shape la forma
export const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(12).required(),
});
