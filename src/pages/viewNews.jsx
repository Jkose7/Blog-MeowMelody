import { useParams } from "react-router-dom";
import { useNewContext } from "../providers/NewProviter";

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
    <div className="flex flex-col gap-7">
      <h1
        className="font-titulos flex justify-center 
      text-7xl font-semibold"
      >
        {newsInfo.title}
      </h1>
      <div className="w-full bg-slate-500 flex gap-5">
        {newsInfo.image !== null && (
          <div className="w-1/2">
            <img
              className=" h-full object-cover aspect-auto"
              src={newsInfo.image}
            />
          </div>
        )}
        <div
          className={`${
            newsInfo.image !== null ? "w-1/2" : "w-full"
          } flex h-full`}
        >
          <p>{newsInfo.content}</p>
        </div>
      </div>
    </div>
  );
}
