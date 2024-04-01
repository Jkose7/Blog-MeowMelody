import { useParams } from "react-router-dom";
import { useNewContext } from "../providers/NewProviter";

export const useNext = () => {
    const { id } = useParams();
    const datos = useNewContext();
  
    const findIndice = datos.findIndex((dato) => id == dato.id) + 1
    const currentData = datos[findIndice]
    let nextId = currentData?.id
  
    nextId === undefined ? nextId = 1 : nextId
  
    return nextId
  }