import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { ProductosContext } from "../context/ProductosContext";
import SliderProduct from "../components/SliderProduct";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

import "../css/Producto.css";
import ResponsiveAppBar from "../components/NavBar";
import FormTalles from "../components/FormTalles.jsx";

export default function Producto() {
  const { createOrden } = useContext(CarritoContext);
  const { buscarProductoPorId } = useContext(ProductosContext);
  const params = useParams();
  const [producto, setProducto] = useState({});
  const [talle, settalle] = useState();
  const [productoKey, setProductoKey] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerProducto = async () => {
      const productoEncontrado = await buscarProductoPorId(params.id);
      if (productoEncontrado) {
        setProducto(productoEncontrado);
        setProductoKey((prevKey) => prevKey + 1);
        window.scrollTo(0, 0);
      } else {
        console.log("Producto no encontrado");
      }
    };

    obtenerProducto();
  }, [params]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  const categoria = producto.categoria;
  const nombreCategoria = categoria ? categoria.nombre : "";
  const imagen = producto.imagen;
  const arrayimagen = imagen ? imagen : [];
  const titulo = producto.nombre;
  const objectStock = producto.stock;
  const precio = producto.precio;

  const valuesStock = objectStock ? Object.values(objectStock) : [];
  const keysStock = objectStock ? Object.keys(objectStock) : [];

  const handleOnClick = (e) => {
    e.preventDefault();
    if (nombreCategoria === "buzos" || nombreCategoria === "remeras") {
      if (!talle) {
        settalle(false);
      } else {
        createOrden(params.id, talle, imagen, titulo, precio);
        navigate("/");
      }
    } else {
      createOrden(params.id, talle, imagen, titulo, precio);
    }
  };
  return (
    <>
      <ResponsiveAppBar />
      <motion.div
        className=" "
        id="Pantalla-product"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className=" product ">
          <div className="row" id="container-info">
            <div className="info" id="info-mobile">
              <span>{producto.nombre}</span>
              <span className="tag tag-purple">{nombreCategoria}</span>
            </div>
            <div className=" width-mobile layout-img col-md-10 col-lg-5">
              <div className="contenedor-imagen">
                <Slider {...settings}>
                  {arrayimagen.map((image, index) => (
                    <div key={index} className="d-flex justify-content-center">
                      <img src={image} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className=" width-mobile layout-info col-md-10 col-lg-5">
              <div className="contenedor-info-product ">
                <div className="info" id="info-desktop">
                  <span>{producto.nombre}</span>
                  <span className="tag tag-purple">{nombreCategoria}</span>
                </div>
                <h1 className="precio">${producto.precio}</h1>
                <h6 className="" style={{ color: "#ffffffc7" }}>
                  {producto.descripcion}
                </h6>
              </div>
              <div className="form-stock-color-talle">
                {nombreCategoria === "buzos" ||
                nombreCategoria === "remeras" ? (
                  <div className="container-talle">
                    <div className="talle input-box" id="talle">
                      {valuesStock.map(
                        (item, index) =>
                          item !== null &&
                          keysStock[index] !== "id" && (
                            <FormTalles
                              key={index}
                              item={item}
                              keysStock={keysStock[index]}
                              settalle={settalle}
                            />
                          )
                      )}
                      {talle === false && <p>Por favor selecciona talle</p>}
                    </div>
                  </div>
                ) : null}
                <div className="container-botones">
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg "
                    onClick={handleOnClick}
                  >
                    Agregar a Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row sugerencias">
          <div id="slick-intereses">
            <SliderProduct
              key={productoKey}
              nombreCategoria={nombreCategoria}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
