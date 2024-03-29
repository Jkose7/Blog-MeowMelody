import { Link } from "react-router-dom"
import { useNewContext } from "../providers/NewProviter"
import { RenderContent} from "./renderContent"

export function NewsContent() {
    const datos = useNewContext()

    return (
        <>
            {
                datos && datos.length !== 0 &&
                datos?.slice(1).map((dato, index) => (
                    <article key={dato.title} className="bg-second-color dark:bg-primary-color rounded-sm h-full min-h-32 w-full flex flex-col items-center justify-center text-primary-color dark:text-second-color">

                        <div className={`w-full ${dato.image !== null || dato.additionalContent !== null ? 'h-2/6' : 'h-0'} flex`}>
                            {
                                dato.image !== null &&
                                <img
                                    className={`${datos.additionalContent !== null ? 'w-1/2' : 'w-full'} object-cover aspect-auto grayscale`}
                                    src={dato.image}
                                    alt=""
                                />
                            }
                            {
                                <RenderContent 
                                    content={dato.additionalContent}
                                    typeContent={dato.typeContent}
                                />
                            }
                        </div>
                        <div className={`${dato.image !== null || dato.additionalContent !== null ? "h-3/6" : "h-5/6 pt-3"} w-full flex flex-col px-3`}>
                            <div className="w-full text-3xl font-titulos font-bold flex items-center">
                                <h1 className="overflow-hidden truncate capitalize">{dato.title}</h1>
                            </div>
                            <div className="h-full w-full overflow-hidden text-md text-wrap">
                                <p className="text-balance break-words">{dato.content}</p>
                            </div>
                        </div>

                        <div className="h-1/6 w-full flex flex-row-reverse px-3 items-center">
                            <Link
                                to={`/news/${dato.title}`}
                                className="font-texto text-xs font-semibold px-2 transition-all bg-primary-color text-second-color rounded-sm dark:text-primary-color dark:bg-second-color">
                                ver mas
                            </Link>
                        </div>
                    </article>
                ))
            }
        </>
    )
}
