import { useParams } from "react-router-dom";
import { useNewContext } from "../providers/NewProviter";

export const useFindNews = () => {
    const { id } = useParams()
    const datos = useNewContext()

    const foundedNews = datos.find((info) => {
        if (info.id == id) {
            return info;
        }
    });

    if (foundedNews) {
        let { title, content, image, additionalContent, typeContent, fecha } = foundedNews
        return { id, title, content, image, additionalContent, typeContent, fecha, foundedNews }
    }else{
        return { datos }
    }


}