import React from "react";
import axios from "axios";

import "../Styles/Realizar_compra_orden.css";

import { Redirect, Link } from "react-router-dom";

import { Articulos } from "../Utiles/Mocks/Articulos";

class Login_usuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtotal: 0,
      totalIVA: 0,
      total_orden: 0,
      form: {
        numero_orden: this.addControl(),
        nombres: null,
        apellidos: null,
        fecha_orden: this.fecha_orden(),
        subtotal_orden: null,
        totalIVA_orden: null,
        total_orden: null,
      },
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

  // Eliminar un articulo
  Drop_articulo = () => {
    console.log("Articulos:", Articulos);

    var arreglo = [1, 2, 3, 4, 5];

    var indice = arreglo.indexOf(3); // obtenemos el indice
    arreglo.splice(indice, 1); // 1 es la cantidad de elemento a eliminar

    console.log("Articulos:", Articulos);

    return this;
  };
  // Fin eliminar un producto de la canastas

  // Función "añadir cero" para el id de la orden.
  addZero = (x, n) => {
    while (x.toString().length < n) {
      x = "0" + x;
    }
    return x;
  };

  // Añadir id de la orden
  addControl = () => {
    var d = new Date();
    var h = this.addZero(d.getHours(), 2);
    var m = this.addZero(d.getMinutes(), 2);
    var s = this.addZero(d.getSeconds(), 2);
    var ms = this.addZero(d.getMilliseconds(), 3);
    return h + m + s + ms + h + m + s + ms;
  };

  // Traer los datos de la fecha actual para el campo fecha_orden
  fecha_orden = () => {
    var date = new Date();
    var dia = date.getDate();
    var mes = date.getMonth() + 1;
    var year = date.getFullYear();
    var hora = date.getHours();
    var min = date.getMinutes();
    var seg = date.getSeconds();

    return year + "-" + mes + "-" + dia + " " + hora + ":" + min + ":" + seg;
  };

  //Petición post para agregar una nueva orden
  post_orden = async () => {
    await axios
      .post(`http://laptop-8cs5oh6k:3001/ordenes`, {
        numero_orden: this.state.form.numero_orden,
        nombre_usuario:
          this.state.form.nombres + " " + this.state.form.apellidos,
        fecha_orden: this.state.form.fecha_orden,
        subtotal_orden: this.state.form.subtotal_orden,
        totalIVA_orden: this.state.form.totalIVA_orden,
        total_orden: this.state.form.total_orden,
      })
      .then((res) => {
        console.log("Se ha creado una nueva orden");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };
  //Fin post

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

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
                        //onChange={this.handleChange}
                        name="numero_orden"
                        value={this.state.form.numero_orden}
                        required
                        disabled
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
                        type="text"
                        className="form-control"
                        id="datetime-local"
                        placeholder={this.state.form.fecha_orden}
                        //onChange={this.handleChange}
                        value={this.state.form.fecha_orden}
                        name="fecha_orden"
                        disabled
                      />
                    </div>
                    <div className="col-12">
                      <hr />
                      <h3>Productos</h3>
                      <table className="table-ordenes">
                        <thead className="thrad-ordenes">
                          <tr className="tr-ordenes">
                            <th className="th-ordenes">
                              Descripcion del producto
                            </th>

                            <th className="th-ordenes">Precio</th>

                            <th className="th-ordenes">Existencia</th>
                            <th className="th-ordenes">Cantidad</th>
                            <th className="th-ordenes">Quietar articulo</th>
                          </tr>
                        </thead>
                        {Articulos.map((datosT) => {
                          return (
                            <tr className="tr-ordenes">
                              <td className="td-ordenes">
                                {datosT.descripcion_articulo}
                              </td>

                              <td className="td-ordenes">
                                ${datosT.precio * datosT.cantidad}
                              </td>

                              <td className="td-ordenes">
                                {datosT.existencia - datosT.cantidad}
                              </td>
                              <td className="td-ordenes">{datosT.cantidad}</td>
                              <td className="td-ordenes">
                                <button className="btn btn-danger">X</button>
                              </td>
                            </tr>
                          );
                        })}
                      </table>
                    </div>
                    <div className="col-12">
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

                            <td className="td-detalles-ordenes">${this.state.totalIVA}</td>

                            <td className="td-detalles-ordenes">${this.state.total_orden}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="btn-agregar">
                    <hr className="my-4" />
                    <Link to="/realizar_compra/detalles_orden">
                      <button
                        className="w-100 btn btn-primary btn-lg"
                        //onClick={this.post_usuario}
                      >
                        Agregar
                      </button>
                    </Link>
                    <br />
                  </div>
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
