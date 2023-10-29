import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";
import { OrdenContext } from "../context/OrdenContext";

export default function TableCheckout() {
  const { carrito, total } = useContext(CarritoContext);
  const { selectedPago, selectedEnvio } = useContext(OrdenContext);

  return (
    <>
      <Container maxWidth="sm">
        <TableContainer
          component={Paper}
          sx={{ background: "rgb(255 255 255 / 36%)" }}
        >
          <Table aria-label="simple table" sx={{ color: "white" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }}>
                  Productos ({carrito.length})
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  ${total}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedPago !== "" && (
                <TableRow>
                  <TableCell sx={{ color: "white" }}>
                    Medio de pago ({selectedPago})
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    {"%0"}
                  </TableCell>
                </TableRow>
              )}
              {selectedEnvio !== "" && (
                <TableRow>
                  <TableCell sx={{ color: "white" }}>
                    Despacho ({selectedEnvio})
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="right">
                    ${"0"}
                  </TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell sx={{ color: "white" }}>TOTAL</TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  ${total}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
