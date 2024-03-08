import { Aside_news } from "../components/Aside_news"

export function Index() {
    return (
        <section className="mx-28 xl:mx-80 gap-7 flex flex-col">
            <nav className="bg-transparent flex justify-between font-titulos items-center text-primary-color h-14">
                <div className="text-3xl">
                    MeowMelody
                </div>

                <div className="hover:bg-primary-color hover:text-black rounded-sm transition-all duration-150">
                    <button className="text-xl px-3 py-1">Create</button>
                </div>
            </nav>

            <section className="h-full flex gap-1 flex-col">
                <div className="bg-slate-600 flex justify-center h-96 ">
                    <article >
                        Noticia 1
                    </article>
                </div>

                <div className="flex gap-1">
                    <Aside_news/>
                    <Aside_news/>
                    <Aside_news/>
                </div>
            </section>

            <footer className="bg-transparent flex items-center w-full justify-between">
                <div>
                    <h1>By Future</h1>
                </div>
                <div className="bg-third-color  h-[2px] w-full"></div>
                <div>
                    <a href="">G</a>
                    <a href="">I</a>
                    <a href="">L</a>
                </div>
            </footer>
        </section>
    )
}