import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "./ThemeContext";

export function ThemeToggleButton() {
    const { toggleTheme } = useTheme();

    return (
        <TouchableOpacity onPress={toggleTheme} style={styles.button}>
            <Text>Alterar Tema</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ccc",
        padding: 10,
        borderRadius: 8,
        margin: 20,
    },
});
