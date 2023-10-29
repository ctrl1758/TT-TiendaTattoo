/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CardProduct = ({ nombre, imagen, precio, id }) => {
  const productid = id;
  return (
    <Link to={`/Producto/${productid}`} style={{ textDecoration: "none" }}>
      <div className="col">
        <div className="card h-100">
          <div className="img-product">
            <img src={imagen} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title card-titulo">{nombre}</h5>
            <p className="card-text card-precio">${precio}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

/* CardProduct.propTypes = {
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
}; */
export default CardProduct;
