import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import "../css/Checkout.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormDespacho from "../components/FormDespacho";
import FormPago from "../components/FormPago";
import FormContact from "../components/FormContact";
import { useContext } from "react";

import TableCheckout from "../components/TableCheckout";
import { OrdenContext } from "../context/OrdenContext";
import ResumeCheckout from "../components/ResumeCheckout";

const steps = ["Datos de contacto", "Metodo de pago", "Metodo de entrega"];

export default function Checkout() {
  const {
    handleDirFieldChange,
    handleStreetFieldChange,
    handleTelFieldChange,
    handleNameFieldChange,
    handlePagoChange,
    handleEnvioChange,
    handleSucuChange,
    isStepSkipped,
    handleNext,
    handleBack,
    activeStep,
    nameFieldValue,
    telFieldValue,
    selectedPago,
    selectedEnvio,
    dirFieldValue,
    streetFieldValue,
    mostrarSpinner,
    semaforo,
  } = useContext(OrdenContext);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
    },
    exit: {
      x: "-100vh",
      transition: { ease: "easyInOut" },
    },
  };
  return (
    <div
      style={{
        background: "radial-gradient(rgb(104 108 46), #121e0b)",
        height: "100vh",
      }}
    >
      <div className="container">
        <Box sx={{ width: "100%", height: "100%" }}>
          <Stepper activeStep={activeStep} className="pt-5 pb-5">
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps} style={{ color: "white" }}>
                  <StepLabel
                    {...labelProps}
                    style={{ color: "white", background: "#8bc34a5e" }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              {mostrarSpinner ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  {semaforo ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <ResumeCheckout semaforo={{ semaforo }} />
                    </motion.div>
                  ) : (
                    <TableCheckout values={{ selectedPago, selectedEnvio }} />
                  )}
                </>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="container  checkout">
                <div className="row d-flex flex-row">
                  <div className=" formCheckout col-7">
                    <AnimatePresence>
                      {activeStep === 0 && (
                        <motion.div
                          key="form1"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          exit={{ x: "-100vh" }}
                        >
                          <FormContact
                            value={{ nameFieldValue, telFieldValue }}
                            onChange={{
                              handleNameFieldChange,
                              handleTelFieldChange,
                            }}
                            className="FormStep"
                          />
                        </motion.div>
                      )}
                      {activeStep === 1 && (
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          exit={{ x: "-100vh" }}
                        >
                          <FormPago
                            selectedPago={selectedPago}
                            onPagoChange={handlePagoChange}
                            className="FormStep"
                          />
                        </motion.div>
                      )}
                      {activeStep === 2 && (
                        <motion.div
                          key="form1"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          exit={{ x: "-100vh" }}
                        >
                          <FormDespacho
                            selectedEnvio={selectedEnvio}
                            onEnvioChange={handleEnvioChange}
                            dirFieldValue={dirFieldValue}
                            streetFieldValue={streetFieldValue}
                            handleDirFieldChange={handleDirFieldChange}
                            handleStreetFieldChange={handleStreetFieldChange}
                            handleSucuChange={handleSucuChange}
                            className="FormStep"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        pt: 2,
                        justifyContent: "flex-end",
                      }}
                      className="botonesCheckout"
                    >
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{
                          mr: 1,
                          width: "25%",
                          backgroundColor: "#8bc34a",
                          border: "solid",
                          borderColor: "black",
                          color: "white",
                        }}
                      >
                        Back
                      </Button>

                      {activeStep === steps.length - 1 ? (
                        <Button onClick={handleNext}>Finalizar</Button>
                      ) : (
                        <Button
                          onClick={handleNext}
                          style={{
                            width: "25%",
                            backgroundColor: "#8bc34a",
                            border: "solid",
                            borderColor: "black",
                            color: "white",
                          }}
                        >
                          Siguiente
                        </Button>
                      )}
                    </Box>
                  </div>
                  <div
                    className=" TableCheckout col-5"
                    style={{ background: "rgb(255 255 255 / 36%)" }}
                  >
                    <TableCheckout values={{ selectedPago, selectedEnvio }} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </Box>
      </div>
    </div>
  );
}
