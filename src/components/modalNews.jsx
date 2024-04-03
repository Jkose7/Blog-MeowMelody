import "../modalNewsStyles.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { useNewContext } from "../providers/NewProviter";



export function ModalNews({cerrar}) {
  const datos = useNewContext()
  const currentID = datos[datos.length - 1].id

  return (
    <div className="modal text-white dark:text-black ">
      <div className="modal-info dark:bg-primary-color">
        <h1 className="text text-center font-titulos text-4xl">La noticia se creo de manera correcta</h1>
        <div className="buttons ">
          <Link className="home text-center border-primary-color dark:text-secborder-second-color dark:border-second-color dark:hover:bg-second-color dark:hover:text-white" to="/">
            Inicio
          </Link>
          <Link to={`/news/${currentID}`} className="news text-center border-primary-color dark:text-secborder-second-color dark:border-second-color dark:hover:bg-second-color 
          ">Ver noticia
          </Link>
          <button className="newnews border-primary-color dark:text-secborder-second-color dark:border-second-color dark:hover:bg-second-color dark:hover:text-white" onClick={cerrar}>Crear noticia</button>
        </div>
      </div>
    </div>
  );
}

ModalNews.propTypes = {
    cerrar: PropTypes.any,
  }
