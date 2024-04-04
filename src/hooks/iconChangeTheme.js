import { useThemeContext } from "../providers/ThemeProviter";

export const useChangeTheme = () => {
    const theme = useThemeContext();
    const iconColor = theme === 'dark' ? '#FFFFEC' : '#1a1a1a'
    const invertIconColor = theme === 'dark' ? '#1a1a1a' : '#FFFFEC'

    return {iconColor, invertIconColor}
}

