import { FlatList, KeyboardAvoidingView, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { MessageBox } from "@/components/chat/MessageBox";
import { ChatInput } from "@/components/chat/ChatInput";
import { messages } from "@/components/chat/mocks";

export default function ChatScreen() {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <FlatList
                    data={messages}
                    renderItem={({ item }) => (
                        <MessageBox message={item.text} isUser={item.isUser} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
                <ChatInput />
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
