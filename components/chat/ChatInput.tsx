import React, { useState } from "react";
import { Text, View } from "../Themed";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";

type Props = {
    onSendMessage: (text: string, isUser: boolean) => void;
};

export function ChatInput({ onSendMessage }: Props) {
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
                placeholderTextColor="#888"
                value={input}
                onChangeText={(text) => setInput(text)}
                multiline={false}
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.sendMessageButton} disabled={disabled} onPress={handleSend}>
                <Text>></Text>
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
        height: 50,
    },
    textInput: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.paletteColor.b500,
        width: "84%",
        paddingLeft: 15,
    },
    sendMessageButton: {
        width: "10%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginHorizontal: "2%",
        borderWidth: 1,
        borderColor: Colors.paletteColor.b500,
    }
});
