import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import PropTypes from 'prop-types'

export function ChangeTheme({ toggleTheme, theme }) {
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