import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

export function Footer() {
    return (
        <section className="mx-5 md:mx-16 lg:mx-28 xl:mx-48 2xl:mx-80 h-[5vh] flex items-center">
            <footer className="bg-transparent w-full items-center flex justify-between dark:text-primary-color">
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