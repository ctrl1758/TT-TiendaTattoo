import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout.jsx";
import Landing from "./pages/Landing.jsx";
import ListaProductos from "./pages/ListaProductos.jsx";
import Producto from "./pages/Producto.jsx";
import Carrito from "./pages/carrito.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/Producto/:id" element={<Producto />} />
      <Route path="/ListaProductos/:categoria?" element={<ListaProductos />} />
      <Route
        path="/Checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="/Carrito" element={<Carrito />} />
    </Routes>
  );
}

export default App;
