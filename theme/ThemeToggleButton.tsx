import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "./ThemeContext";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export function ThemeToggleButton() {
    const { toggleTheme, theme } = useTheme();

    return (
        <>
            {theme === "light" ? (
                <TouchableOpacity onPress={toggleTheme} style={styles.button}>
                    <FontAwesome name="moon-o" size={24} color="black" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={toggleTheme} style={styles.button}>
                    <FontAwesome name="sun-o" size={24} color="white" />
                </TouchableOpacity>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        marginRight: 20,
    },
});
