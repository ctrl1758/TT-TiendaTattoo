/* eslint-disable react/prop-types */

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonIcon from "@mui/icons-material/Person";
import "../css/Checkout.css";

export default function FormContact({ value, onChange }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      className="formStyle"
    >
      <TextField
        id="filled-basic"
        label="Nombre"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ color: "white" }}>
              <PersonIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
        value={value.nameFieldValue}
        onChange={onChange.handleNameFieldChange}
        color="primary"
      />
      <TextField
        id="filled-basic"
        label="Telefono"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ color: "white" }}>
              <WhatsAppIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
        value={value.telFieldValue}
        onChange={onChange.handleTelFieldChange}
        sx={{ color: "white" }}
        color="primary"
      />
    </Box>
  );
}
