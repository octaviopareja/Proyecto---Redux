import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

//cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
};

//el reducer siempre es una funcion
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  //todo el reducer es un switch
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return { ...state, loading: action.payload };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };
    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
