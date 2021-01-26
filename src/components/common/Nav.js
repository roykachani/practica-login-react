import { Link } from 'react-router-dom';

const Nav = () => {
  //   la etiqueta link tiene por defecto la propiedad de redirigir como una etiqueta ancla (a) sin recargar toda la paginsolo el componente que necesita. esto utiliza el browser router que almacena el history
  //no es lo mismo que un breadcam

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  );
};

export default Nav;
