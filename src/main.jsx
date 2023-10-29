import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CarritoContextProvider } from "./context/CarritoContext.jsx";
import { ProductosContextProvider } from "./context/ProductosContext.jsx";
import { OrdenContextProvider } from "./context/OrdenContext.jsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ProductosContextProvider>
        <CarritoContextProvider>
          <OrdenContextProvider>
            <App />
          </OrdenContextProvider>
        </CarritoContextProvider>
      </ProductosContextProvider>
    </HashRouter>
  </React.StrictMode>
);
