import { useParams } from "react-router-dom";
import { useNewContext } from "../providers/NewProviter";


export const usePrevious = () => {
    const { id } = useParams();
    const datos = useNewContext();
  
    const findIndice = datos.findIndex((dato) => id == dato.id);
    let previousId;
  
    if (findIndice === -1) {
  
      previousId = datos[datos.length - 1]?.id;
    } else if (findIndice === 0) {
  
      previousId = datos[datos.length - 1]?.id;
    } else {
      // De lo contrario, devolver el ID anterior
      previousId = datos[findIndice - 1]?.id;
    }
  
    return previousId;
  }