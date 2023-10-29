/* eslint-disable react/prop-types */
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import SelectDomicilio from "../components/SelectDomicilio";
import SelectSucursal from "../components/SelectSucursal";

export default function FormDespacho({
  selectedEnvio,
  onEnvioChange,
  dirFieldValue,
  streetFieldValue,
  handleDirFieldChange,
  handleStreetFieldChange,
  handleSucuChange,
}) {
  const handleChange = (event) => {
    onEnvioChange(event.target.value);
  };

  return (
    <>
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
          value={selectedEnvio}
          onChange={handleChange}
          className="formStyle"
          sx={{ color: "white" }}
        >
          <FormControlLabel
            value="envio"
            control={<Radio />}
            label="Envio a domicilio"
            sx={{ color: "white" }}
          />
          <FormControlLabel
            value="retiro"
            control={<Radio />}
            label="Retiro por sucursal"
            sx={{ color: "white" }}
          />
        </RadioGroup>
      </FormControl>
      {selectedEnvio === "envio" && (
        <SelectDomicilio
          value={{ dirFieldValue, streetFieldValue }}
          onChange={{
            handleDirFieldChange,
            handleStreetFieldChange,
          }}
        />
      )}
      {selectedEnvio === "retiro" && (
        <SelectSucursal onChange={handleSucuChange} />
      )}
    </>
  );
}
