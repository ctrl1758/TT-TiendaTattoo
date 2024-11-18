import "../css/heroOverlay.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Carrusel from "./CarruselAuto";
import { motion } from "framer-motion";
import SimpleSlider from "./SliderTattoos";
import SliderNovedades from "./SliderNovedades";
import frenteImg from "../assets/frente.jpg";
import sanJuan2023Img from "../assets/SanJuan2023.jpg";
import frente2Img from "../assets/frente2.jpg";
import banner from "../assets/banner.jpg";

// Importamos la fuente FuenteLogo
import "../font/CantaraGotica.ttf";

export default function HeroOverlay() {
  return (
    <section id="sectionHero">
      {/* <Carrusel /> */}
      <div className="overlay">
        {/* <div className="d-flex container-titulos flex-column">
          <h5
            className="title headline title-tattoo"
            style={{ fontFamily: "FuenteLogo" }}
          >
            German Sirio Tattoo
          </h5>
          <h5
            className="sub-title headline subtitle-tattoo"
            style={{ fontFamily: "FuenteLogo" }}
          >
            Estudio Tattoo &amp; Piercing
          </h5>
        </div> */}

        <div class="container">
          <div class="row  row-hero ">
            <div class="col-md-8 d-flex justify-content-center " style={{height: "90vh"}}>
              <img src={banner} class="" style={{height: "100%"}} alt="Imagen 1" />
            </div>
            <div class="col-md-4 ">
            <div className="d-flex container-titulos flex-column justify-content-around h-100">
          <h5
            className="title headline title-tattoo"
            style={{ fontFamily: "FuenteLogo" }}
          >
            German Sirio Tattoo
          </h5>
          <h5
            className="sub-title headline subtitle-tattoo"
            style={{ fontFamily: "FuenteLogo" }}
          >
            Estudio Tattoo &amp; Piercing
          </h5>
        </div>

            </div>
            
          </div>
        </div>
        <div class="container">
          <div class="row  row-estudio ">
            <div class="col responsive-estudio">
              <img src={frenteImg} class="fixed-height-image" alt="Imagen 1" />
            </div>
            <div class="col responsive-estudio">
              <img
                src={sanJuan2023Img}
                class="fixed-height-image"
                alt="Imagen 2"
              />
            </div>
            <div class="col responsive-estudio">
              <img src={frente2Img} class="fixed-height-image" alt="Imagen 3" />
            </div>
          </div>
        </div>
        <div className="novedades-tattoo container">
          <SimpleSlider />
        </div>
        {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to={"/listaproductos"}>
            <Button
              variant="contained"
              size="large"
              style={{
                borderRadius: "25px",
                background: "red",
                width: "30vh",
                border: "4px solid #000000",
              }}
            >
              TIENDA
            </Button>
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=5491144938080&text=Hola%20vengo%20de%20la%20Web.%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Tatoos"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="contained"
              size="large"
              style={{
                borderRadius: "25px",
                background: "red",
                width: "30vh",
                border: "4px solid #000000",
              }}
            >
              TATTOO
            </Button>
          </a>
        </div> */}
      </div>
    </section>
  );
}
