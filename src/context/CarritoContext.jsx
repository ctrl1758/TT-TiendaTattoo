/* eslint-disable react/prop-types */
import { createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CarritoContext = createContext();

export function CarritoContextProvider(props) {
  const [carrito, setcarrito] = useState([]);
  const navigate = useNavigate();

  function createOrden(id, talle, imagen, titulo, precio) {
    toast.success(`¡${titulo}Se agrego a tu carrito!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setcarrito([
      ...carrito,
      {
        id: id,
        talle: talle !== undefined ? talle : "",
        imagen: imagen,
        titulo: titulo,
        precio: precio,
        cantidad: 1,
      },
    ]);
    navigate("/listaProductos");
  }

  function deleteItemCarrito(index) {
    const newArray = [...carrito];
    newArray.splice(index, 1);
    setcarrito(newArray);
  }
  function sumar(index) {
    const newArray = [...carrito];
    newArray[index].cantidad += 1;
    setcarrito(newArray);
  }

  function restar(index) {
    const newArray = [...carrito];
    if (newArray[index].cantidad > 1) {
      newArray[index].cantidad -= 1;
      setcarrito(newArray);
    } else {
      deleteItemCarrito(index);
    }
  }

  function vaciar() {
    setcarrito([]);
  }

  const total = carrito.reduce((acumulador, item) => {
    return acumulador + parseInt(item.precio) * item.cantidad;
  }, 0);
  return (
    <>
      <CarritoContext.Provider
        value={{
          createOrden,
          carrito,
          total,
          deleteItemCarrito,
          restar,
          sumar,
          vaciar,
        }}
      >
        {props.children}
      </CarritoContext.Provider>
    </>
  );
}
