import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Nav from './components/common/Nav';
import './App.css';

function App() {
  return (
    // enmarca lo que va guardar BrowserRouter en el historial, de forma implicita pasa un objeto con info el router
    <Router>
      {/* //crea rutas , solo acepta atributos especiales, para pasar componentes se
      deben enmarcar el componente. */}
      <Nav />
      <Switch>
        {/* switch cumple la funcion de la prop exact, que no renderiza dos page con la misma entrada de path, igual es buena practica poner exact */}
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/Register">
          <Register />
          {/*aca si podrian pasarse props*/}
        </Route>

        {/* si una persona quiere manuel mente entrar a una ruta y le erra al escribir lo que puede hacer es usar el Redirect, este permite implementar una imagen de error 404, un componente o redirigir a una page con el atributo to. se declara al final de todas las rutas y si no machea con ninguna esta redirecciona */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
