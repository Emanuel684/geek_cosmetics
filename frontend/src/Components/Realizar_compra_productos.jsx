import React from "react";
import axios from "axios";

import "../Styles/Realizar_compra_productos.css";

import { Link, Redirect } from "react-router-dom";
import { Articulos } from "../Utiles/Mocks/Articulos";

class Realizar_compra_productos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos_componen: Articulos,
      articulos: [],
      id_articulo: null,
      descripcion_articulo: null,
      precio: null,
      existencia: null,
      form: {
        cantidad: 0,
      },
      bool1: false,
    };
  }

  validador_continuar = () => {
    function time2() {
      setTimeout(function () {
        document.getElementById("alerta2").style.display = "none";
      }, 1500);
      document.getElementById("alerta2").style.display = "block";
    }

    if (Articulos.length == 0) {
      console.log("Selecciones un producto para continuar");
      time2();
    } else {
      this.setState({
        bool1: true,
      });
    }
  };

  // Enviar un articulo a la canasta
  Push_articulo = () => {
    if (this.state.existencia - this.state.form.cantidad < 0) {
      time3();
      function time3() {
        setTimeout(function () {
          document.getElementById("alerta3").style.display = "none";
          document.getElementById("alerta3").textContent = "Debes seleccionar una cantidad antes de agregarlo.";
        }, 1500);
        document.getElementById("alerta3").style.display = "block";
        document.getElementById("alerta3").textContent = "No se puede comprar esa cantidad.";
      }
    } else {
      this.props.Articulos.push({
        id_articulo: this.state.id_articulo,
        descripcion_articulo: this.state.descripcion_articulo,
        precio: this.state.precio,
        existencia: this.state.existencia,
        cantidad: this.state.form.cantidad,
      });

      time();

      function time() {
        setTimeout(function () {
          document.getElementById("alerta").style.display = "none";
        }, 1500);
        document.getElementById("alerta").style.display = "block";
      }

      this.setState({
        form: {
          cantidad: 0,
        },
      });
    }

    return this;
  };
  // Fin enviar un articulo a la canasta

  //Petición get para traer la lista de productos registradas en la base de datos
  componentWillMount = async () => {
    await axios
      .get(`http://laptop-8cs5oh6k:3001/articulos`)
      .then((res) => {
        this.setState({
          articulos: res.data,
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };
  // Fin get

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const Articulos = this.state.articulos;

    return (
      <>
        <header>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
              <Link to="/">
                <div className="btn btn-danger" type="button">
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

              <button
                className="btn btn-primary"
                type="button"
                onClick={this.validador_continuar}
              >
                Siguiente
              </button>
            </div>
          </div>
        </header>

        <main>
          <div className="album py-5 bg-light">
            <div id="alerta3" class="alert alert-danger" role="alert">
              Debes seleccionar una cantidad antes de agregarlo.
            </div>
            <div id="alerta2" class="alert alert-danger" role="alert">
              Selecciona un producto para continuar.
            </div>
            <div id="alerta" class="alert alert-success" role="alert">
              Se agrego correctamente a la bolsa.
            </div>
            <div className="div-cards">
              <div className="grid-cards">
                {Articulos.map((datosT) => {
                  return (
                    <div
                      id="div-agregado"
                      className="card"
                      style={{ width: "18rem" }}
                    >
                      {/* <img src="..." class="card-img-top" alt="..." /> */}
                      <div className="card-body">
                        <h3 className="card-title">
                          {datosT.descripcion_articulo}
                        </h3>
                        <p className="card-text">Precio: ${datosT.precio}</p>
                        <p className="card-text">
                          Catidad existente: {datosT.existencia}
                        </p>
                        <label for="cantidad" className="form-label">
                          Cantidad
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="cantidad"
                          placeholder="0"
                          onChange={this.handleChange}
                          name="cantidad"
                          min="0"
                          max="200"
                        />
                        <hr />
                        <div class="d-grid gap-2">
                          <button
                            onClick={async () => {
                              if (this.state.form.cantidad == 0) {
                                // console.log(
                                //   "Selecciones una cantidad",
                                //   this.state.form.cantidad
                                // );
                                time3();
                                function time3() {
                                  setTimeout(function () {
                                    document.getElementById(
                                      "alerta3"
                                    ).style.display = "none";
                                  }, 1500);
                                  document.getElementById(
                                    "alerta3"
                                  ).style.display = "block";
                                }
                              } else {
                                await this.setState({
                                  id_articulo: datosT.id_articulo,
                                  descripcion_articulo:
                                    datosT.descripcion_articulo,
                                  precio: datosT.precio,
                                  existencia: datosT.existencia,
                                });
                                this.Push_articulo();
                              }
                            }}
                            className="btn btn-primary btn-all"
                          >
                            Agregar
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
        {this.state.bool1 && (
          <Redirect
            to={{
              pathname: "/realizar_compra/orden",
            }}
          ></Redirect>
        )}
      </>
    );
  }
}

export default Realizar_compra_productos;
