import { Link } from "react-router-dom"
import { useNewContext } from "../providers/NewProviter"


export function NewsContent() {
    const datos = useNewContext()

    return (
        <>
            {
                datos && datos.length !== 0 &&
                datos?.slice(1).map((dato, index) => (
                    <article key={dato.title} className="bg-second-color dark:bg-primary-color rounded-sm h-full min-h-32 w-full flex flex-col items-center justify-center p-3 text-primary-color dark:text-second-color">

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
                ))
            }
        </>
    )
}
