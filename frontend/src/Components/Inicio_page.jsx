import React from "react";

import "../Styles/Inicio_page.css";

import { Link } from "react-router-dom";

class Inicio_page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <section id="welcome-section" className="welcome-section">
          <h1>Hola, soy Emanuel Acevedo Muñoz</h1>
          <p>un desarrollador de software</p>
        </section>

        <section id="projects" className="projects-section">
          <h2 className="projects-section-header">¿Qué quieres hacer?</h2>

          <div className="projects-grid">
            <Link to="/realizar_compra/productos" className="btn btn-light">
              <div>
                <p className="p-title-buttons">Realizar compra</p>
                <img
                  className="icon-buttons"
                  src="https://image.flaticon.com/icons/png/128/711/711979.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to="/total_compras" className="btn btn-light">
              <div>
                <p className="p-title-buttons">Ver compras</p>
                <img
                  className="icon-buttons"
                  src="https://image.flaticon.com/icons/png/512/53/53144.png"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-section-header">
            <h2>Trabajemos juntos ...</h2>
          </div>
          <div className="contact-links">
            <a
              id="profile-link"
              href="https://github.com/Emanuel684"
              target="_blank"
              className="btn contact-details"
            >
              <i className="fab fa-github"></i> GitHub
            </a>

            <a
              href="emanuelacag@gmail.com"
              target="_blank"
              className="btn contact-details"
            >
              <i className="fas fa-at"></i> Correo electronico
            </a>
          </div>
        </section>

        <footer>
          <p>
            © Creado por
            <a
              href="https://github.com/Emanuel684/geek_cosmetics"
              target="_blank"
            >
              Emanuel Acevedo Muñoz <i className="fab fa-free-code-camp"></i>
            </a>
          </p>
        </footer>
      </>
    );
  }
}

export default Inicio_page;
