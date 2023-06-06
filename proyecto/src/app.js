import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import Productos from "./components/Productos/productos.jsx";
import Carrito from "./components/Carrito/carito.jsx";
import Login from "./components/Login/login.jsx";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productos" exact component={Productos} />
          <Route path="/productos/tipos" component={TiposProductos} />
          <Route path="/productos/categoria" component={CategoriaProductos} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/inicio-sesion" component={Login} />
        </Switch>
      </main>

      <footer>{/* Pie de página */}</footer>
    </Router>
  );
}

export default App;
