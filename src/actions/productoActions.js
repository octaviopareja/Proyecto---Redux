import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
} from "../types";

import clienteAxios from "../config/axios";

import Swal from "sweetalert2";

//crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());
    try {
      //insertar en la API
      await clienteAxios.post("/productos", producto);

      //si todo sale bien, actualizar el state
      dispatch(agregarProductoExito(producto));

      Swal.fire("Correcto", "El producto se agrego correctamente", "success");
    } catch (error) {
      //si hay un error cambiar el state
      console.log(error);
      dispatch(agregarProductoError(true));

      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta nuevamente",
      });
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});

//para descargar los productos de la base
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());
    try {
      setTimeout(async () => {
        const respuesta = await clienteAxios.get("/productos");
        dispatch(descargaProductosExitosa(respuesta.data));
      }, 500);
    } catch (error) {
      console.log(error);
      dispatch(descargaProductosError());
    }
  };
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true,
});

const descargaProductosExitosa = (productos) => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos,
});

const descargaProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: true,
});

//selecciona y elimina producto
export function borrarProductoAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id));
    try {
      await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito());

      //SI SE ELIMINAR MOSTRAR ALERTA);
      Swal.fire("Eliminado", "El producto se elimino correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(eliminarProductoError());
    }
  };
}

const obtenerProductoEliminar = (id) => ({
  type: OBTENER_PRODUCTO_ELIMINAR,
  payload: id,
});

const eliminarProductoExito = () => ({
  type: PRODUCTO_ELIMINADO_EXITO,
});

const eliminarProductoError = () => ({
  type: PRODUCTO_ELIMINADO_ERROR,
  payload: true,
});
