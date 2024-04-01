import { useThemeContext } from "../providers/ThemeProviter";

export const iconChangeTheme = () => {
    const theme = useThemeContext();
    const iconColor = theme === 'dark' ? '#FFFFEC' : '#1a1a1a'

    return iconColor
}

