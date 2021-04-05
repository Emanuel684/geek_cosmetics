import React from "react";

import "../Styles/Realizar_compra_productos.css";

import { Link, Redirect } from "react-router-dom";


class Inicio_page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {

    return (
      <>
        <header>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
              <Link to="/">
                <div
                  className="btn btn-danger"
                  type="button"
                  data-toggle="modal"
                  data-target="#imgUpload"
                >
                  Regresar
                </div>
              </Link>

              <img
                src="https://1.bp.blogspot.com/-9phAiObUAOk/X8BdHu3MhvI/AAAAAAAAIq8/re7gbeTQ214vkvIgjFiys4hNdQIs-eKAACLcBGAsYHQ/s999/login.png"
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                aria-hidden="true"
                className="me-2"
                viewBox="0 0 24 24"
              />

              <div
                className="btn btn-primary"
                type="button"
                data-toggle="modal"
                data-target="#imgUpload"
              >
                Nueva tarea
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="album py-5 bg-light">
            
          Esta es la pagina de incio despues del login y donde comienza la parte de Realizar pedido.
              
            </div>
        </main>
      </>
    );
  }
}

export default Inicio_page;
