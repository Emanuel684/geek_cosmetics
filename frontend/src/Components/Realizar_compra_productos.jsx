import React from "react";

import "../Styles/Realizar_compra_productos.css";

import { Link, Redirect } from "react-router-dom";

class Inicio_page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
              <Link to="/realizar_compra/orden">
              <div
                className="btn btn-primary"
                type="button"
              >
                Siguiente
              </div>
              </Link>
            </div>
          </div>
        </header>

        <main>
          <div className="album py-5 bg-light">
            <div>
              <div>
                <p>descripcion</p>
              </div>
              <div>
                <p>precio</p>
              </div>
              <div>
                <p>existencia</p>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Inicio_page;
