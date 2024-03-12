
import PropTypes from 'prop-types'

export function AsideNews ({Titulo,Descripcion,Imagen,Contenido_adicional,children}) {
    return(
        <article className="bg-second-color rounded-sm dark:bg-primary-color h-full w-full sm:w-1/3 flex items-center justify-center relative">
            {children}
        </article>
    )
}

AsideNews.propTypes = {
    Titulo: PropTypes.string,
    Descripcion: PropTypes.string,
    Imagen: PropTypes.any,
    Contenido_adicional: PropTypes.any,
    children: PropTypes.any,
}