/* eslint-disable react/prop-types */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { ProductosContext } from "../context/ProductosContext";
/* import jesus from "../assets/jesus-bailarin.gif"; */

const pages = ["Productos", "Galeria", "Nosotros"];

function ResponsiveAppBar({ currentPage }) {
  const { visitas } = useContext(ProductosContext);
  const { carrito } = useContext(CarritoContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    console.log("hh");
    setAnchorElNav(null);
  };

  const getPositionStyle = () => {
    if (currentPage === "landing") {
      return { position: "absolute", zIndex: "3000", background: "#f0ffff00" };
    } else {
      return {
        display: "flex",
        justifyContent: "center",
        background: "radial-gradient(rgb(104 108 46), #121e0b)",
      };
    }
  };

  const positionStyle = getPositionStyle();
  return (
    <AppBar position="static" style={positionStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ justifyContent: "flex-end" }}>
          {/* <Link
            to={"/"}
            style={{
              display: "flex",
              paddingTop: "1rem",
              paddingRight: "1rem",
            }}
          >
            <img
              src={jesus}
              alt=""
              style={{
                width: "2rem",
                borderRadius: "30px",
                marginLeft: "20px",
              }}
            />
            <Typography
              variant="h6"
              gutterBottom
              className="pl-2 pb-2"
              style={{
                fontFamily: "FuenteLogo",
              }}
            >
              Estudio Tattoo & Piercing
            </Typography>
          </Link> */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={"/listaproductos"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                productos
              </Button>
            </Link>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              galeria
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              nosotros
            </Button>
          </Box>
          <Typography
            variant="h6"
            gutterBottom
            className="pl-2 pb-2"
            style={{
              fontFamily: "FuenteLogo",
            }}
          >
            Visitante N°:{visitas}
          </Typography>
          <Link to={`/Carrito`}>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                style={{ color: "white" }}
              >
                <Badge badgeContent={carrito.length} color="error">
                  <LocalGroceryStoreIcon />
                </Badge>
              </IconButton>
            </Box>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
