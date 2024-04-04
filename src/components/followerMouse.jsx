import { useEffect, useState } from 'react'

export const FollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

 
  useEffect(() => {

    const Move = (evento) => {
      const { clientX, clientY } = evento
      setPosition({ x: clientX, y: clientY })
    }

    window.addEventListener('pointermove', Move)
  }, []) 



  return (
    <>
      <div style={{
        position: "absolute",
        backgroundImage:`url(${"/src/assets/gato-negromouse.png"})`,
        pointerEvents: "none",
        left: -60,
        top: -20,
        width: 32,
        height: 32,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
    </>
  )
}

