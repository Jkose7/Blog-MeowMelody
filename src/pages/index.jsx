import { NewsContent } from "../components/NewsContent"
import { NoNewContent } from "../components/NoNewContent"
import { useNewContext } from "../providers/NewProviter"

export function Index() {
    const datos = useNewContext()

    return (
        <section className="gap-2 flex flex-col h-full py-4">
            {/* Contenedor grande */}
            {datos.length >= 1 &&
                datos?.slice(0, 1).map(dato => (
                    <article key={dato.title} className="bg-second-color rounded-sm dark:bg-primary-color h-full min-h-96 w-full flex items-center justify-center relative">
                        <h1>{dato.title}</h1>
                    </article>
            ))}

            {/* Contenedor para cuando no hay datos */}
            {datos.length === 0 && <NoNewContent />}

            {/* Contenedores pequeños adicionales */}
            {datos.length <= 7 && (
                <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full w-full gap-2">
                    {/* Contenedor grande extra, si hay más de un dato */}
                    {datos.length > 1 && <NewsContent />}

                    {/* Contenedores pequeños adicionales */}
                    {Array.from({ length: 4 - Math.max(1, datos.length - 1) }).map((_, index) => (
                        <NoNewContent key={index} />
                    ))}
                </div>
            )}
        </section>


    )
}