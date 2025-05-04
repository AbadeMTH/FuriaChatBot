import { Colors } from "@/constants/Colors";
import React, { createContext, useState, useContext } from "react";

type ThemeContextType = {
    theme: Colors;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Colors>("dark");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
