import { Link } from "react-router-dom"
import { Aside_news } from "../components/Aside_news"
import { ChangeTheme } from "../components/changeTheme"

export function Index() {
    return (
        <section className="mx-28 xl:mx-80 gap-7 flex flex-col h-screen">
            <nav className="bg-transparent flex justify-between font-titulos items-center text-black h-14 relative">
                <div className="text-3xl z-10">
                    MeowMelody
                </div>

                <div className="">
                    <Link className="text-xl px-3 py-1" to='/createNew'>
                        Create
                    </Link>
                    <ChangeTheme/>
                </div>
            </nav>

            <section className="h-full flex gap-1 flex-col z-10">
                <div className="bg-second-color dark:bg-primary-color flex justify-center h-96 ">
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

            <footer className="bg-transparent w-full items-center flex justify-between py-4">
                <div className="">
                    <h1>By <span>Future</span></h1>
                </div>
                <div className="bg-black h-[1px] w-3/5">

                </div>
                <div className="">
                    <a href="">G</a>
                    <a href="">I</a>
                    <a href="">L</a>
                </div>
            </footer>
        </section>
    )
}