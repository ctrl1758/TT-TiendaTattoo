import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../css/heroOverlay.css";
import CustomSlide from "../components/CustomSlide";
import { collection, db, query, getDocs } from "../firebase.js";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SimpleSlider() {
  const [tattoosNovedades, setTattoosNovedades] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');

  async function sliderNovedades() {
    const novedadesRef = await collection(db, "galeria");
    const q = await query(novedadesRef);
    const querySnapshot = await getDocs(q);
    const dataArray = [];
    querySnapshot.forEach((doc) => {
      dataArray.push({ ...doc.data(), id: doc.id });
    });
    // Mezclar el array de forma aleatoria
    const shuffledArray = dataArray.sort(() => 0.5 - Math.random());
    // Tomar los primeros 15 elementos
    setTattoosNovedades(shuffledArray.slice(0, 15));
  }

  useEffect(() => {
    sliderNovedades();
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

  const CustomSlideWithHover = ({ tattoo, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'relative' }}
      >
        <div style={{ 
          filter: isHovered ? 'brightness(0.7)' : 'none',
          transition: 'filter 0.3s ease-in-out'
        }}>
          <CustomSlide index={index} tattoo={tattoo} />
        </div>
        <Button
          variant="contained"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '5px 15px',
            backgroundColor: '#c4d364',
            color: 'rgb(21, 23, 22)',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            opacity: isMobile || isHovered ? 1 : 0,
            transition: 'opacity .3s',
            fontFamily: "FuenteLogo",
            fontSize: '1.5rem',
            textTransform: 'capitalize',
          }}
        >
          Consultar
        </Button>
      </div>
    );
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
          <CustomSlideWithHover key={index} tattoo={tattoo} index={index} />
        ))}
      </Slider>
    </div>
  );
}
