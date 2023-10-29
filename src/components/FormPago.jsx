/* eslint-disable react/prop-types */
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../css/Checkout.css";

export default function FormPago({ selectedPago, onPagoChange }) {
  const handleChange = (event) => {
    onPagoChange(event.target.value);
  };

  return (
    <FormControl style={{ width: "100%" }}>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ color: "white" }}
      >
        Gender
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedPago}
        onChange={handleChange}
        className="formStyle"
        sx={{ color: "white" }}
      >
        <FormControlLabel
          value="efectivo"
          control={<Radio sx={{ color: "white" }} />}
          label="Efectivo"
          sx={{ color: "white" }}
        />
        <FormControlLabel
          value="mp"
          control={<Radio sx={{ color: "white" }} />}
          label="MercadoPago"
          sx={{ color: "white" }}
        />
      </RadioGroup>
    </FormControl>
  );
}
