import { ButtonCreateNew } from "./buttonCreateNew"


export function NoNewContent() {
    return (
        <article className="bg-second-color rounded-sm dark:bg-primary-color min-h-32 h-full w-full flex items-center justify-center relative">
            <ButtonCreateNew/>
        </article>
    )
} 