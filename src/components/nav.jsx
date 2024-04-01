import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { ChangeTheme } from "./changeTheme"

import { useThemeContext, useChangeThemeContext } from "../providers/ThemeProviter"


export function Nav() {

    const theme = useThemeContext()
    const toggleTheme = useChangeThemeContext()

    return (
        <nav className=" flex justify-between font-titulos font-bold items-center text-black 
        dark:text-primary-color h-14  top-0 bg-primary-color dark:bg-second-color border-b-2 border-black dark:border-primary-color
        minicel:w-full">
            
            <Link className="minicel:text-lg celular:text-xl sm:text-2xl lg:text-3xl" to="/">
                MeowMelody
            </Link>

            <div className="">
                <Link className="minicel:text-md celular:text-xl  px-3 py-1" to='/createNew'>
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