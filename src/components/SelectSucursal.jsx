/* eslint-disable react/prop-types */
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSucursal({ onChange }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setAge(selectedValue);
    onChange(selectedValue);
  };

  return (
    <FormControl variant="filled" className="formStyle">
      <InputLabel id="demo-simple-select-filled-label" sx={{ color: "white" }}>
        Sucursal
      </InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={age}
        onChange={handleChange}
        sx={{ color: "white" }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Av Simo Perez 6544, Catan</MenuItem>
        <MenuItem value={20}>Av Luro 6576, Laferrere</MenuItem>
        <MenuItem value={30}>Almafuerte 3421, San Justo</MenuItem>
      </Select>
    </FormControl>
  );
}
