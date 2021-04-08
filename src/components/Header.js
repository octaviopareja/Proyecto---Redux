import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-darl bg-primary justify-content-betweenn">
      <div className="container">
        <h1>
          <Link to="/" className="text-light">
            CRUD - React, Redux, REST API & Axios
          </Link>
        </h1>
      </div>
      <Link
        to="/productos/nuevo"
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
      >
        Agregar Producto
      </Link>
    </nav>
  );
};

export default Header;
