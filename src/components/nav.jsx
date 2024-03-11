import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

export function Nav ({children}) {
    return(
        <nav className="bg-transparent flex justify-between font-titulos font-bold items-center text-black dark:text-primary-color h-14 relative pt-5">
                <div className="text-3xl z-10">
                    MeowMelody
                </div>

                <div className="">
                    <Link className="text-xl px-3 py-1" to='/createNew'>
                        Create
                    </Link>
                    {children}
                </div>
        </nav>
    )
}

Nav.propTypes = {
    children:PropTypes.node
}