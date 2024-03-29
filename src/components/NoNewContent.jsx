import { ButtonCreateNew } from "./buttonCreateNew"


export function NoNewContent() {
    return (
        <article className="bg-second-color rounded-sm dark:bg-primary-color max-h-96 min-h-96 w-full flex items-center justify-center relative">
            <ButtonCreateNew/>
        </article>
    )
} 