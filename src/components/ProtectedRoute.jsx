import { Navigate } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";

export default function ProtectedRoute({ children }) {
  const { carrito } = useContext(CarritoContext);
  if (carrito.length == 0) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
}
