import { NewsContent } from "../components/NewsContent"
import { ButtonCreateNew } from "../components/buttonCreateNew"


export function Index() {
    return (
        <section className="gap-5 flex flex-col h-full py-4">
            <section className="h-full flex gap-1 flex-col">

                <NewsContent>
                    <ButtonCreateNew />
                </NewsContent>

                <div className="flex flex-col sm:flex-row gap-1 h-4/5">
                    <NewsContent>
                        <ButtonCreateNew />
                    </NewsContent>
                    <NewsContent>
                        <ButtonCreateNew />
                    </NewsContent>
                    <NewsContent>
                        <ButtonCreateNew />
                    </NewsContent>

                </div>
            </section>

        </section>
    )
}