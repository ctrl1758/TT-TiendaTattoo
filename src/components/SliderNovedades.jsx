/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from "../components/CardSlider";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import "../css/CardSlider.css";

import { collection, db, query, orderBy, limit, getDocs } from "../firebase.js";

export default function SliderNovedades() {
  const [productosNovedades, setProductosNovedades] = useState([]);

  async function sliderNovedades() {
    const novedadesRef = await collection(db, "productos");
    const q = await query(
      novedadesRef,
      orderBy("dateAddMod", "desc"),
      limit(10)
    );
    console.log("novedades", q);
    const querySnapshot = await getDocs(q);

    const dataArray = [];
    querySnapshot.forEach((doc) => {
      // doc.data() contiene los datos del documento
      dataArray.push({ ...doc.data(), id: doc.id });
    });
    setProductosNovedades(dataArray);
  }
  useEffect(() => {
    sliderNovedades();
  }, []);

  const settings = {
    className: "center",
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
          }}
        >
          Novedades:
        </Typography>
        <Slider {...settings}>
          {productosNovedades.map((producto, index) => (
            <div key={index} className="mr-5 d-flex justify-content-center">
              <CardSlider producto={producto} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
