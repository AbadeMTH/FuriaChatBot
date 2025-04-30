const tintColorLight = "#EF4444";
const tintColorDark = "#EF4444";
const paletteColor = {
    r50: "#FEF2F2",
    r100: "#FEE2E2",
    r200: "#FECACA",
    r300: "#FCA5A5",
    r400: "#F87171",
    r500: "#EF4444", // Main Furia red
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
};

export type Colors = "light" | "dark";

export default {
    paletteColor,
    light: {
        text: "#111827",
        background: "#FFFFFF",
        tint: tintColorLight,
        tabIconDefault: "#ccc",
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: "#FFFFFF",
        background: "#111827",
        tint: tintColorDark,
        tabIconDefault: "#ccc",
        tabIconSelected: tintColorDark,
    },
};
