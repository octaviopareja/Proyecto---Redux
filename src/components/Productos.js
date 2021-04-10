//redux
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";
import Producto from "./Producto";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, []);

  //obtener el state
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);

  const cargando = useSelector((state) => state.productos.loading);

  return (
    <>
      <h2 className="text-center my-5">Listado de productos</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}
      {cargando ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Cargando...
        </p>
      ) : productos.length === 0 ? (
        <p className="font-weight-bold text-center mt-4 w-100">
          No hay productos
        </p>
      ) : (
        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Productos;
