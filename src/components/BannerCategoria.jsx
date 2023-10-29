import "../css/Landing.css";
import { useNavigate } from "react-router-dom";
export default function BannerCategoria() {
  const navigate = useNavigate();
  const navegarCategoria = () => navigate("/listaProductos");
  return (
    <div className="categorias-contain container-fluid text-center box">
      <div className="row" style={{ justifyContent: "space-evenly" }}>
        <div
          className="col-sm-3 category "
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/564x/81/6f/47/816f477e58e49da14ce2845a6f6a94eb.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
          }}
          onClick={navegarCategoria}
        >
          <div className="text-subtitle">
            <h1 className="encabezado-text">New-In!</h1>
          </div>
        </div>
        <div
          className="col-sm-3 category "
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/736x/1e/0c/5c/1e0c5c515701b8641285bd26905d7d39.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
          }}
          onClick={navegarCategoria}
        >
          <div className="text-subtitle">
            <h1 className="encabezado-text">Sale</h1>
          </div>
        </div>
        <div
          className="col-sm-3 category "
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/564x/ad/e7/82/ade782a2d5bb846e2eafdb3d4003a0a1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
          }}
          onClick={navegarCategoria}
        >
          <div className="text-subtitle">
            <h1 className="encabezado-text">Temporada</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
