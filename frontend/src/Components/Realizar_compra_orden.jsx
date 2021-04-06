import React from "react";
import axios from "axios";

import "../Styles/Realizar_compra_orden.css";

import { Redirect, Link } from "react-router-dom";

class Login_usuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="bg-light">
          <div className="container">
            <main>
              <div className="py-5 text-center">
                <Link to="/realizar_compra/productos">
                  <div className="btn btn-danger" type="button">
                    Regresar
                  </div>
                </Link>
                <h2>Advertencia</h2>
                <p className="lead">
                  Asegúrese que la información subministrada este correctamente
                  digitada.
                </p>
              </div>

              <div>
                <div>
                  <h4 className="mb-3">Formulario de la orden</h4>

                  <div className="row g-3">
                  <div className="col-12">
                      <label for="number" className="form-label">
                        Numero de orden
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="numero_orden"
                        placeholder="123456789"
                        onChange={this.handleChange}
                        name="numero_orden"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label for="firstName" className="form-label">
                        Nombres
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        onChange={this.handleChange}
                        name="nombres"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label for="lastName" className="form-label">
                        Apellidos
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        onChange={this.handleChange}
                        name="apellidos"
                      />
                    </div>

                    <div className="col-12">
                      <label for="date" className="form-label">
                        Fecha orden
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        placeholder=""
                        onChange={this.handleChange}
                        name="fecha_orden"
                      />
                    </div>

                    <div className="col-12">
                      <div>
                        <div>descripcion</div>
                        <div>precio</div>
                        <div>existencia</div>
                      </div>
                      <div>
                      <label for="date" className="form-label">
                        Fecha orden
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        placeholder=""
                        onChange={this.handleChange}
                        name="fecha_orden"
                      />
                      </div>
                    </div>

                    <div className="col-12">
                      <div>
                        <p>Subtotal</p>
                      </div>
                    </div>

                  </div>

                  <hr className="my-4" />
                  <Link to="/realizar_compra/detalles_orden">
                  <button
                    className="w-100 btn btn-primary btn-lg"
                    onClick={this.post_usuario}
                  >
                    Agregar
                  </button>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default Login_usuarios;
