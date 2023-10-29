import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import { Link } from "react-router-dom";

export default function Filtros() {
  const { categorias } = useContext(ProductosContext);

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Categorias
          </ListSubheader>
        }
      >
        {categorias.map((item, index) => (
          <ListItem disablePadding key={index}>
            <Link
              to={`/listaProductos/${item.nombre}`}
              style={{ textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemText primary={item.nombre} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
