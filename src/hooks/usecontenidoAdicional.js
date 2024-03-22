import { useState } from "react";

export const useContenidoAdicional = () => {
    const [contenidoA, SetcontenidoA] = useState(null)
    const [ contenidoAUrl, SetcontenidoAUrl] = useState(null)

     const handleContenidoA = (e) => {
        const newContenidoA = e.target .files[0]
        SetcontenidoA(newContenidoA)
     }

     if (contenidoA) {
        const renderContenidoA = new FileReader();
        renderContenidoA.onload = () => {
            const contenidoAUrl = renderContenidoA.result
            SetcontenidoAUrl(contenidoAUrl)
        }
        renderContenidoA.readAsDataURL(contenidoA)
     }

     return {contenidoAUrl, handleContenidoA}
}