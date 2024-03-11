import { Link } from "react-router-dom"

import { AsideNews } from "../components/asideNews"
import { ChangeTheme } from "../components/changeTheme"
import { ButtonCreateNew } from "../components/buttonCreateNew"
import { MainNew } from "../components/mainNew"

import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

export function Index() {

    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-colors-sheme: dark)").matches) {
            return 'dark'
        }

        return 'light'
    })

    useEffect(() => {
        theme === 'dark' ?
            document.querySelector('html').classList.add('dark')
            :
            document.querySelector('html').classList.remove('dark')
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }


    return (
        <section className="mx-5 md:mx-16 lg:mx-28 xl:mx-80 gap-5 flex flex-col h-screen">
            <nav className="bg-transparent flex justify-between font-titulos font-bold items-center text-black dark:text-primary-color h-14 relative pt-5">
                <div className="text-3xl z-10">
                    MeowMelody
                </div>

                <div className="">
                    <Link className="text-xl px-3 py-1" to='/createNew'>
                        Create
                    </Link>
                    <ChangeTheme toggleTheme={toggleTheme} theme={theme} />
                </div>
            </nav>

            <section className="h-screen flex gap-1 flex-col">

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

            <footer className="bg-transparent w-full items-center flex justify-between py-4 dark:text-primary-color">
                <div className="">
                    <h1 className="font-text-alt font-bold">By <span className="text-xl font-titulos font-extrabold">
                        Future
                    </span>
                    </h1>
                </div>
                <div className="bg-black dark:bg-primary-color h-[2px] w-3/5 rounded-full">

                </div>
                <div className="flex gap-3">
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="xl"
                    />
                    <FontAwesomeIcon
                        icon={faInstagram}
                        size="xl"
                    />
                    <FontAwesomeIcon
                        icon={faTwitter}
                        size="xl"
                    />
                </div>
            </footer>
        </section>
    )
}