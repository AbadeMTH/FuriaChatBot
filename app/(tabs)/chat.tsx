import {
    FlatList,
    ImageBackground,
    KeyboardAvoidingView,
    StyleSheet,
    View as RNView
} from "react-native";

import { Text, View } from "@/components/Themed";
import { MessageBox } from "@/components/chat/MessageBox";
import { ChatInput } from "@/components/chat/ChatInput";
import { Message } from "@/components/chat/chatUtils/chatMock";
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

        setMessages((prev) => [...prev, newMessage]);

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
        <ImageBackground
            source={require("../../assets/images/teams/logo-furia.png")}
            style={styles.background}
            imageStyle={styles.imageStyle}
        >
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                keyboardVerticalOffset={90}
            >
                {messages.length === 0 ? (
                    //View padrão do React Native utilizada para não atrapalhar na visualização da logo da furia
                    <RNView style={styles.messageEmptyChatBox}>
                        <Text darkColor="text" lightColor="black" style={styles.messageEmptyChat}>
                            Digite sua primeira mensagem meu furioso!
                        </Text>
                    </RNView>
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
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    imageStyle: {
        resizeMode: "contain",
        opacity: 0.2,
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
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
        color: "white",
    },
    listContentStyle: {
        paddingBottom: 20,
        paddingTop: 10,
    },
});
