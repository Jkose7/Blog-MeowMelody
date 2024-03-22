import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'
import { useState } from 'react';



export function CreateNews({ News }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);

  const onSubmit = handleSubmit((data) => {
    const {titulo, } = data
    console.log(titulo)
  });

  const handleImage = (e) => {
    const newImage = e.target.files[0]
    setImage(newImage)
  }

  if (image) {
    const readerImage = new FileReader();
    readerImage.onload = () => {
      readerImage.result
    }
    readerImage.readAsDataURL(image)
  }

  return (
    <section className=" bg-second-color flex justify-center items-center flex-col mx-5 md:mx-16 lg:mx-28 xl:mx-80 gap-5 p-8 h-full">
      {image ? console.log(image) : null}
      <form action="" className="text-white w-full h-full overflow-y-scroll overflow-hidden" onSubmit={onSubmit}>
        {/*TITULO */}
        <label htmlFor="titulo" className="font-texto">
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
          className="w-full pb-2 border-b-2 border-white bg-transparent focus:outline-none text-4xl font-titulos"
        />
        {errors.titulo && <span className="text-sm">{errors.titulo.message}</span>}

        {/* CONTENIDO*/}
        <label htmlFor="contenido" className="block font-texto">
          Contenido
        </label>
        <textarea
          name=""
          id=""
          cols="10"
          rows="5"
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
          className="w-full font-titulos text-white pb-2 mr-2 border-b-2 border-r-2 border-white bg-transparent focus:outline-none"
        ></textarea>
        {errors.contenido && <span className="text-sm">{errors.contenido.message}</span>}

        {/*IMAGEN */}

        <div>
          <label htmlFor="fileupload" className="block font-texto">
            Select File
          </label>
          <input
            id='fileupload'
            type="file"
            {...register("files")}
            className="font-titulos mb-3"
            onChange={(e) => handleImage(e)}
          />
        </div>
        {errors.img && <span className='text-sm'>{errors.img.message}</span>}

        {/* CONTENIDO ADICIONAL*/}
        <label htmlFor="adicional" className="block font-texto">
          Contenido Adicional
        </label>
        <input
          type="file"
          {...register("adicional")}
          className="w-full font-titulos mb-3"
        />

        {/*BTN CREAR*/}
        <button type="submit">CREAR</button>
      </form>

    </section>
  );
}


CreateNews.propTypes = {
  News: PropTypes.any
}