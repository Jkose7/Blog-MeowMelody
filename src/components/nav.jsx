import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { ChangeTheme } from "./changeTheme"

export function Nav({ theme, toggleTheme }) {
    return (
        <section className="mx-5 md:mx-16 lg:mx-28 xl:mx-48 2xl:mx-80"> 
            <nav className="bg-transparent flex justify-between font-titulos font-bold items-center text-black dark:text-primary-color h-14">
                <div className="text-3xl z-10">
                    MeowMelody
                </div>

                <div className="">
                    <Link className="text-xl px-3 py-1" to='/createNew'>
                        Create
                    </Link>
                    <ChangeTheme theme={theme} toggleTheme={toggleTheme}></ChangeTheme>
                </div>
            </nav>
        </section>
    )
}

Nav.propTypes = {
    children: PropTypes.node
}