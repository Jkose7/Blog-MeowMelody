import { useForm } from "react-hook-form";
import { useState } from 'react';

import PropTypes from 'prop-types'

import { useImageURL } from "../hooks/useImageURL";

export function CreateNews() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState({})
  const { imageURL, handleImage } = useImageURL()

  const [content, setContent] = useState(null)
  const [contentURL, setContentURL] = useState(null)

  const handleContent = (e) =>{
    const newContent = e.target.files[0]
    setContent(newContent)
  }

  if (content) {
    const readerImage = new FileReader();
    readerImage.onload = () => {
      const contentURL = readerImage.result
      setContentURL(contentURL)
    }
    readerImage.readAsDataURL(content)
  }

  const onSubmit = handleSubmit((data) => {
    const { titulo, contenido} = data

    setData({
      title: titulo,
      content: contenido,
      image: imageURL,
      additionalContent: contentURL
    })

  });


  return (
    <section className=" bg-primary-color dark:bg-second-color dark:bg-blend-color-dodge h-[90vh]">
      {content ? console.log(content) : null}
      {data ? console.log(data) : null}
      <form action="" className="text-second-colordark:bg-primary-color w-full h-full flex flex-col justify-center gap-3" onSubmit={onSubmit}>
        {/*TITULO */}
        <label htmlFor="titulo" className="font-texto dark:text-primary-color font-bold">
          Titulo
        </label>
        <input
          type="text"
          {...register("titulo", {
            required: {
              value: true,
              message: "Titulo es obligatorio",
            },
            minLength: {
              value: 5,
              message: "El titulo debe tener mas caracteres",
            },
            maxLength: {
              value: 60,
              message: "El titulo debe tener menos caracteres",
            },
          })}
          className="w-full pb-2 border-b-2 border-second-color dark:border-white bg-transparent focus:outline-none text-4xl font-titulos"
        />
        {errors.titulo && <span className="text-sm">{errors.titulo.message}</span>}

        {/* CONTENIDO*/}
        <label htmlFor="contenido" className="font-texto dark:text-primary-color text-second-color font-bold">
          Contenido
        </label>
        <textarea
          name=""
          id=""
          cols="10"
          rows="15"
          {...register("contenido", {
            required: {
              value: true,
              message: "El contenido es obligatorio",
            },
            minLength: {
              value: 50,
              message: "Tu contenido debe ser más extenso",
            },
            maxLength: {
              value: 1000,
              message: "Tu contenido debe ser menos extenso",
            },
          })}
          className="w-full font-titulos dark:text-primary-color text-second-color pb-2 mr-2 border-b-2 border-r-2 border-second-color dark:border-white bg-transparent focus:outline-none"
        ></textarea>
        {errors.contenido && <span className="text-sm">{errors.contenido.message}</span>}


        <div className="flex w-full justify-between">
          <div className="flex flex-col w-full">
            {/* IMAGEN*/}
            <label htmlFor="fileupload" className="block dark:text-primary-color font-texto font-bold">
              Select File
            </label>
            <input
              id='fileupload'
              type="file"
              {...register("files")}
              className="font-titulos mb-3 flex flex-col"
              onChange={(e) => handleImage(e)}
            />
            {errors.img && <span className='text-sm'>{errors.img.message}</span>}
          </div>

          <div className="flex flex-col w-full">
            {/* CONTENIDO ADICIONAL*/}
            <label htmlFor="adicional" className="block dark:text-primary-color font-texto font-bold">
              Contenido Adicional
            </label>
            <input  
              type="file"
              {...register("adicional")}
              className="w-full font-titulos mb-3"
              onChange={(e) => handleContent(e)}
            />
          </div>

        </div>

        {/*BTN CREAR*/}
        <button type="submit" className="dark:text-primary-color text-second-color">CREAR</button>
      </form>

    </section>
  );
}


CreateNews.propTypes = {
  News: PropTypes.any
}