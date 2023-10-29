/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SignpostIcon from "@mui/icons-material/Signpost";
import PlaceIcon from "@mui/icons-material/Place";

export default function SelectDomicilio({ value, onChange }) {
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
        label="Direccion"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: "white" }}>
              <PlaceIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
        value={value.dirFieldValue}
        onChange={onChange.handleDirFieldChange}
      />
      <TextField
        id="filled-basic"
        label="Entrecalles"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: "white" }}>
              <SignpostIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
        value={value.streetFieldValue}
        onChange={onChange.handleStreetFieldChange}
      />
    </Box>
  );
}
