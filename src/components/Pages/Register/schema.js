import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(16, 'Min 4 caracteres y Max 16').required(),
});
