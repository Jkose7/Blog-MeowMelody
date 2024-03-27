import { useNewContext } from "../providers/NewProviter"


export function NewsContent() {
    const datos = useNewContext()

    return (
        <>
            {
                datos && datos.length !== 0 &&
                datos?.slice(1).map(dato => (
                    <article key={dato.title} className="bg-second-color rounded-sm dark:bg-primary-color h-full min-h-96 w-full flex items-center justify-center relative">
                        <h1>{dato.title}</h1>
                    </article>
                ))
            }
        </>
    )
}
