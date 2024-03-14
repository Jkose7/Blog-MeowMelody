import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'
import { useState } from 'react';
//import { FormError } from '../components/formError';

const schema = yup.object().shape({
  files: yup.mixed().test('required','Selecciona una imagen', value =>{
    return value && value.length;
  })
})

export function CreateNews({News}) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [image, setImage] = useState('');
  

  const onSubmit = data => {
   
    if (data.files.length > 0){
      convert2base64(data.files[0])
    }
    data.fechaActual = new Date();
    image ? data.files = image : data.files = null

    reset()

    News.push(data)
    console.log(News)
  };

  const convert2base64 = file =>{
    const reader = new FileReader();

    reader.onloadend=() => {
      setImage(reader.result.toString())
    };

    reader.readAsDataURL(file)
  }

  return (
    <section className=" bg-second-color flex justify-center items-center flex-col mx-5 md:mx-16 lg:mx-28 xl:mx-80 gap-5 p-8 h-full">
      {/*mx-5 md:mx-16 lg:mx-28 xl:mx-48 2xl:mx-80 gap-5 flex flex-col h-full py-4*/}
      {image ? console.log(image) : console.log("no hay imagen")}
      <form action="" className="text-white w-full h-full overflow-y-scroll overflow-hidden" onSubmit={handleSubmit(onSubmit)}>
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
          {!watch('files') || watch('files'.length === 0) ? (
            <div>
              <label htmlFor="fileupload" className="block font-texto">
                   Select File
              </label>
              <input 
                id='fileupload'
                type="file" 
                {...register("files")}
                className="font-titulos mb-3"
              />
            </div>
         
          ) : (<strong>{watch('files')[0].name}</strong>)}
          {errors.img  && <span className='text-sm'>{errors.img.message}</span>}

          {/* CONTENIDO ADICIONAL*/}

          <label htmlFor="contenido-Adicional" className="block font-texto">
            Contenido Adicional
          </label>
          <input
            type="file"
            {...register("contenido-Adicional")}
            className="w-full  font-titulos mb-3"
          />

          {/*BTN CREAR*/}

          <button type="submit">CREAR</button>

      </form>

    </section>
  );
}


CreateNews.propTypes ={
  News: PropTypes.any
}