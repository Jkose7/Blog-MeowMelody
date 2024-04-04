import { Link } from "react-router-dom";
import { RenderContent } from "../components/renderContent";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDownload } from "@fortawesome/free-solid-svg-icons";
import { ModalDeleteNews } from "../components/modalDeleteNews";

import { useFindNews } from "../hooks/useFindNews";
import { usePrevious } from "../hooks/usePreviousContent";
import { useNext } from "../hooks/useNextContent";
import { useChangeTheme } from "../hooks/iconChangeTheme";



export function ViewNews() {
  const { id, title, content, image, additionalContent, typeContent, fecha } = useFindNews()
  
  const nextId = useNext()
  const previousId = usePrevious()
  const iconColor = useChangeTheme()
  
  const [modalDelete, setModalDelete] = useState(false)

  const showModalDelete = () => {
    setModalDelete(!modalDelete)
  }

  return (
    <div className="flex flex-col gap-3 my-7 sm:max-h-[910px] minicel:min-h-[400px ] sm:min-h-[710px] overflow-hidden ">
      {modalDelete && <ModalDeleteNews cerrar={showModalDelete}></ModalDeleteNews>}
      <div className="flex items-center w-full">
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="sm"
            style={{ color: iconColor }}
          />
        </Link>
        <div className="w-full flex flex-col justify-center">
          <h1 className="font-titulos minicel:text-3xl sm:text-5xl font-semibold text-balance text-center mb-4 dark:text-primary-color">
            {title}
          </h1>
        </div>
        <p className="text-end font-text-alt dark:text-primary-color">{new Date(fecha).toLocaleDateString()}</p>
      </div>

      <div className="flex gap-3 w-1/2">
        <Link
          className="font-text-alt border-2 border-transparent bg-second-color text-white p-1 rounded-sm hover:border-second-color hover:bg-transparent 
        hover:text-second-color text-center dark:border-transparent dark:text-second-color dark:bg-primary-color 
        dark:hover:bg-transparent dark:hover:text-primary-color dark:hover:border-primary-color dark:hover:border-2
        transition-all duration-100 w-full"
          to={`/editNews/${id}`}
        >
          Editar
        </Link>
        <button
          to="/"
          className="font-text-alt border-2 border-transparent text-center bg-second-color text-white p-1 rounded-sm hover:border-second-color hover:bg-transparent hover:text-second-color dark:border-transparent dark:text-second-color dark:bg-primary-color 
        dark:hover:bg-transparent dark:hover:text-primary-color dark:hover:border-primary-color dark:hover:border-2
        transition-all duration-100 w-full"
          onClick={setModalDelete}
        >
          Eliminar
        </button>
      </div>

      <div className="w-full flex font-titulos gap-2 h-full dark:text-primary-color text-lg font-medium minicel:flex-col sm:flex-row" >
        <div
          className={`${image || additionalContent ? 'minicel:w-full sm:w-1/2' : 'hidden'} flex flex-col minicel:min-h-[150px] sm:min-h-[500px] border-2   border-black rounded-sm grayscale hover:grayscale-0 transition-all duration-500 max-h-[500px]
          dark:border-white`}
        >
          {image !== null && (
            <div
              className={`${(typeContent === "audio/mpeg" ||
                typeContent === "application/pdf")
                ? "h-"
                : "h-full "
                }w-full `}
            >
              <img
                src={image}
                className={`object-cover aspect-auto w-full max-h-[420px]  ${!additionalContent && 'sm:min-h-[500px]' }`}
                alt=""
              />
            </div>
          )}

          {additionalContent !== null && (
            <div
              className={`${image ? 'min-h-12 ' : 'h-full'} w-full flex`}
            >
              <RenderContent
                content={additionalContent}
                typeContent={typeContent}
              ></RenderContent>
              <a
                href={additionalContent}
                download
                className={`${typeContent === "audio/mpeg" ||
                  typeContent === "application/pdf"
                  ? "h-[12%]"
                  : "h-full"
                  } font-texto font-bold text-md ${typeContent === "application/pdf" && "absolute"} bottom-0 flex gap-2 text-second-color p-3 dark:text-primary-color`}
              >
                <FontAwesomeIcon
                  icon={faDownload}
                  size="xl"
                  style={{ color: "#1a1a1a" }}
                />
                Descargar
              </a>
            </div>
          )}

        </div>

        <div
          className={`${image !== null || additionalContent !== null ? "w-1/2" : "w-full"
            } flex-1  h-full w-full justify-center flex overflow-hidden max-h-[500px] min-h-[500px] overflow-y-scroll pr-5`}
        >
          <p className="text-balance text-justify break-words max-w-full ">
            {content}
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <Link
          to={`/news/${previousId}`}
          className="p-2 bg-second-color border-transparent border-2 text-primary-color text-center rounded-sm  hover:border-2
        hover:border-second-color hover:bg-transparent hover:text-second-color
        dark:boder-2 dark:border-transparent dark:bg-primary-color dark:text-second-color dark:hover:border-primary-color
        dark:hover:bg-transparent dark:hover:text-primary-color"
        >
          Anterior
        </Link>
        <Link
          to={`/news/${nextId}`}
          className="p-2 bg-second-color border-transparent border-2 text-primary-color text-center rounded-sm  hover:border-2
        hover:border-second-color hover:bg-transparent hover:text-second-color
        dark:boder-2 dark:border-transparent dark:bg-primary-color dark:text-second-color dark:hover:border-primary-color
        dark:hover:bg-transparent dark:hover:text-primary-color"
        >
          Siguiente
        </Link>
      </div>
    </div>
  );
}
