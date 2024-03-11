
import {useForm} from 'react-hook-form'
import { FormError } from '../components/formError';

export function CreateNews () {

    const {register, handleSubmit,
        formState: {errors}
    } = useForm();

    console.log(errors)

    const onSubmit= handleSubmit((data) => {
        console.log(data)
    })

    return(
        <section className="bg-emerald-800 flex justify-center items-center flex-col gap-4 min-h-screen]">
            <h1 className="text-white">Form pa mi novio hemosho</h1>

            


            <form action="" className="text-white " onSubmit={onSubmit}>

                {/*TITULO */}

                <label 
                htmlFor="titulo"
                className="block">Titulo</label>
                 <input type="text" 
                 {...register("titulo", {
                    required: {
                        value: true,
                        message: "Titulo es requerido"
                    },
                    minLength: {
                        value: 5,
                        message: "El titulo debe tener mas caracteres"
                    },
                    maxLength: {
                        value: 60,
                        message: "El titulo debe tener menos caracteres"
                    },

                 })}
                className="w-full text-black"/>
                {
                  errors.titulo  && <span>{errors.titulo.message}</span>
                }


                {/*FECHA DE PUBLICACIÓN */}

                <label 
                htmlFor="Fecha_Publi"
                className="block">Fecha de publicación</label>
                <input type="date" 
                {...register("Fecha_Publi",{
                    required: {
                        value: true,
                        message: "La fecha de publicacion es requerida"
                    },
                    validate: (value) => {
                        const Fecha_Publi = new Date(value)
                        const Fecha_Actual = new Date ()
                        const Fecha_posible = Fecha_Actual.getMonth() - Fecha_Publi.getMonth()

                        return Fecha_posible < Fecha_Actual && "Debes poner fecha actual" 
                    }
                 })}
                className="w-full text-black"/>
                {
                  errors.Fecha_Publi  && <span>{errors.Fecha_Publi.message}</span>
                }

                {/* CONTENIDO*/}

                <label 
                htmlFor="Contenido"
                className="block">Contenido</label>
                <textarea name="" id="" cols="30" rows="10"
                {...register("Contenido",{
                    required: true
                 })}
                className='w-full text-black'></textarea>
                {
                  errors.Contenido  && <FormError
                  campo="El contenido"
                  error="es requerido"
                  />
                }

                {/*IMAGEN */}

                <label htmlFor="img"
                className="block">Imagen</label>
                <input type="file" />

                {/* CONTENIDO ADICIONAL*/}

                <label 
                htmlFor="Contenido-Adicional"
                className="block">Contenido Adicional</label>
                <input type="file" 
                {...register("Contenido-Adicional")}
                className="w-full "/>

                {/*BTN CREAR*/}

                <button type='submit'>
                    CREAR
                </button>
            </form>
        </section>
    )
}