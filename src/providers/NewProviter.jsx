import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { useImageURL } from "../hooks/useImageURL";
import { useContenidoAdicional } from "../hooks/usecontenidoAdicional";

const newContext = createContext();
const createNewContext = createContext();

{/*custom hook */}

export const useNewContext = () => { 
  return useContext(newContext);
};

export const useCreateNewContext = () => {
  return useContext(createNewContext);
};

{/*funcion */}

export const NewProviter = ({ children }) => {
  const [datos, setDatos] = useState([]);


  const imageURL = useImageURL();
  const contenidoAUrl = useContenidoAdicional();

    const {reset} = useForm()

  const onSubmit = (data) => {
    const nuevoObjeto = {
      title: data.titulo,
      content: data.contenido,
      image: imageURL,
      additionalContent: contenidoAUrl,
    };

    setDatos([...datos, nuevoObjeto]);

    reset()

    
  };
  console.log(datos)

  return (
    <newContext.Provider value={datos}> {/*datos a cambiar */}
      <createNewContext.Provider value={onSubmit}> {/*funcion q cambia dato */}
        {children}
      </createNewContext.Provider>
    </newContext.Provider>
  );
};
