import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "../Themed";
import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@/theme/ThemeContext";

type Props = {
    onSendMessage: (text: string, isUser: boolean) => void;
};

export function ChatInput({ onSendMessage }: Props) {
    const {theme} = useTheme();
    const [disabled, setDisabled] = useState(false);
    const [input, setInput] = useState("");
    function handleSend() {
        if (input.trim() === "") return; //Evita o envio de mensagens vazias
        onSendMessage(input, true);
        setInput("");
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 800);
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Digite sua mensagem..."
                placeholderTextColor={theme === "light" ? '#000' : "#FFF"}
                value={input}
                onChangeText={(text) => setInput(text)}
                multiline={false}
                style={[styles.textInput, {color: theme === "light" ? '#000' : "#FFF"}]}
                darkColor="textinputBackground"
                lightColor="textinputBackground"
            />
            <TouchableOpacity
                style={styles.sendMessageButton}
                disabled={disabled}
                onPress={handleSend}
                darkColor="textinputBackground"
                lightColor="textinputBackground"
            >
                <FontAwesome size={20} name="send-o" color={theme === "light" ? '#000' : "#FFF"} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 70,
    },
    textInput: {
        borderRadius: 50,
        width: "84%",
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
    sendMessageButton: {
        width: "10%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        marginHorizontal: "2%",
    },
});
