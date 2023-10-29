import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  doc,
  getDoc,
  setDoc,
  orderBy,
  limit,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-3ZV3vXan1HuQNqmD5LHDvNDpWWM0UJM",
  authDomain: "tiendagstatoo.firebaseapp.com",
  projectId: "tiendagstatoo",
  storageBucket: "tiendagstatoo.appspot.com",
  messagingSenderId: "547811484727",
  appId: "1:547811484727:web:8f1761bcfaa1df3b384bb2",
  measurementId: "G-NJBGE9H9LF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProductos = async () =>
  await getDocs(collection(db, "productos"));

export const getGalery = async () => await getDocs(collection(db, "galeria"));

export const getUsuarios = async () => {
  const docRef = doc(db, "usuarios", "visitas");
  const docSnap = await getDoc(docRef);
  let visitas = docSnap.data();
  setDoc(docRef, { cantidad: parseInt(visitas.cantidad + 1) }, { merge: true });
  return parseInt(visitas.cantidad + 1);
};
export const getCategorias = () => getDocs(collection(db, "categorias"));

export async function agregarOrden(dati) {
  /* const newOrderRef = await doc(collection(db, "ordenes"));
  await addDoc(newOrderRef, data); */

  const newOrderRef = await addDoc(collection(db, "ordenes"), dati);

  const ordenID = newOrderRef.id;
  return ordenID;
}

export {
  collection,
  db,
  query,
  where,
  doc,
  getDoc,
  getDocs,
  setDoc,
  orderBy,
  limit,
};
