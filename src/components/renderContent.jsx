export const RenderContent = ({content, typeContent}) => {
    switch (typeContent) {
        case 'audio/mpeg':
            return <audio src={content} controls />;
        case 'application/pdf':
            return <iframe src={content} title="PDF Document" width="100%" height="100%" />;
        case 'img':
            return <img src={content} alt="" />;
        default:
            return null; // Manejo de tipo de contenido desconocido
    }
}