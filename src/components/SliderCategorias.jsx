/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import { Link } from "react-router-dom";
export default function SliderCategorias() {
  const { categorias } = useContext(ProductosContext);

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="pt-4 pb-4" style={{ backgroundColor: "#e2e8f0" }}>
      <Slider {...settings}>
        {categorias.map((categoria, index) => (
          <div className="px-1" key={index}>
            <Link to={`/listaProductos/${categoria.nombre}`}>
              <Button
                variant="outlined"
                categoria={categoria.nombre}
                style={{
                  border: "solid rgb(255 0 0)",
                  borderColor: "#000000",
                  marginRight: "10px",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "rgb(245 160 160)",
                  color: "black",
                }}
              >
                {categoria.nombre}
              </Button>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
