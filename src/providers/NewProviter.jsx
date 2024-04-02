
import { createContext, useContext, useEffect, useState } from "react";

import { useImageURL } from "../hooks/useImageURL";
import { useContenidoAdicional } from "../hooks/usecontenidoAdicional";

import PropTypes from 'prop-types'
import { useFindNews } from "../hooks/useFindNews";

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

  const [datos, setDatos] = useState(()=>{
    const news = JSON.parse(localStorage.getItem('news'))
    return news === null ? [] : news
  });

  const { imageURL, handleImage } = useImageURL()
  const { contenidoAUrl, typeContent, handleContenidoA } = useContenidoAdicional()

  const [newsId, setNewsIde] = useState(1)

  const incrementoId = () => {
    setNewsIde(newsId + 1)
  }

  const onSubmit = data => {
    incrementoId()

    const nuevoObjeto = {
      id: newsId,
      fecha: new Date(),
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

  useEffect(() => {
    localStorage.setItem('news', JSON.stringify(datos))
  }, [datos])

  console.log(datos)

  const deleteNews = (id) => {
    console.log(id)
    const filterDatos = datos.filter((datu) => datu.id !== id)
    console.log(filterDatos)
    setDatos(filterDatos);

  }

  return (
    <newContext.Provider value={datos}> {/*datos a cambiar */}
      <createNewContext.Provider value={{ onSubmit, handleContenidoA, handleImage, deleteNews }}> {/*funcion q cambia dato */}
        {children}
      </createNewContext.Provider>
    </newContext.Provider>
  );
};

NewProviter.propTypes = {
  children: PropTypes.any
}