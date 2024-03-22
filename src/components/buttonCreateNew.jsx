import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useThemeContext } from "../providers/ThemeProviter"

import PropTypes from 'prop-types'

export function ButtonCreateNew() {

    const theme = useThemeContext()

    const iconColor = theme === 'dark' ? '#1a1a1a' : '#FFFFEC';

    return (
        <div className="cursor-pointer">
            <FontAwesomeIcon
                icon={faPlus}
                size="xl"
                style={{ color: iconColor }}
            />
        </div>
    );
}

ButtonCreateNew.propTypes = {
    theme: PropTypes.string,
}