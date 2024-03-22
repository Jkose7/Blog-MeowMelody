import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import PropTypes from 'prop-types'
import { useThemeContext, useChangeThemeContext } from "../providers/ThemeProviter"

export function ChangeTheme() {

    const theme = useThemeContext()
    const toggleTheme = useChangeThemeContext()

    return (
        <button onClick={toggleTheme}>
            {
                theme === 'light' ?
                    <FontAwesomeIcon
                        icon={faMoon}
                        size="lg"
                    />
                    :
                    <FontAwesomeIcon
                        icon={faSun}
                        size="lg"
                    />

            }
        </button>
    )
}

ChangeTheme.propTypes = {
    toggleTheme: PropTypes.func,
    theme: PropTypes.string
}