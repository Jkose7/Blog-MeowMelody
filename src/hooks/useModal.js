import { useState } from "react";

export const useModal = (errors) => {
    const [modal, setModal] = useState(false) 

  const showModal = () => {
    if (Object.keys(errors).length == 0){
      setModal(true)
      if (modal) {
        setModal(false)
      }
    }
  } 

  return {modal, showModal}
}