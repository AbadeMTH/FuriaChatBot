export type Colors = "light" | "dark";
const paletteColor = {
    r50: "#FEF2F2",
    r100: "#FEE2E2",
    r200: "#FECACA",
    r300: "#FCA5A5",
    r400: "#F87171",
    r500: "#EF4444",
    r600: "#DC2626",
    r700: "#B91C1C",
    r800: "#991B1B",
    r900: "#7F1D1D",
    b50: "#F9FAFB",
    b100: "#F3F4F6",
    b200: "#E5E7EB",
    b300: "#D1D5DB",
    b400: "#9CA3AF",
    b500: "#6B7280",
    b600: "#4B5563",
    b700: "#374151",
    b800: "#1F2937",
    b900: "#111827",
    white: "#FFFFFF",
    black: "#000000",
};

export const themeColors = {
    dark: {
        text: "#FFFFFF",
        background: "#111827",
        tint: "#EF4444",
        tabIconDefault: "#ccc",
        tabIconSelected: "#EF4444",
        chatbotBackground: paletteColor.b600,
        chatbotText: paletteColor.b100,
        white: "#FFFFFF",
        black: "#000000",
        placeholder: "#888",
        textinputBackground: paletteColor.b700,
        iconBackgroundColor: "#FFFFFF",
        boxMessageUserBackground: paletteColor.r500,
    },
    light: {
        text: "#FFFFFF",
        background: paletteColor.b50,
        tint: "#EF4444",
        tabIconDefault: "#ccc",
        tabIconSelected: "#EF4444",
        chatbotBackground: paletteColor.b600,
        chatbotText: paletteColor.b100,
        white: "#FFFFFF",
        black: "#000000",
        placeholder: "#888",
        textinputBackground: paletteColor.b700,
        iconBackgroundColor: paletteColor.b500,
        boxMessageUserBackground: paletteColor.r500,
    },
};

export type ColorPalette = typeof themeColors.dark &
    typeof themeColors.light &
    typeof paletteColor;
export type ColorPaletteKeys = keyof ColorPalette;
