/* eslint-disable react/prop-types */
import { createContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useState, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { agregarOrden } from "../firebase.js";
export const OrdenContext = createContext();

export function OrdenContextProvider(props) {
  const [mostrarSpinner, setMostrarSpinner] = useState(false);
  const [orden, setOrden] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [semaforo, setSemaforo] = useState("");
  const [selectedPago, setSelectedPago] = useState("");
  const [nameFieldValue, setNameFieldValue] = useState("");
  const [telFieldValue, setTelFieldValue] = useState("");
  const [selectedEnvio, setSelectedEnvio] = useState("");
  const [dirFieldValue, setDirFieldValue] = useState("");
  const [streetFieldValue, setStreetFieldValue] = useState("");
  const [sucuFieldValue, setSucuFieldValue] = useState("");

  const { carrito, total } = useContext(CarritoContext);

  const handleDirFieldChange = (event) => {
    setDirFieldValue(event.target.value);
  };
  const handleStreetFieldChange = (event) => {
    setStreetFieldValue(event.target.value);
  };
  const handleTelFieldChange = (event) => {
    setTelFieldValue(event.target.value);
  };
  const handleNameFieldChange = (event) => {
    setNameFieldValue(event.target.value);
  };
  const handlePagoChange = (value) => {
    setSelectedPago(value);
  };
  const handleEnvioChange = (value) => {
    if (value == "envio") {
      setSucuFieldValue("");
    } else {
      setDirFieldValue("");
      setStreetFieldValue("");
    }
    setSelectedEnvio(value);
  };
  const handleSucuChange = (value) => {
    setSucuFieldValue(value);
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep == 0) {
      if (nameFieldValue != "") {
        if (telFieldValue != "") {
          const whatsappRegex = /^11\d{8}$/;
          if (whatsappRegex.test(telFieldValue)) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          } else {
            console.log(
              "el numero debe tener 10 digitos y empezar con 11,ejemplo: 1160236023"
            );
          }
        } else {
          console.log("falta tel");
          setTelFieldValue("");
        }
      } else {
        console.log("falta name");
        setNameFieldValue("");
      }
    }
    if (activeStep === 1) {
      if (selectedPago != "") {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        console.log("falta pago");
        setSelectedPago("");
      }
    }
    if (activeStep === 2) {
      if (selectedEnvio === "envio") {
        if (dirFieldValue != "") {
          if (streetFieldValue) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            handleReset();
          }
        }
      }
      if (selectedEnvio === "retiro") {
        if (sucuFieldValue != "") {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          handleReset();
        } else {
          console.log("ingresa sucu");
        }
      } else {
        console.log("ingresa despacho");
        setSucuFieldValue("");
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  async function handleReset() {
    setMostrarSpinner(true);
    const fechaActual = new Date();

    // Obtener el año, el mes y el día
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que sumamos 1
    const dia = fechaActual.getDate();
    const pedido = {
      pago: selectedPago,
      contacto: {
        nombre: nameFieldValue,
        telefono: "+54" + telFieldValue,
        correo: "usuario@mail.com",
      },
      domicilio: {
        calle: dirFieldValue,
        entrecalles: streetFieldValue,
        localidad: "localidad",
      },
      sucursal: sucuFieldValue,
      carrito: carrito,
      total: total,
      fecha_pedido: `${año}-${mes}-${dia}`,
    };
    try {
      const ordenId = await agregarOrden(pedido);
      console.log(ordenId);
      setSemaforo(ordenId);
      setOrden(pedido);
    } catch (error) {
      setSemaforo(false);
      console.error(error);
      // Maneja el error de la solicitud
    } finally {
      setMostrarSpinner(false);
    }
  }

  return (
    <>
      <OrdenContext.Provider
        value={{
          setActiveStep,
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
          handleReset,
          activeStep,
          nameFieldValue,
          telFieldValue,
          selectedPago,
          selectedEnvio,
          dirFieldValue,
          streetFieldValue,
          mostrarSpinner,
          semaforo,
          orden,
        }}
      >
        {props.children}
      </OrdenContext.Provider>
    </>
  );
}
