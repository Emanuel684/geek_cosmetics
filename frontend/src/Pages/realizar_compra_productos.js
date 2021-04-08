import React from "react";

import Realizar_compra_productos from "../Components/Realizar_compra_productos";

import { Articulos } from "../Utiles/Mocks/Articulos";

function realizar_compra_productos() {
  return (
    <>
      <Realizar_compra_productos Articulos={Articulos} />
    </>
  );
}

export default realizar_compra_productos;
