import "../modalStyles.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'



export function ModalNews({cerrar, id}) {
  return (
    <div className="modal text-white dark:text-black ">
      <div className="modal-info dark:bg-primary-color">
        <h1 className="text text-center font-titulos text-4xl">La noticia se creo de manera correcta</h1>
        <div className="buttons">
          <Link className="home text-center" to="/">
            Inicio
          </Link>
          <Link className="news text-center" to={`/news/${id}`}
          >Ver noticia
          </Link>
          <button className="newnews" onClick={cerrar}>Crear noticia</button>
        </div>
      </div>
    </div>
  );
}

ModalNews.propTypes = {
    cerrar: PropTypes.any,
    id : PropTypes.any
  }
