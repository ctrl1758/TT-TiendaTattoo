/* eslint-disable react/prop-types */
import { createContext } from "react";
import { getProductos, getCategorias, getUsuarios } from "../firebase.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import {
  collection,
  db,
  query,
  where,
  doc,
  getDoc,
  getDocs,
} from "../firebase.js";
/* import clienteAxios from "../config/clienteAxios"; */

export const ProductosContext = createContext();

export function ProductosContextProvider(props) {
  const [open, setOpen] = useState(false);
  const [listaProductos, setListaProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const [filtroSeleccionado, setFiltroSeleccionado] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [visitas, setVisitas] = useState();

  const getProducts = async () => {
    const querySnapshot = await getProductos();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setListaProductos(docs);
  };
  const getCate = async () => {
    const querySnapshot = await getCategorias();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setCategorias(docs);
    // });
  };

  const getUsers = async () => {
    let docs = await getUsuarios();
    setVisitas(docs);

    // });
  };
  useEffect(() => {
    getProducts();
    getCate();
    getUsers();
  }, []);

  /* useEffect(() => {
    async function fetchData() {
      try {
        const response = await clienteAxios("/productos");
        setListaProductos(
          response.data.sort(function () {
            return Math.random() - 0.5;
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await clienteAxios("/categorias");
        setCategorias(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []); */

  const buscarProductoPorId = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };
  function sliderData(categoria) {
    // Filtra los productos que coinciden con la categoría proporcionada
    const filtrados = listaProductos.filter(
      (producto) => producto.categoria.nombre === categoria
    );

    // Si hay al menos 5 productos en la categoría, selecciona 5 productos al azar
    if (filtrados.length >= 5) {
      const productosRandom = [];
      while (productosRandom.length < 5) {
        const randomIndex = Math.floor(Math.random() * filtrados.length);
        productosRandom.push(filtrados[randomIndex]);
        filtrados.splice(randomIndex, 1); // Evita duplicados
      }
      setProductosFiltrados(productosRandom);
    } else {
      // Si hay menos de 5 productos en la categoría, simplemente establece los productos filtrados
      setProductosFiltrados(filtrados);
    }
  }

  const handleCategoriaClick = async (categoria) => {
    /* const productosFiltrados = listaProductos.filter(
      (producto) => producto.categoria.nombre === categoria
    ); */

    const categoriasRef = collection(db, "productos");
    const query2 = query(
      categoriasRef,
      where("categoria.nombre", "==", categoria)
    );
    const querySnapshot = await getDocs(query2);

    const productosFiltradoss = [];
    querySnapshot.forEach((doc) => {
      productosFiltradoss.push({ ...doc.data(), id: doc.id });
    });
    setProductosFiltrados(productosFiltradoss);
    setFiltroSeleccionado(categoria);
    setTimeout(setOpen(false), 2000);
  };

  return (
    <>
      <ToastContainer />
      <ProductosContext.Provider
        value={{
          sliderData,
          productosFiltrados,
          listaProductos,
          handleCategoriaClick,
          filtroSeleccionado,
          categorias,
          buscarProductoPorId,
          open,
          setOpen,
          visitas,
        }}
      >
        {props.children}
      </ProductosContext.Provider>
    </>
  );
}
