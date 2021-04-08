import React from "react";
import ReactDOM from "react-dom";

import Realizar_compra_detalles_orden from "./Pages/realizar_compra_detalles_orden";
import Realizar_compra_orden from "./Pages/realizar_compra_orden";
import Realizar_compra_productos from "./Pages/realizar_compra_productos";

// Nuevas rutas
import Inicio_page from "./Pages/inicio_page";
import Total_compras from "./Pages/total_compras";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Inicio_page />
        </Route>
        <Route path="/total_compras" exact>
          <Total_compras />
        </Route>
        <Route path="/realizar_compra/detalles_orden" exact>
          <Realizar_compra_detalles_orden />
        </Route>
        <Route path="/realizar_compra/orden" exact>
          <Realizar_compra_orden />
        </Route>
        <Route path="/realizar_compra/productos" exact>
          <Realizar_compra_productos />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
