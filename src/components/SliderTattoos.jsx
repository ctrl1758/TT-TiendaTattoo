import React, { Component } from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "../css/heroOverlay.css";
import dofon from "../assets/dofon.jpg";
import CustomSlide from "../components/CustomSlide";
import { collection, db, query, orderBy, limit, getDocs } from "../firebase.js";
import Typography from "@mui/material/Typography";

export default function SimpleSlider() {
  const [tattoosNovedades, setTattoosNovedades] = useState([]);

  async function sliderNovedades() {
    const novedadesRef = await collection(db, "galeria");
    const q = await query(
      novedadesRef,
      orderBy("dateAddMod", "desc"),
      limit(16)
    );
    console.log("novedades", q);
    const querySnapshot = await getDocs(q);
    const dataArray = [];
    querySnapshot.forEach((doc) => {
      // doc.data() contiene los datos del documento
      dataArray.push({ ...doc.data(), id: doc.id });
    });
    setTattoosNovedades(dataArray);
  }
  useEffect(() => {
    sliderNovedades();
    console.log(tattoosNovedades);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ borderRadius: "21px" }}>
      <div className="encabezado-galeria">
        <Typography
          variant="h5"
          gutterBottom
          className="pl-2 pb-2"
          style={{
            paddingLeft: "1rem",
            fontSize: "3rem",
            fontFamily: "FuenteLogo",
            backgroundColor: "#151716",
            marginBottom: "0px",
            color: "#eaea92",
          }}
        >
          Galeria
        </Typography>
      </div>
      <Slider {...settings}>
        {tattoosNovedades.map((tattoo, index) => (
          <CustomSlide index={index} key={index} tattoo={tattoo} />
        ))}
      </Slider>
    </div>
  );
}
