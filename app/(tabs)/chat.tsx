import { FlatList, KeyboardAvoidingView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { MessageBox } from "@/components/chat/MessageBox";
import { ChatInput } from "@/components/chat/ChatInput";
import { Message } from "@/components/chat/chatUtils/mocks";
import { useRef, useState } from "react";
import { findResponse } from "@/components/chat/chatUtils/findResponse";
import Colors from "@/constants/Colors";

export default function ChatScreen() {
    const [messages, setMessages] = useState<Message[]>([]);
    const flatlistRef = useRef<FlatList>(null);

    const handleSendMessage = (text: string, isUser: boolean) => {
        const newMessage: Message = {
            id: messages.length + 1,
            text,
            isUser,
        };

        //Adiciona a mensagem do usuário à lista de mensagens
        setMessages((prev) => [...prev, newMessage]);

        //Resposta do bot baseada na mensagem do usuário após um pequeno delay e adiciona à lista de mensagens
        if (isUser) {
            const botResponse = findResponse(text);
            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    {
                        id: messages.length + 2,
                        text: botResponse || "Desculpe, não entendi.",
                        isUser: false,
                    },
                ]);
            }, 500);
        }
    };
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                keyboardVerticalOffset={90}
            >
                {messages.length === 0 ? (
                    <View style={styles.messageEmptyChatBox}>
                        <Text style={styles.messageEmptyChat}>
                            Digite sua primeira mensagem meu furioso!
                        </Text>
                    </View>
                ) : (
                    <FlatList
                        ref={flatlistRef}
                        data={messages}
                        renderItem={({ item }) => (
                            <MessageBox
                                message={item.text}
                                isUser={item.isUser}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        onContentSizeChange={() =>
                            flatlistRef.current?.scrollToEnd({ animated: true })
                        }
                        contentContainerStyle={styles.listContentStyle}
                    />
                )}
                <ChatInput onSendMessage={handleSendMessage} />
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
    messageEmptyChatBox: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    messageEmptyChat: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.light.text,
        textAlign: "center",
    },
    listContentStyle: {
        paddingBottom: 20,
        paddingTop: 10,
    },
});
