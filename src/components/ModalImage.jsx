import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Fab from "@mui/material/Fab";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: "50px",
};

const ModalImage = ({ open, handleClose, selectedImage }) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <img
        src={selectedImage}
        alt="Selected"
        style={{ height: "75vh", borderRadius: "50px" }}
      />

      <Fab
        variant="extended"
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          color: "rgb(0 0 0)",
          backgroundColor: "rgb(255 255 255 / 80%)",
        }}
      >
        Reservar
      </Fab>
    </Box>
  </Modal>
);

export default ModalImage;
