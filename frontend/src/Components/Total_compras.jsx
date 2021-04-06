import React from "react";
import axios from "axios";

import "../Styles/Total_compras.css";

import { Redirect, Link } from "react-router-dom";

class Login_usuarios extends React.Component {
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
            </div>
          </div>
        </header>
        <main>
        <div className="text-center">
          <div >
            {/* <img
              className="mb-4"
              src="https://1.bp.blogspot.com/-9phAiObUAOk/X8BdHu3MhvI/AAAAAAAAIq8/re7gbeTQ214vkvIgjFiys4hNdQIs-eKAACLcBGAsYHQ/s999/login.png"
              alt=""
              width="72"
              height="72"
            /> */}
            <h1 className="h3 mb-3 fw-normal">
              Total compras registradas en nuestra plataforma.
            </h1>
            <div>
              <table className="table_total_compras">
                <tr>
                  <td>Numer de orden</td>

                  <td>Subtotal</td>

                  <td>Total IVA</td>

                  <td>Total</td>
                </tr>

                <tr>
                  <td>456789324</td>

                  <td>$894.000</td>

                  <td>$169.860</td>
                  <td>$1'063.860</td>
                </tr>
                <tr>
                  <td>456789324</td>

                  <td>$894.000</td>

                  <td>$169.860</td>
                  <td>$1'063.860</td>
                </tr>
                <tr>
                  <td>456789324</td>

                  <td>$894.000</td>

                  <td>$169.860</td>
                  <td>$1'063.860</td>
                </tr>
                <tr>
                  <td>456789324</td>

                  <td>$894.000</td>

                  <td>$169.860</td>
                  <td>$1'063.860</td>
                </tr>
                <tr>
                  <td>456789324</td>

                  <td>$894.000</td>

                  <td>$169.860</td>
                  <td>$1'063.860</td>
                </tr>
                <tr>
                  <td>456789324</td>

                  <td>$894.000</td>

                  <td>$169.860</td>
                  <td>$1'063.860</td>
                </tr>
                <tr>
                  <td>456789324</td>

                  <td>$894.000</td>

                  <td>$169.860</td>
                  <td>$1'063.860</td>
                </tr>
                <tr>
                  <td>456789324</td>

                  <td>$894.000</td>

                  <td>$169.860</td>
                  <td>$1'063.860</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        </main>
      </>
    );
  }
}

export default Login_usuarios;
