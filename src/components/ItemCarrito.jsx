/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ItemCarrito({ value, index }) {
  const [expand, setExpand] = useState(false);

  const { deleteItemCarrito, restar, sumar } = useContext(CarritoContext);
  const { imagen, titulo, precio, cantidad } = value;

  const handleButtonClick = (index, operacion) => {
    if (operacion === "suma") {
      sumar(index);
    } else {
      restar(index);
    }
    setExpand(true);
    setTimeout(() => {
      setExpand(false);
    }, 300);
  };
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <div className="title-product-img-carrito">
            <img
              className="img-product-carrito"
              src={imagen}
              alt="Imagen del producto"
            />
            <div className="info-item-carrito">
              <span>{titulo}</span>
              <div id="cantidad-mobile">
                <Button
                  variant="outlined"
                  size="small"
                  style={{ color: "white", borderColor: "white" }}
                  onClick={() => handleButtonClick(index, "restar")}
                >
                  -
                </Button>
                <Typography variant="h6" gutterBottom className="px-2">
                  {cantidad}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  style={{ color: "white", borderColor: "white" }}
                  onClick={() => handleButtonClick(index, "suma")}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item encabezado">
          <div className="title-product-cantidad" id="cantidad-desktop">
            <div className="d-flex">
              <Button
                variant="outlined"
                size="small"
                style={{ color: "white", borderColor: "white" }}
                onClick={() => handleButtonClick(index, "restar")}
              >
                -
              </Button>
              <Typography variant="h6" gutterBottom className="px-2">
                {cantidad}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                style={{ color: "white", borderColor: "white" }}
                onClick={() => handleButtonClick(index, "suma")}
              >
                +
              </Button>
            </div>
          </div>
        </div>
        <div className="grid-item encabezado">
          <div className="title-product-precio">
            <span>${precio}</span>
          </div>
        </div>
        <div className="grid-item encabezado">
          <div className="title-product-subtotal">
            <motion.span
              initial={{ fontSize: "1rem" }}
              animate={{ fontSize: expand ? "2rem" : "1rem" }}
              transition={{ duration: 0.3 }}
            >
              ${precio * cantidad}
            </motion.span>
          </div>
        </div>
        <div className="grid-item">
          <div className="title-product-trash">
            <DeleteForeverIcon
              onClick={() => deleteItemCarrito(index)}
              style={{ cursor: "pointer" }}
            />
            <motion.span
              initial={{ fontSize: "1rem" }}
              animate={{ fontSize: expand ? "2rem" : "1rem" }}
              transition={{ duration: 0.3 }}
            >
              ${precio * cantidad}
            </motion.span>
          </div>
        </div>
      </div>
    </>
  );
}
