import { Link, useParams } from "react-router-dom";
import { useNewContext } from "../providers/NewProviter";
import { textContent } from "../hooks/TextContent";
import { RenderContent } from "../components/renderContent";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDownload } from "@fortawesome/free-solid-svg-icons";
import { ModalDeleteNews } from "../components/modalDeleteNews";
import { useThemeContext } from "../providers/ThemeProviter";

export function ViewNews() {
  const { id } = useParams();
  const datos = useNewContext();
  const theme = useThemeContext();

  const iconColor = theme === 'dark' ? '#FFFFEC' : '#1a1a1a'

  const newsInfo = datos.find((info) => {
    if (info.id == id) {
      return info;
    }
  });

  const [modalDelete, setModalDelete] = useState(false)

  const showModalDelete = () => {
    setModalDelete(!modalDelete)
  }

  console.log(newsInfo.fecha)

  return (
    <div className="flex flex-col gap-3 my-7 max-h-[710px] min-h-[710px] overflow-hidden ">
      {modalDelete && <ModalDeleteNews cerrar={showModalDelete}></ModalDeleteNews>}
      <div className="flex items-center w-full">
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="xl"
            style={{ color: iconColor }}
          />
        </Link>
        <div className="w-full flex flex-col justify-center">
          <h1 className="font-titulos text-5xl font-semibold text-balance text-center mb-4 dark:text-primary-color">
            {newsInfo.title}
          </h1>
          <p className="text-end font-text-alt dark:text-primary-color">{new Date(newsInfo.fecha).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="flex gap-3 w-1/2">
        <button
          className="font-text-alt border-2 border-transparent bg-second-color text-white p-1 rounded-sm hover:border-second-color hover:bg-transparent 
        hover:text-second-color dark:border-transparent dark:text-second-color dark:bg-primary-color 
        dark:hover:bg-transparent dark:hover:text-primary-color dark:hover:border-primary-color dark:hover:border-2
        transition-all duration-100 w-full"
        >
          Editar
        </button>
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

      <div className="w-full flex font-titulos gap-2 h-full dark:text-primary-color text-lg font-medium " >
        <div
          className={`${newsInfo.image || newsInfo.additionalContent ? 'w-1/2' : 'hidden'} min-h-[500px] border-2  border-black rounded-sm grayscale hover:grayscale-0 transition-all duration-500 max-h-[500px]
          dark:border-white`}
        >
          {newsInfo.image !== null && (
            <div
              className={`${newsInfo.typeContent === "audio/mpeg" ||
                newsInfo.typeContent === "application/pdf"
                ? "h-[80%]"
                : "h-1/2"
                } `}
            >
              <img
                src={newsInfo.image}
                className="object-cover aspect-auto w-full h-full"
                alt=""
              />
            </div>
          )}

          {newsInfo.additionalContent !== null && (
            <div
              className={`${newsInfo.typeContent === "audio/mpeg" ||
                newsInfo.typeContent === "application/pdf"
                ? "h-[15%]"
                : "h-1/2"
                } `}
            >
              <RenderContent
                content={newsInfo.additionalContent}
                typeContent={newsInfo.typeContent}
              ></RenderContent>
              <a
                href={newsInfo.additionalContent}
                download
                className={`${newsInfo.typeContent === "audio/mpeg" ||
                newsInfo.typeContent === "application/pdf"
                ? "h-[8%]"
                : "h-1/2"
                } font-texto font-bold text-md absolute bottom-0 flex gap-2 text-second-color p-3 dark:text-primary-color`}
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
          className={`${newsInfo.image !== null || newsInfo.additionalContent !== null ? "w-1/2" : "w-full"
            } flex-1  h-full w-full justify-center flex items-center overflow-hidden max-h-[500px] min-h-[500px] overflow-y-scroll pr-5`}
        >
          <p className="text-balance text-justify break-words max-w-full ">
            {textContent(newsInfo.content, false, true)}
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <button className="p-2 bg-second-color border-transparent border-2 text-primary-color text-center rounded-sm  hover:border-2
        hover:border-second-color hover:bg-transparent hover:text-second-color
        dark:boder-2 dark:border-transparent dark:bg-primary-color dark:text-second-color dark:hover:border-primary-color
        dark:hover:bg-transparent dark:hover:text-primary-color"
        >Anterior</button>
        <button className="p-2 bg-second-color border-transparent border-2 text-primary-color text-center rounded-sm  hover:border-2
        hover:border-second-color hover:bg-transparent hover:text-second-color
        dark:boder-2 dark:border-transparent dark:bg-primary-color dark:text-second-color dark:hover:border-primary-color
        dark:hover:bg-transparent dark:hover:text-primary-color"
        >Siguiente</button>
      </div>
    </div>
  );
}
