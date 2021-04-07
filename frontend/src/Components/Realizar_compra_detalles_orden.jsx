import React from "react";
import axios from "axios";
import uuid from "react-uuid";

import "../Styles/Realizar_compra_detalles_orden.css";

import { Redirect, Link } from "react-router-dom";

import { Articulos } from "../Utiles/Mocks/Articulos";

class realizar_compra_detalles_orden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_orden: this.addControl(),
      subtotal: 0,
      totalIVA: 0,
      total_orden: 0
    };
  }

  // Saber el total de costo de los productos
  componentWillMount = async () => {
    var subtotal = 0;
    var totalIVA = 0;
    var total_orden = 0;
    var iva = 1.19;

    Articulos.map((datosT) => {
      console.log("precio:", datosT.precio);
      totalIVA = totalIVA + (((datosT.precio * datosT.cantidad) * iva) - datosT.precio * datosT.cantidad);
      console.log('totalIVA', totalIVA);
      subtotal = subtotal + datosT.precio * datosT.cantidad;
      total_orden = totalIVA + subtotal;
      console.log('total_orden', total_orden);
    });
    console.log("subtotal", subtotal);
    this.setState({
      subtotal: subtotal,
      totalIVA: totalIVA,
      total_orden: total_orden
    });
  };
  // Fin

  // Función "añadir cero".
  addZero = (x, n) => {
    while (x.toString().length < n) {
      x = "0" + x;
    }
    return x;
  };

  // Añadir control al elemento "p" principal de la página.
  addControl = () => {
    var d = new Date();
    //var x = document.getElementById("demo");
    var h = this.addZero(d.getHours(), 2);
    var m = this.addZero(d.getMinutes(), 2);
    var s = this.addZero(d.getSeconds(), 2);
    var ms = this.addZero(d.getMilliseconds(), 3);
    //x.innerHTML += "<p id='" + h + m + s + ms + "'>ID: " + h + m + s + ms + "</p>";
    return h + m + s + ms + h + m + s + ms;
  };

  render() {
    console.log("uuid", uuid());
    console.log("ID", this.state.id_orden);
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
                        <td className="td-detalles-ordenes">{datosT.descripcion_articulo}</td>

                        <td className="td-detalles-ordenes">{datosT.cantidad}</td>

                        <td className="td-detalles-ordenes">${datosT.precio}</td>          
                      </tr>
                    );
                  })}
                </table>
              </div>
              <hr/>
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
                    <td className="td-detalles-ordenes">${this.state.subtotal}</td>

                    <td className="td-detalles-ordenes">${this.state.totalIVA}</td>

                    <td className="td-detalles-ordenes">${this.state.total_orden}</td>
                  </tr>
                </table>
              </div>
              <hr/>
            </div>
            <Link to="/">
              <button className="w-100 btn btn-lg btn-primary">
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
