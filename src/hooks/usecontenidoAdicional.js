import { useState } from "react";

export const useContenidoAdicional = () => {
   const [contenidoA, SetcontenidoA] = useState(null)
   const [typeContent, setTypeContent] = useState(null)
   const [contenidoAUrl, SetcontenidoAUrl] = useState(null)

   const handleContenidoA = (e) => {
      const newContenidoA = e.target.files[0]
      SetcontenidoA(newContenidoA)
   }


   if (contenidoA) {
      const renderContenidoA = new FileReader();
      renderContenidoA.onload = () => {
         const contenidoAUrl = renderContenidoA.result
         setTypeContent(contenidoA.type)
         SetcontenidoAUrl(contenidoAUrl)
      }
      renderContenidoA.readAsDataURL(contenidoA)
   }

   console.log(contenidoA)

   return { contenidoAUrl, typeContent, handleContenidoA }

}