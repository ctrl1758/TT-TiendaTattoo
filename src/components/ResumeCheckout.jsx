import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { OrdenContext } from "../context/OrdenContext";
import { useContext } from "react";

export default function ResumeCheckout() {
  const navigate = useNavigate();
  const { vaciar } = useContext(CarritoContext);
  const { setActiveStep, semaforo, orden } = useContext(OrdenContext);
  const handleRedirect = () => {
    setActiveStep(0);
    vaciar();
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "60vh",
        alignItems: "center",
        backgroundColor: "green",
        flexDirection: "column",
        justifyContent: "space-evenly",
        borderRadius: "3rem",
      }}
    >
      <div style={{ flexDirection: "column" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: "white", padding: "1rem" }}
        >
          Pedido registrado(ID{semaforo})
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "white", margin: "2rem" }}
        >
          Un vendedor se pondra en contacto con vos para coordinar el pago y la
          entrega del pedido.
        </Typography>
      </div>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => handleRedirect()}>
          Salir
        </Button>
      </Stack>
    </Box>
  );
}
