import { useParams } from "react-router-dom";
import { useNewContext } from "../providers/NewProviter";
import { textContent } from "../hooks/TextContent";
import { RenderContent } from "../components/renderContent";
import { useCreateNewContext } from "../providers/NewProviter";




export function ViewNews() {
  const { id } = useParams();
  const datos = useNewContext();
  const {deleteNews} = useCreateNewContext()

  const newsInfo = datos.find((info) => {
    if (info.id == id) {
      return info;
    }
  });

  console.log(deleteNews)

  return (
    <div className="flex flex-col gap-4 my-7 max-h-[600px]  min-h-[700px] overflow-hidden">
      <h1 className="font-titulos  text-5xl font-semibold text-balance text-center mb-4 dark:text-primary-color">
        {newsInfo.title}
      </h1>
      <div className="flex gap-3 w-1/2">
        <button className="font-text-alt border-2 border-transparent bg-second-color text-white p-1 rounded-sm hover:border-second-color hover:bg-transparent 
        hover:text-second-color dark:border-transparent dark:text-second-color dark:bg-primary-color 
        dark:hover:bg-transparent dark:hover:text-primary-color dark:hover:border-primary-color dark:hover:border-2
        transition-all duration-100 w-full">
          Editar
        </button>
        <button className="font-text-alt border-2 border-transparent bg-second-color text-white p-1 rounded-sm hover:border-second-color hover:bg-transparent hover:text-second-color dark:border-transparent dark:text-second-color dark:bg-primary-color 
        dark:hover:bg-transparent dark:hover:text-primary-color dark:hover:border-primary-color dark:hover:border-2
        transition-all duration-100 w-full" >
          Eliminar
        </button>
      </div>

      <div className="w-full flex font-titulos gap-2 h-full dark:text-primary-color text-lg font-medium">
       
          <div
            className="w-1/2 min-h-[500px] border-2 border-black rounded-sm grayscale hover:grayscale-0 transition-all duration-500 max-h-[500px]
          dark:border-white p-3"
          >
             {newsInfo.image !== null &&(
       
            <div className={`${newsInfo.typeContent === "audio/mpeg" ? "h-[80%]" : "h-1/2"} `}>
              <img
                src={newsInfo.image}
                className="object-cover aspect-auto w-full h-full"
                alt=""
              />
            </div>
           )}

            {newsInfo.additionalContent !== null && (
              <div className={`${newsInfo.typeContent === "audio/mpeg" ? "h-[15%]" : "h-1/2"} `}>
                <RenderContent
                  content={newsInfo.additionalContent}
                  typeContent={newsInfo.typeContent}
                ></RenderContent>
              </div>
            )}
            <a href={newsInfo .additionalContent} download className="font-texto text-sm underline h-[5%] ">
            Descargar contenido adicional</a>
          </div>
        <div
          className={`${
            newsInfo.image !== null ? "w-1/2" : "w-full"
          } flex-1  h-full w-full justify-center flex items-center overflow-hidden max-h-[600px]  overflow-y-scroll pr-5`}
        >
          <p className="text-balance text-justify break-words max-w-full ">
            {textContent(newsInfo.content, false, true)}
          </p>
        </div>
      </div>
    </div>
  );
}
