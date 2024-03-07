
export function Aside_news ({Titulo,Descripcion,Imagen,Contenido_adicional}) {
    return(
        <article className="bg-red-400 h-32 w-1/3 flex flex-col relative">
            {Titulo}
            {Descripcion}
            <button className="absolute right-1 bottom-1">Ver mas</button>
        </article>
    )
}