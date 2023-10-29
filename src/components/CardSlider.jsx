/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../css/CardSlider.css";
import { Link } from "react-router-dom";

export default function CardSlider({ producto }) {
  return (
    <Link to={`/Producto/${producto.id}`}>
      <Card
        sx={{
          maxWidth: 250,
          width: "300px",
          borderRadius: "2rem",
          background: "#000000",
          color: "white",
          border: "2px solid white",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={producto.imagen[0]}
            alt="green iguana"
            className="h-30vh"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ${producto.precio}
            </Typography>
            <Typography variant="body2">{producto.nombre}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
