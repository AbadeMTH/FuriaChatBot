import { useTheme } from "./themeToggleButton/ThemeContext";

export function useColorScheme() {
    const { theme } = useTheme();
    return theme;
}
