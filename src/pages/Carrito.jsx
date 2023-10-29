import ItemCarrito from "../components/ItemCarrito";
import { CarritoContext } from "../context/CarritoContext";
import { useContext, useEffect } from "react";
import "../css/Carrito.css";
import { Link, useNavigate } from "react-router-dom";

export default function Carrito() {
  const { carrito, total } = useContext(CarritoContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (carrito.length === 0) {
      // Redirigir al usuario a otra página si el carrito está vacío
      navigate("/");
    }
  }, [navigate, carrito]);

  return (
    <>
      <div className="" id="container-carrito">
        <div className="container" style={{ paddingTop: "2rem" }}>
          <div className="inicio-carrito">
            <h6 className="">Inicio</h6>

            <span> / </span>
            <h6 className="">
              <strong> Carrito de compras</strong>
            </h6>
          </div>

          <div className="grid-container encabezado">
            <div className="grid-item encabezado">Producto</div>
            <div className="grid-item encabezado">Cantidad</div>
            <div className="grid-item encabezado">Precio</div>
            <div className="grid-item encabezado">SUBTOTAL</div>
            <div className="grid-item encabezado"></div>
          </div>
          <div className="container-carrito" id="container-item-carrito">
            {carrito.length > 0 &&
              carrito.map((item, index) => (
                <ItemCarrito key={index} value={item} index={index} />
              ))}
          </div>
          <div
            className="grid-container"
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              height: "10vh",
            }}
          >
            <div className="grid-item encabezado"></div>
            <div className="grid-item encabezado"></div>
            <div className="grid-item">TOTAL</div>
            <div className="grid-item" id="total">
              {total}
            </div>
            <div className="grid-item"></div>
          </div>
          <div className="botones">
            <Link to={"/Checkout"}>
              <button type="button" className="btn btn-primary btn-lg">
                SIGUIENTE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
