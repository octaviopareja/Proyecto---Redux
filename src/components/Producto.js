import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  return (
    <tr>
      <td>{nombre}</td>
      <td className="font-weight-bold">$ {precio}</td>
      <td className="acciones">
        <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
        <button type="button" className="btn btn-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
