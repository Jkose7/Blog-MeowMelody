import { useState, useEffect } from 'react'

export const useImageURL = () => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null)

  const handleImage = (e) => {
    const newImage = e.target.files[0]
    setImage(newImage)
  }
  
  useEffect(() => {
    if (image) {
      const readerImage = new FileReader();
      readerImage.onload = () => {
        const imageURL = readerImage.result;
        setImageURL(imageURL);
      }
      readerImage.readAsDataURL(image);
    } else {
      setImageURL(null); // Establecer imageURL a null si no hay ninguna imagen
    }
  }, [image]);

  return { imageURL, handleImage }
}