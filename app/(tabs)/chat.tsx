import { FlatList, KeyboardAvoidingView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { MessageBox } from "@/components/chat/MessageBox";
import { ChatInput } from "@/components/chat/ChatInput";
import { Message } from "@/components/chat/mocks";
import { useEffect, useRef, useState } from "react";
import { findResponse } from "@/components/chat/utils/findResponse";

export default function ChatScreen() {
    const [messages, setMessages] = useState<Message[]>([]);
    const flatlistRef = useRef<FlatList>(null);
    useEffect(() => {
        if (flatlistRef.current) {
            flatlistRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);

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
            <KeyboardAvoidingView>
                {messages.length == 0 ? (
                    <>
                        <Text>Digite sua primeira mensagem meu furioso!</Text>
                        <ChatInput onSendMessage={handleSendMessage} />
                    </>
                ) : (
                    <>
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
                        />
                        <ChatInput onSendMessage={handleSendMessage} />
                    </>
                )}
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
