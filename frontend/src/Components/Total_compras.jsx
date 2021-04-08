import React from "react";
import axios from "axios";

import "../Styles/Total_compras.css";

import { Link } from "react-router-dom";

class Total_compras extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ordenes: [],
    };
  }

  //Petición get para traer la lista de productos registradas en la base de datos
  componentWillMount = async () => {
    await axios
      .get(`http://laptop-8cs5oh6k:3001/ordenes`)
      .then((res) => {
        this.setState({
          ordenes: res.data,
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };
  // Fin get

  render() {
    const Ordenes = this.state.ordenes;

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
            <div>
              <h1 className="h3 mb-3 fw-normal">
                Total compras registradas en nuestra plataforma.
              </h1>
              <div className="div-table-total-compras">
                <table className="table-total-compras">
                  <thead className="thrad-total-compras">
                    <tr className="tr-total-compras">
                      <th className="th-total-compras">Numer de orden</th>

                      <th className="th-total-compras">Subtotal</th>

                      <th className="th-total-compras">Total IVA</th>

                      <th className="th-total-compras">Total</th>
                    </tr>
                  </thead>
                  {Ordenes.map((datosT) => {
                    return (
                      <tr className="tr-total-compras">
                        <td className="td-total-compras">
                          {datosT.numero_orden}
                        </td>

                        <td className="td-total-compras">
                          ${datosT.subtotal_orden}
                        </td>

                        <td className="td-total-compras">
                          ${datosT.totalIVA_orden}
                        </td>
                        <td className="td-total-compras">
                          ${datosT.total_orden}
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Total_compras;
