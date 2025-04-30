import React from "react";
import { Text, View } from "../Themed";
import { TextInput } from "react-native";

export function ChatInput() {
    return (
        <View>
            <TextInput
                placeholder="Digite sua mensagem"
                placeholderTextColor="#888"
                multiline={false}
                numberOfLines={1}
                maxLength={100}
            ></TextInput>
        </View>
    );
}
