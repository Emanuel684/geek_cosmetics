import React from "react";
import axios from "axios";

import "../Styles/Realizar_compra_productos.css";

import { Link, Redirect } from "react-router-dom";
import { Articulos } from "../Utiles/Mocks/Articulos";

class Inicio_page extends React.Component {
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
    };
  }

  // Enviar un articulo a la canasta
  Push_articulo = () => {
    this.props.Articulos.push({
      id_articulo: this.state.id_articulo,
      descripcion_articulo: this.state.descripcion_articulo,
      precio: this.state.precio,
      existencia: this.state.existencia,
      cantidad: this.state.form.cantidad,
    });

    console.log("Articulos:", Articulos);

    // document.getElementById("cantidad").value = "0"

    // document.getElementById("button-articulo").style.backgroundColor = "#5cb85c";

    // document.getElementById("button-articulo").textContent = "Agregado";

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
    console.log(this.state.form);
  };

  render() {
    console.log(this.state.articulos);
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
              <Link to="/realizar_compra/orden">
                <div className="btn btn-primary" type="button">
                  Siguiente
                </div>
              </Link>
            </div>
          </div>
        </header>

        <main>
          <div className="album py-5 bg-light">
            <div className="div-cards">
              <div className="grid-cards">
                {Articulos.map((datosT) => {
                  return (
                    <div id="div-agregado" className="card" style={{ width: "18rem" }}>
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
                        />
                        <hr/>
                        <button
                          onClick={async () => {
                            console.log(datosT.id_articulo);
                            console.log(datosT.descripcion_articulo);
                            console.log(datosT.precio);
                            console.log(datosT.existencia);
                            await this.setState({
                              id_articulo: datosT.id_articulo,
                              descripcion_articulo: datosT.descripcion_articulo,
                              precio: datosT.precio,
                              existencia: datosT.existencia,
                            });
                            this.Push_articulo();
                          }}
                          className="btn btn-primary"
                        >
                          Agregar
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Inicio_page;
