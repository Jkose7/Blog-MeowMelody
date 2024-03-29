import { Link } from "react-router-dom"

import { NewsContent } from "../components/NewsContent"
import { NoNewContent } from "../components/NoNewContent"
import { useNewContext } from "../providers/NewProviter"

export function Index() {
    const datos = useNewContext()

    return (
        <>
            <section className="flex flex-col h-1/2">
                {/* Contenedor grande */}
                {datos.length >= 1 &&
                    datos?.slice(0, 1).map((dato, index) => (
                        <article key={dato.title} className="bg-second-color rounded-sm dark:bg-primary-color h-full w-full flex text-primary-color dark:text-second-color">
                            {
                                dato.image !== null &&
                                <div className="w-full h-full">
                                    <img
                                        className="w-full h-full object-cover aspect-auto grayscale"
                                        src={dato.image}
                                        alt=""
                                    />
                                </div>
                            }

                            <div className="w-full h-full flex flex-col p-4">

                                <div className="w-full h-5/6 flex flex-col gap-4">
                                    <div className="w-full text-3xl font-titulos font-bold flex items-center">
                                        <h1 className="overflow-hidden truncate capitalize">{dato.title}</h1>
                                    </div>
                                    <div className="w-full h-full max-h-48 overflow-hidden text-ellipsis text-xl">
                                        <p className="text-balance break-words">{dato.content}</p>
                                    </div>
                                </div>

                                <div className="w-full h-1/6 flex flex-col-reverse justify-center">
                                    <div className="flex flex-row-reverse">
                                        <Link
                                            to={`/news/${dato.title}`}
                                            className="font-texto font-semibold px-2 transition-all bg-primary-color text-second-color dark:text-primary-color dark:bg-second-color rounded-sm">
                                            ver mas
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </article>
                    ))}

                {/* Contenedor para cuando no hay datos */}
                {datos.length === 0 && <NoNewContent />}
            </section>
            {/* Contenedores pequeños adicionales */}

            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-1/2 w-full gap-2 overflow-auto">
                {/* Contenedor grande extra, si hay más de un dato */}
                {datos.length > 1 && <NewsContent />}

                {/* Contenedores pequeños adicionales */}
                {Array.from({ length: 3 - Math.max(0, datos.length - 1) }).map((_, index) => (
                    <NoNewContent key={index} />
                ))}
            </div>

        </>


    )
}