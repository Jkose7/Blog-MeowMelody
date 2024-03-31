import PropTypes from 'prop-types'


export const RenderContent = ({ content, typeContent }) => {
    switch (typeContent) {
        case 'audio/mpeg':
            return <audio className="w-full h-full" src={content} controls />;
        case 'application/pdf':
            return <iframe className="w-full h-full object-cover" src={content} title="PDF Document" />;
        case 'image/jpeg':
            return <img className="w-full h-full object-cover aspect-auto grayscale" src={content} alt="" />;
        case 'image/png':
            return <img className="w-full h-full object-cover aspect-auto grayscale" src={content} alt="" />;
        default:
            return null; // Manejo de tipo de contenido desconocido
    }
    
}

RenderContent.propTypes = {
    content: PropTypes.any,
    typeContent : PropTypes.any
  }
