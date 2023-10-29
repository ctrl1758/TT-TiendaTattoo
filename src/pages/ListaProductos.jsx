import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import "../css/ListaProductos.css";
import ResponsiveAppBar from "../components/NavBar";
import Filtros from "../components/Filtros";
import SliderCategorias from "../components/SliderCategorias";
import { ProductosContext } from "../context/ProductosContext";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const ListaProductos = () => {
  const params = useParams();
  const {
    listaProductos,
    handleCategoriaClick,
    filtroSeleccionado,
    productosFiltrados,
    open,
    setOpen,
  } = useContext(ProductosContext);

  useEffect(() => {
    setOpen(true);
    window.scrollTo(0, 0);
    if (params.categoria) {
      handleCategoriaClick(params.categoria);
    } else {
      setTimeout(setOpen(false), 2000);
    }
  }, [params.categoria]);

  return (
    <>
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 100 }}>
        <ResponsiveAppBar />
        <div className="SliderCategorias">
          <SliderCategorias />
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => setOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div style={{ marginTop: "120px", zIndex: 1 }}>
        <div className="row pt-5">
          <div className="col-3 d-none d-md-block">
            <Filtros />
          </div>
          <div className="col-12 col-md-9">
            <div
              className="row row-cols-2 row-cols-md-4 g-4"
              id="lista-productos"
              style={{ paddingTop: "10px" }} // Ajusta el valor según tus necesidades
            >
              {(filtroSeleccionado === ""
                ? listaProductos
                : productosFiltrados
              ).map((item, index) => (
                <CardProduct
                  key={index}
                  nombre={item.nombre}
                  imagen={item.imagen}
                  precio={Number(item.precio)}
                  id={item.id}
                ></CardProduct>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaProductos;
