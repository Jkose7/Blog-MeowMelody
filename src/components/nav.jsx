import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { ChangeTheme } from "./changeTheme"

import { useThemeContext, useChangeThemeContext } from "../providers/ThemeProviter"


export function Nav() {

    const theme = useThemeContext()
    const toggleTheme = useChangeThemeContext()

    return (
        <nav className="bg-transparent flex justify-between font-titulos font-bold items-center text-black dark:text-primary-color h-14">
            <Link className="text-3xl z-10" to="/">
                MeowMelody
            </Link>

            <div className="">
                <Link className="text-xl px-3 py-1" to='/createNew'>
                    Create
                </Link>
                <ChangeTheme theme={theme} toggleTheme={toggleTheme}></ChangeTheme>
            </div>
        </nav>
    )
}

Nav.propTypes = {
    children: PropTypes.node
}