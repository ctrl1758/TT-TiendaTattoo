import ResponsiveAppBar from "../components/NavBar";
import SliderNovedades from "../components/SliderNovedades";
import BannerCategoria from "../components/BannerCategoria";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../css/Landing.css";
import HeroOverlay from "../components/heroOverlay";
import { Container } from "@mui/material";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Galeria from "../components/Galeria";
import Footer from "../components/Footer";
import jesus from "../assets/jesus-bailarin.gif";
import SliderProduct from "../components/SliderProduct";

export default function Landing() {
  return (
    <>
      <ResponsiveAppBar currentPage={"landing"} />
      <HeroOverlay />
      <SliderProduct nombreCategoria={"parafernaria"} />
      <SliderNovedades />
      <Box
        sx={{
          display: "flex",
          paddingTop: "10rem",
          paddingBottom: "10rem",
          textAlign: "center",
          color: "#ffffffc7;",
          flexDirection: "column",
          justifyContent: "center",
          background: "radial-gradient(rgb(104 108 46), #121e0b)",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          style={{ fontFamily: "FuenteLogo" }}
        >
          👹 Tatuate
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          style={{ fontFamily: "FuenteLogo" }}
        >
          o
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            style={{ fontFamily: "FuenteLogo" }}
          >
            Matate
          </Typography>
          <img
            src={jesus}
            alt=""
            style={{ width: "4rem", borderRadius: "30px", marginLeft: "20px" }}
          />
        </div>
      </Box>
      <BannerCategoria />
      <div
        className="container-fluid"
        style={{
          background: "radial-gradient(rgb(104 108 46), #121e0b)",
          color: "#ffffffab",
        }}
      >
        <Container style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                borderRight: "solid",
              }}
              className="grid-responsive"
            >
              <LocalShippingOutlinedIcon style={{ fontSize: "xxx-large" }} />
              <Typography variant="h4" gutterBottom>
                Envios
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                borderRight: "solid",
              }}
              className="grid-responsive"
            >
              <PaymentsOutlinedIcon style={{ fontSize: "xxx-large" }} />
              <Typography variant="h4" gutterBottom>
                Pagos
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                borderRight: "solid",
              }}
              className="grid-responsive"
            >
              <LocationOnOutlinedIcon style={{ fontSize: "xxx-large" }} />
              <Typography variant="h4" gutterBottom>
                Retiros
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{ display: "flex", justifyContent: "space-evenly" }}
              className="grid-responsive"
            >
              <ChangeCircleOutlinedIcon style={{ fontSize: "xxx-large" }} />
              <Typography variant="h4" gutterBottom>
                Cambios
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/*       <Galeria /> */}
      <Footer></Footer>
    </>
  );
}
