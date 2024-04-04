import { Link } from "react-router-dom"

import { NewsContent } from "../components/NewsContent"
import { NoNewContent } from "../components/NoNewContent"
import { useNewContext } from "../providers/NewProviter"
import { useChangeTheme } from "../hooks/iconChangeTheme"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic, faFilePdf, faImage } from "@fortawesome/free-solid-svg-icons"

import { textContent } from "../hooks/TextContent"

export function Index() {
    const datos = useNewContext()
    const {invertIconColor} = useChangeTheme()

    return (
        <div className="flex flex-col h-full justify-center w-full gap-2 my-6">
            {/* Contenedor grande */}
            {datos?.length >= 1 &&
                datos?.slice(0, 1).map((dato) => (
                    <article key={dato.title} className=" bg-second-color  rounded-sm dark:bg-primary-color w-full min-h-96 flex text-primary-color dark:text-second-color">
                        {console.log(dato.typeContent)}
                        <div className={`${dato.image !== null || dato.additionalContent !== null ? 'w-1/2' : 'w-0'} flex flex-col min-h-96 max-h-96 justify-center items-center`}>
                            {
                                dato.image !== null &&
                                <img
                                    className={`w-full object-cover aspect-auto ${dato.additionalContent !== null ? 'h-1/2' : 'h-full'} grayscale`}
                                    src={dato.image}
                                    alt=""
                                />
                            }
                            {
                                (dato.typeContent === "audio/mpeg" || dato.typeContent === "audio/ogg") && (
                                    <div className="h-full flex items-center">
                                        <FontAwesomeIcon
                                            icon={faMusic}
                                            style={{ color: invertIconColor}}
                                            size="xl">
                                        </FontAwesomeIcon>
                                    </div>
                                )
                            }
                            {
                                (dato.typeContent === "application/pdf") && (
                                    <div className="w-full h-full flex items-center justify-center ">
                                        <FontAwesomeIcon
                                            icon={faFilePdf}
                                            style={{ color: invertIconColor }}
                                            size="xl">
                                        </FontAwesomeIcon>
                                    </div>
                                )
                            }
                            {
                                (dato.typeContent === "image/jpeg" || dato.typeContent === "image/png") && (
                                    <div className="w-full h-full flex items-center justify-center ">
                                        <FontAwesomeIcon
                                            icon={faImage}
                                            style={{ color: invertIconColor}}
                                            size="xl">
                                        </FontAwesomeIcon>
                                    </div>
                                )
                            }
                        </div>

                        <div className={`${(dato.image !== null || dato.additionalContent !== null) ? 'w-1/2' : 'w-full'} min-h-96 max-h-96 flex flex-col p-4`}>

                            <div className="w-full h-[90%] flex flex-col gap-4">
                                <div className="w-full text-3xl font-titulos font-bold flex items-center">
                                    <h1 className="overflow-hidden truncate capitalize">{dato.title}</h1>
                                </div>
                                <div className="w-full h-full overflow-hidden text-ellipsis text-xl">
                                    <p className="text-balance break-words">{textContent(dato.content, true)}</p>
                                </div>
                            </div>

                            <div className="w-full h-[10%] min-h-6 flex flex-col-reverse">
                                <div className="flex flex-row-reverse">
                                    <Link
                                        to={`/news/${dato.id}`}
                                        className="font-texto font-semibold px-2 transition-all bg-primary-color text-second-color dark:text-primary-color dark:bg-second-color rounded-sm
                                        hover:bg-violet-600 hover:text-primary-color dark:hover:bg-purple-600">
                                        ver mas
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </article>
                ))}

            {/* Contenedor para cuando no hay datos */}
            {datos?.length === 0 && <NoNewContent />}

            {/* Contenedores pequeños adicionales */}

            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-1/2 max-h-96 w-full gap-2 overflow-auto">
                {/* Contenedor grande extra, si hay más de un dato */}
                {datos?.length > 1 && <NewsContent />}

                {/* Contenedores pequeños adicionales */}
                {Array.from({ length: 3 - Math.max(0, datos?.length - 1) }).map((_, index) => (
                    <NoNewContent key={index} />
                ))}
            </div>
        </div>
    )
}