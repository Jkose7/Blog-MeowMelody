import { AsideNews } from "../components/asideNews"
import { ButtonCreateNew } from "../components/buttonCreateNew"
import { MainNew } from "../components/mainNew"

export function Index({theme}) {
    return (
        <section className="mx-5 md:mx-16 lg:mx-28 xl:mx-48 2xl:mx-80 gap-5 flex flex-col h-[80vh] py-4">
            <section className="h-full flex gap-1 flex-col">
                <MainNew>
                    <ButtonCreateNew theme={theme} />
                </MainNew>

                <div className="flex flex-col sm:flex-row gap-1 h-4/5">
                    <AsideNews>
                        <ButtonCreateNew theme={theme} />
                    </AsideNews>

                    <AsideNews>
                        <ButtonCreateNew theme={theme} />
                    </AsideNews>

                    <AsideNews>
                        <ButtonCreateNew theme={theme} />
                    </AsideNews>

                </div>
            </section>

        </section>
    )
}