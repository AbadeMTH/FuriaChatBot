import React, { useState } from "react";
import { Text, View } from "../Themed";
import { Pressable, StyleSheet, TextInput } from "react-native";

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
                multiline={true}
                style={{ width: "80%" }}
            />
            <Pressable disabled={disabled} onPress={handleSend}>
                <Text>Enviar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
    },
});
