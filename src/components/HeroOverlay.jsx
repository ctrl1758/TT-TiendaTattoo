import "../css/heroOverlay.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Carrusel from "./CarruselAuto";
import { motion } from "framer-motion";
import SimpleSlider from "./SliderTattoos";
import SliderNovedades from "./SliderNovedades";

export default function HeroOverlay() {
  return (
    <section id="sectionHero">
      <Carrusel />
      <div className="overlay">
        <div className="d-flex container-titulos flex-column">
          <motion.h5
            className="title headline"
            style={{ fontFamily: "FuenteLogo" }}
            animate={{
              scale: [1, 1.5, 1.5, 0, 1],
              rotate: [0, 0, 0, 360, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            German Sirio Tattoo
          </motion.h5>
          <h5
            className="sub-title headline"
            style={{ fontFamily: "FuenteLogo" }}
          >
            Estudio Tattoo & Piercing
          </h5>
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
