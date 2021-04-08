import React from "react";

import "../Styles/Realizar_compra_detalles_orden.css";

import { Link } from "react-router-dom";

import { Articulos } from "../Utiles/Mocks/Articulos";

class realizar_compra_detalles_orden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtotal: 0,
      totalIVA: 0,
      total_orden: 0,
    };
  }

  // Saber el total de costo de los productos
  componentWillMount = async () => {
    var subtotal = 0;
    var totalIVA = 0;
    var total_orden = 0;
    var iva = 1.19;

    Articulos.map((datosT) => {
      totalIVA =
        totalIVA +
        (datosT.precio * datosT.cantidad * iva -
          datosT.precio * datosT.cantidad);

      subtotal = subtotal + datosT.precio * datosT.cantidad;
      total_orden = totalIVA + subtotal;
    });

    this.setState({
      subtotal: subtotal,
      totalIVA: totalIVA,
      total_orden: total_orden,
    });
  };
  // Fin

  LimpiarArray = () => {
    Articulos.map((datosT) => {
      Articulos.splice(Articulos.indexOf(datosT), 1);
    });
  };

  render() {
    return (
      <>
        <div className="text-center">
          <div className="form-signin-detalles-orden">
            <h1 className="h3 mb-3 fw-normal">Detalles de su orden</h1>
            <div>
              <div>
                <table className="table-detalles-ordenes">
                  <thead className="thrad-detalles-orden">
                    <tr className="tr-detalles-ordenes">
                      <th className="th-detalles-ordenes">Articulo</th>

                      <th className="th-detalles-ordenes">Cantidad</th>

                      <th className="th-detalles-ordenes">Subtotal</th>
                    </tr>
                  </thead>
                  {Articulos.map((datosT) => {
                    return (
                      <tr className="tr-detalles-ordenes">
                        <td className="td-detalles-ordenes">
                          {datosT.descripcion_articulo}
                        </td>

                        <td className="td-detalles-ordenes">
                          {datosT.cantidad}
                        </td>

                        <td className="td-detalles-ordenes">
                          ${datosT.precio}
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
              <hr />
              <div>
                <table className="table-detalles-ordenes">
                  <thead className="thrad-detalles-orden">
                    <tr className="tr-detalles-ordenes">
                      <th className="th-detalles-ordenes">Subtotal</th>

                      <th className="th-detalles-ordenes">Total IVA</th>

                      <th className="th-detalles-ordenes">Total</th>
                    </tr>
                  </thead>
                  <tr className="tr-detalles-ordenes">
                    <td className="td-detalles-ordenes">
                      ${this.state.subtotal}
                    </td>

                    <td className="td-detalles-ordenes">
                      ${this.state.totalIVA}
                    </td>

                    <td className="td-detalles-ordenes">
                      ${this.state.total_orden}
                    </td>
                  </tr>
                </table>
              </div>
              <hr />
            </div>
            <Link to="/">
              <button
                onClick={this.LimpiarArray()}
                className="w-100 btn btn-lg btn-primary"
              >
                Finalizar
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default realizar_compra_detalles_orden;
