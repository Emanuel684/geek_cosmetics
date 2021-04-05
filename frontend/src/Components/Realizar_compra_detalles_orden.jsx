import React from "react";
import axios from "axios";

import "../Styles/Realizar_compra_detalles_orden.css";

import { Redirect, Link } from "react-router-dom";

class Login_usuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  


  render() {
    return (
      <>
        <div className="text-center">
          <div className="form-signin">
            <img
              className="mb-4"
              src="https://1.bp.blogspot.com/-9phAiObUAOk/X8BdHu3MhvI/AAAAAAAAIq8/re7gbeTQ214vkvIgjFiys4hNdQIs-eKAACLcBGAsYHQ/s999/login.png"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 fw-normal">Por favor, ingrese</h1>
            <label for="inputEmail" className="visually-hidden">
              Correo electronico
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Correo Electronico"
              onChange={this.handleChange}
              name="correo_electronico"
            />
            <label for="inputPassword" className="visually-hidden">
              Contraseña
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Contraseña"
              onChange={this.handleChange}
              name="contrasena"
            />
            <div className="checkbox mb-3"></div>
            <button
              className="w-100 btn btn-lg btn-primary"
              onClick={this.login}
            >
              Ingresar
            </button>
            <hr />
            <Link to="/registro">
              <button className="w-100 btn btn-lg btn-primary">
                Registrarse
              </button>
            </Link>
            {/* Login */}
            {this.state.Bool1 && (
              <Redirect
                to={{
                  pathname: "/login/inicio",
                }}
              ></Redirect>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Login_usuarios;
