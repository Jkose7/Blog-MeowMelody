import "../modalNewsStyles.css";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useCreateNewContext } from "../providers/NewProviter";
import { useNewContext } from "../providers/NewProviter";


export function ModalDeleteNews({cerrar}) {
    const { id } = useParams();
    const datos = useNewContext();

    const newsInfo = datos.find((info) => {
        if (info.id == id) {
          return info;
        }
      });

    const { deleteNews } = useCreateNewContext();

  return (
    <div className="modal text-white dark:text-black ">
      <div className="modal-info dark:bg-primary-color">
        <h1 className="text text-center font-titulos text-4xl">
          ¿Desea borrar la noticia?
        </h1>
        <div className="buttons ">
          <Link
            className="home text-center border-primary-color  
            dark:border-second-color dark:hover:bg-second-color dark:text-second-color dark:hover:text-white"
            to="/"
            onClick={() => deleteNews(newsInfo.id)}
          >
            Si
          </Link>
          <button
            className="news text-center border-primary-color dark:text-second-color dark:border-second-color dark:hover:bg-second-color "
            onClick={cerrar}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

ModalDeleteNews.propTypes = {
  cerrar: PropTypes.any,
};
