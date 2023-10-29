/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from "../components/CardSlider";
import Typography from "@mui/material/Typography";
import { useEffect, useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import "../css/CardSlider.css";

export default function SliderProduct({ nombreCategoria }) {
  const { listaProductos, sliderData, productosFiltrados } =
    useContext(ProductosContext);
  useEffect(() => {
    sliderData(nombreCategoria);
  }, [listaProductos, nombreCategoria]);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
    <div
      className="pt-5 pb-5"
      style={{
        background: "radial-gradient(rgb(104 108 46), #121e0b)",
        color: "#ffffffc7",
      }}
    >
      <div className="slider-responsive">
        <Typography
          variant="h5"
          gutterBottom
          className="pl-2 pb-2"
          style={{
            paddingLeft: "1rem",
            fontSize: "3rem",
            fontFamily: "FuenteLogo",
            textTransform: "capitalize",
          }}
        >
          {nombreCategoria}
        </Typography>
        <Slider {...settings}>
          {productosFiltrados.map((producto, index) => (
            <div key={index} className="mr-5 d-flex justify-content-center">
              <CardSlider producto={producto} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
