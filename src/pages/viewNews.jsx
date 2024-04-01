import { Link, useParams } from "react-router-dom";
import { useNewContext } from "../providers/NewProviter";
import { textContent } from "../hooks/TextContent";
import { RenderContent } from "../components/renderContent";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ModalDeleteNews } from "../components/modalDeleteNews";

export function ViewNews() {
  const { id } = useParams();
  const datos = useNewContext();

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
    <div className="flex flex-col gap-3 my-7 max-h-[600px]  min-h-[700px] overflow-hidden ">
      {modalDelete && <ModalDeleteNews cerrar={showModalDelete}></ModalDeleteNews>}
      <div className="flex gap-[30%]">
        <Link to="/">
          <FontAwesomeIcon 
          icon={faArrowLeft}
          size="xl" />
        </Link>
        <h1 className="font-titulos  text-5xl font-semibold text-balance text-center mb-4 dark:text-primary-color">
        {newsInfo.title}
      </h1>
      </div>
      <div>
        <p>{newsInfo.fecha.month}</p>
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
          className="w-1/2 min-h-[500px] border-2  border-black rounded-sm grayscale hover:grayscale-0 transition-all duration-500 max-h-[500px]
          dark:border-white p-3"
        >
          {newsInfo.image !== null && (
            <div
              className={`${
                newsInfo.typeContent === "audio/mpeg" ||
                newsInfo.typeContent === "application/pdf" ||
                newsInfo.typeContent === "image/png"
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
              className={`${
                newsInfo.typeContent === "audio/mpeg" ||
                newsInfo.typeContent === "application/pdf" ||
                newsInfo.typeContent === "image/png"
                  ? "h-[15%]"
                  : "h-1/2"
              } `}
            >
              <RenderContent
                content={newsInfo.additionalContent}
                typeContent={newsInfo.typeContent}
              ></RenderContent>
            </div>
          )}

          {newsInfo.additionalContent !== null && (
            <a
              href={newsInfo.additionalContent}
              download
              className="underline font-texto text-sm"
            >
              Descarga el contenido adicional
            </a>
          )}
        </div>
        <div
          className={`${
            newsInfo.image !== null || newsInfo.additionalContent !== null ? "w-1/2" : "w-full"
          } flex-1  h-full w-full justify-center flex items-center overflow-hidden max-h-[600px]  overflow-y-scroll pr-5`}
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
