import { FlatList, KeyboardAvoidingView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { MessageBox } from "@/components/chat/MessageBox";
import { ChatInput } from "@/components/chat/ChatInput";
import { Message } from "@/components/chat/chatUtils/mocks";
import { useRef, useState } from "react";
import { findResponse } from "@/components/chat/chatUtils/findResponse";

export default function ChatScreen() {
    const [messages, setMessages] = useState<Message[]>([]);
    const flatlistRef = useRef<FlatList>(null);

    function getActualTime() {
        const date = new Date();
        const actualTimeBrasilia = new Intl.DateTimeFormat("pt-BR", {
            timeZone: "America/Sao_Paulo",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }).format(date);

        return actualTimeBrasilia;
    }

    function scrollListToBottom() {
        setTimeout(() => {
            flatlistRef.current?.scrollToEnd({ animated: true });
        }, 100);
    }

    function handleSendMessage(text: string, isUser: boolean) {
        const newMessage: Message = {
            id: messages.length + 1,
            text,
            isUser,
            time: getActualTime(),
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
                        time: getActualTime(),
                    },
                ]);
            }, 500);
        }
    }

    //Renderiza cada item da lista de mensagens de forma performática
    function renderItem({ item }: { item: Message }) {
        return (
            <MessageBox
                message={item.text}
                isUser={item.isUser}
                time={item.time}
            />
        );
    }
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
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        onContentSizeChange={scrollListToBottom}
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
        textAlign: "center",
    },
    listContentStyle: {
        paddingBottom: 20,
        paddingTop: 10,
    },
});
