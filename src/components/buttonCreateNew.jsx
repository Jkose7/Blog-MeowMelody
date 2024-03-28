import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw } from "@fortawesome/free-solid-svg-icons"
import { useThemeContext } from "../providers/ThemeProviter"

import { Link } from "react-router-dom" 

import PropTypes from 'prop-types'

export function ButtonCreateNew() {

    const theme = useThemeContext()

    const iconColor = theme === 'dark' ? '#1a1a1a' : '#FFFFEC';

    return (
        <Link to="/createNew" className="cursor-pointer transition-all hover:scale-125">
            <FontAwesomeIcon
                icon={faPaw}
                size="xl"
                style={{ color: iconColor }}
            />
        </Link>
    );
}

ButtonCreateNew.propTypes = {
    theme: PropTypes.string,
}