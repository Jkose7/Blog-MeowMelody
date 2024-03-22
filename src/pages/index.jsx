import { AsideNews } from "../components/asideNews"
import { ButtonCreateNew } from "../components/buttonCreateNew"
import { MainNew } from "../components/mainNew"

export function Index() {
    return (
        <section className="gap-5 flex flex-col h-full py-4">
            <section className="h-full flex gap-1 flex-col">

                <MainNew>
                    <ButtonCreateNew/>
                </MainNew>

                <div className="flex flex-col sm:flex-row gap-1 h-4/5">
                    <AsideNews>
                        <ButtonCreateNew/>
                    </AsideNews>

                    <AsideNews>
                        <ButtonCreateNew/>
                    </AsideNews>

                    <AsideNews>
                        <ButtonCreateNew/>
                    </AsideNews>

                </div>
            </section>

        </section>
    )
}