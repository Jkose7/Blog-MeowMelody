
import { createContext, useContext, useState } from "react";

import { useImageURL } from "../hooks/useImageURL";
import { useContenidoAdicional } from "../hooks/usecontenidoAdicional";

import PropTypes from 'prop-types'

const newContext = createContext();
const createNewContext = createContext();

//CUSTOM HOOK

export const useNewContext = () => { 
  return useContext(newContext);
};

export const useCreateNewContext = () => {
  return useContext(createNewContext);
};

//FUNCION 

export const NewProviter = ({ children }) => {

  const [datos, setDatos] = useState([]);

  const { imageURL, handleImage } = useImageURL()
  const { contenidoAUrl, typeContent, handleContenidoA } = useContenidoAdicional() 

  const onSubmit = data => {

    const nuevoObjeto = {
      title: data.titulo,
      content: data.contenido,
      image: imageURL,
      additionalContent: contenidoAUrl,
      typeContent: typeContent,
    };

    setDatos([...datos, nuevoObjeto]);
    handleImage({ target: { files: [] } });
    handleContenidoA({ target: { files: [] } });

    //Resetear formulario
    document.getElementById('myform').reset()
  };

  console.log(datos)

  return (
    <newContext.Provider value={datos}> {/*datos a cambiar */}
      <createNewContext.Provider value={{onSubmit, handleContenidoA, handleImage}}> {/*funcion q cambia dato */}
        {children}
      </createNewContext.Provider>
    </newContext.Provider>
  );
};

NewProviter.propTypes = {
  children: PropTypes.any
}