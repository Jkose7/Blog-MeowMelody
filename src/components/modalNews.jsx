import "../modalNewsStyles.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { useNewContext } from "../providers/NewProviter";



export function ModalNews({cerrar}) {
  const datos = useNewContext()
  const currentID = datos[datos.length - 1]?.id

  return (
    <div className="modal text-white dark:text-black ">
      <div className="modal-info dark:bg-primary-color minicel:h-[80%] minicel:w-[88%] celinter:h-[40%] sm:h-[40%] lg:w-[70%]">
        <h1 className="text text-center font-titulos text-sm minicel:text-lg celinter:text-2xl sm:text-3xl lg:text-4xl">La noticia se creo de manera correcta</h1>
        <div className="buttons ">
          <Link className="home text-center text-sm sm:text-xl minicel:p-1 celinter:p-2   
          border-primary-color dark:border-second-color dark:text-second-color 
          dark:hover:bg-second-color dark:hover:text-white" to="/">
            Inicio
          </Link>
          <Link to={`/news/${currentID}`} className="news text-center text-sm sm:text-xl  minicel:p-1 celinter:p-2
          border-primary-color dark:text-second-color dark:border-second-color 
          dark:hover:bg-second-color dark:hover:text-white
          ">Ver noticia
          </Link>
          <button className="newnews text-sm sm:text-xl minicel:p-1 celinter:p-2 
          border-primary-color dark:text-second-color dark:border-second-color 
          dark:hover:bg-second-color dark:hover:text-white" onClick={cerrar}>Crear noticia</button>
        </div>
      </div>
    </div>
  );
}

ModalNews.propTypes = {
    cerrar: PropTypes.any,
  }
