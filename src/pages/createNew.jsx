
import { useForm } from "react-hook-form";
//import { FormError } from '../components/formError';

export function CreateNews() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    
    <section className=" bg-second-color flex justify-center items-center flex-col 
                        mx-5 md:mx-16 lg:mx-28 xl:mx-80 gap-5 p h-screen ">

      <div className=" ">
        <form action="" className="text-white max-w-[645px] max-h-[690px]" onSubmit={onSubmit}>
          {/*TITULO */}

          <label htmlFor="titulo" className="block font-texto">
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
            className="w-full pb-2 border-b-2 border-white bg-transparent focus:outline-none text-6xl font-titulos"
          />
          {errors.titulo && <span className="text-sm">{errors.titulo.message}</span>}

          {/*FECHA DE PUBLICACIÓN */}

          <label htmlFor="Fecha_Publi" className="block font-texto" >
            Fecha de publicación
          </label>
          <input
            type="date"
            {...register("Fecha_Publi", {
              required: {
                value: true,
                message: "La fecha de publicacion es requerida",
              },
              validate: (value) => {
                const Fecha_Publi = new Date(value);
                const Fecha_Actual = new Date();
                const Fecha_posible =
                  Fecha_Actual.getMonth() - Fecha_Publi.getMonth();

                return (
                  Fecha_posible < Fecha_Actual && "Debes poner fecha actual"
                );
              },
            })}
            className="pb-2 w-full filter:invert(0.9) text-white font-titulos text-xl border-b-2 border-white bg-transparent focus:outline-none"
          />
          {errors.Fecha_Publi && <span className="text-sm">{errors.Fecha_Publi.message}</span>}

          {/* CONTENIDO*/}

          <label htmlFor="Contenido" className="block font-texto">
            Contenido
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            {...register("Contenido", {
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
          {errors.Contenido && <span className="text-sm">{errors.Contenido.message}</span>}

          {/*IMAGEN */}

          <label htmlFor="img" className="block font-texto">
            Imagen
          </label>
          <input type="file" className="font-titulos mb-3" />

          {/* CONTENIDO ADICIONAL*/}

          <label htmlFor="Contenido-Adicional" className="block font-texto">
            Contenido Adicional
          </label>
          <input
            type="file"
            {...register("Contenido-Adicional")}
            className="w-full  font-titulos mb-3"
          />

          {/*BTN CREAR*/}

          <button type="submit">CREAR</button>
        </form>
      </div>
    </section>
  );
}
