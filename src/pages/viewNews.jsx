import { useParams } from "react-router-dom";
import { useNewContext } from "../providers/NewProviter";
import { textContent } from "../hooks/TextContent";
import { RenderContent } from "../components/renderContent";

export function ViewNews() {
  const { id } = useParams();
  const datos = useNewContext();

  const newsInfo = datos.find((info) => {
    if (info.id == id) {
      return info;
    }
  });

  console.log(newsInfo);

  return (
    <div className="flex flex-col gap-3">
      <h1
        className="font-titulos flex justify-center 
      text-7xl font-semibold"
      >
        {newsInfo.title}
      </h1>
      <div className="w-full flex font-texto gap-3 max-h-64">


        {newsInfo.image !== null && (
          <div className="w-1/2">
            <img src={newsInfo.image} alt="" />
          </div>
        )}
        <div
          className={`${
            newsInfo.image !== null 
              ? "w-1/2"
              : "w-full"
          } flex-1 h-full justify-center flex items-center`}
        >
          <p className="text-balance text-justify">
            {textContent(newsInfo.content, false, true)}
          </p>
        </div>
      </div>
      <div className="font-texto flex justify-center w-full ">
        <p className="text-balance w-full text-justify">
          {textContent(newsInfo.content, false, true)}
        </p>
      </div>

      {newsInfo.additionalContent !== null && 
        <div className="w-1/2 bg-black">
          <RenderContent
            content={newsInfo.additionalContent}
            typeContent={newsInfo.typeContent}
          ></RenderContent>
        </div>
      }
    </div>
  );
}
