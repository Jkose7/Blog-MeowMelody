import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export function ButtonCreateNew({ theme }) {
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