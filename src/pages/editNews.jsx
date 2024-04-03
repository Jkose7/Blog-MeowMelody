import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useImageURL } from "../hooks/useImageURL";
import { useContenidoAdicional } from "../hooks/usecontenidoAdicional";
import { useFindNews } from "../hooks/useFindNews";

import {  toast, ToastContainer, Zoom, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export function EditNews() {
    const { foundedNews } = useFindNews()
    const { imageURL, handleImage } = useImageURL()
    const { contenidoAUrl, handleContenidoA } = useContenidoAdicional()

    const editNews = data => {
        foundedNews.title = data.titulo
        foundedNews.content = data.contenido
        foundedNews.image = imageURL
        foundedNews.additionalContent = contenidoAUrl
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const showToastMessage = () => {
        toast("Editada correctamente", {
          className: "foo-bar",
          theme:"dark",
          transition: Zoom,
          autoClose: 1000
        });

        setTimeout(() => {
            navigate("/")
        },2000)
    }

    
    

    
    return (
        <section className=" bg-primary-color dark:bg-second-color dark:bg-blend-color-dodge h-[80vh] dark:text-primary-color">
            {console.log(foundedNews.title)}
            <form
                id="myform"
                action=""
                className="text-second-colordark:bg-primary-color w-full h-full flex flex-col justify-center gap-3"
                onSubmit={handleSubmit(editNews)}
            >
                {/*TITULO */}
                <label htmlFor="titulo" className="font-texto dark:text-primary-color font-bold">
                    Titulo
                </label>
                <input
                    type="text"
                    defaultValue={foundedNews.title}
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
                            value: 100,
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
                    cols="2"
                    rows="5"
                    defaultValue={foundedNews.content}
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
                            value: 3500,
                            message: "Tu contenido debe ser menos extenso",
                        },
                    })}
                    className="w-full font-titulos dark:text-primary-color text-second-color pb-2 pr-3 mr-2 border-b-2 border-r-2 border-second-color dark:border-white bg-transparent focus:outline-none"
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
                            onChange={(e) => handleContenidoA(e)}
                        />
                    </div>

                </div>

                {/*BTN CREAR*/}
                <button type="submit" onClick={showToastMessage}>EDITAR</button>
                <ToastContainer position="top-center" />
            </form>
        </section>
    );
} 