import React from "react";

import "../Styles/Inicio_page.css";

import { Link, Redirect } from "react-router-dom";

class Inicio_page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <section id="welcome-section" class="welcome-section">
          <h1>Hola, soy Emanuel Acevedo Muñoz</h1>
          <p>un desarrollador de software</p>
        </section>

        <section id="projects" class="projects-section">
          <h2 class="projects-section-header">¿Qué quieres hacer?</h2>

          <div class="projects-grid">
            <Link to="/realizar_compra/productos">
            <button className="btn btn-light">
              <img src="https://image.flaticon.com/icons/png/128/711/711979.png" />
              Realizar compra
            </button>
            </Link>
            <Link to="/total_compras">
            <button className="btn btn-light">
              <img src="https://image.flaticon.com/icons/png/512/53/53144.png" />
              Ver compras
            </button>
            </Link>
          </div>
        </section>

        <section id="contact" class="contact-section">
          <div class="contact-section-header">
            <h2>Trabajemos juntos ...</h2>
          </div>
          <div class="contact-links">
            <a
              id="profile-link"
              href="https://github.com/Emanuel684"
              target="_blank"
              class="btn contact-details"
            >
              <i class="fab fa-github"></i> GitHub
            </a>

            <a href="emanuelacag@gmail.com" target="_blank" class="btn contact-details">
              <i class="fas fa-at"></i> Correo electronico
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
               Emanuel Acevedo Muñoz <i class="fab fa-free-code-camp"></i>
            </a>
          </p>
        </footer>
      </>
    );
  }
}

export default Inicio_page;
