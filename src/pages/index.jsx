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
                        <article key={dato.title} className="bg-second-color rounded-sm dark:bg-primary-color h-full w-full flex items-center justify-center">
                            {
                                dato.image !== null &&
                                <div className="w-full h-2/6">
                                    <img
                                        className="w-full h-full object-cover aspect-auto grayscale rounded-md"
                                        src={dato.image}
                                        alt=""
                                    />
                                </div>
                            }

                            <div className="h-full w-full flex flex-col">
                                <div className="h-1/3 w-full text-3xl font-titulos font-bold flex items-center">
                                    <h1 className="overflow-hidden truncate capitalize">{dato.title}</h1>
                                </div>
                                <div className="h-2/3 w-full overflow-hidden overflow-ellipsis flex text-sm">
                                    <p className="text-balance">{dato.content}</p>
                                </div>
                            </div>

                            <div className="max-h-4 w-full flex flex-row-reverse items-center">
                                <Link
                                    to={`/news/${dato.title}`}
                                    className="font-texto font-semibold px-2 transition-all bg-primary-color text-second-color rounded-sm">
                                    ver mas
                                </Link>
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