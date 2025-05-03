import { useTheme } from "@/theme/ThemeContext";

export function useColorScheme() {
    const { theme } = useTheme();
    return theme;
}
