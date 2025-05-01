import React from "react";
import { Text, View } from "../Themed";
import { Image, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
type props = {
    message: string;
    time: string;
    isUser: boolean;
};

export function MessageBox(props: props) {
    return (
        <View
            style={[
                styles.containerChatbot,
                props.isUser ? styles.alignRight : styles.alignLeft,
            ]}
        >
            {props.isUser ? (
                <View style={styles.boxMessageUser}>
                    <Text style={styles.boxTextUser}>{props.message}</Text>
                    <View
                        style={[
                            styles.boxTimeChat,
                            { backgroundColor: Colors.dark.tint },
                        ]}
                    >
                        <Text style={styles.textTimeChat}>{props.time}</Text>
                    </View>
                </View>
            ) : (
                <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                    <View style={styles.iconMessageChatContainer}>
                        <Image
                            source={require("../../assets/images/logo-furia.png")}
                            style={styles.iconMessageChat}
                        />
                    </View>

                    <View style={styles.boxMessageChat}>
                        <Text style={styles.boxTextChat}>{props.message}</Text>
                        <View style={styles.boxTimeChat}>
                            <Text style={styles.textTimeChat}>
                                {props.time}
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    containerChatbot: {
        width: "100%",
        paddingHorizontal: 20,
        marginVertical: 7,
        flexDirection: "row",
    },
    alignRight: {
        justifyContent: "flex-end",
    },
    alignLeft: {
        justifyContent: "flex-start",
    },
    boxMessageUser: {
        backgroundColor: Colors.dark.tint,
        borderRadius: 10,
        padding: 10,
        maxWidth: "80%",
    },
    boxTextUser: {
        fontSize: 16,
    },
    iconMessageChatContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        marginRight: 10,
        padding: 2,
    },
    iconMessageChat: {
        width: 20,
        height: 20,
    },
    boxMessageChat: {
        backgroundColor: Colors.dark.chatbotBackground,
        borderRadius: 10,
        padding: 10,
        maxWidth: "80%",
    },
    boxTextChat: {
        fontSize: 16,
    },
    boxTimeChat: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: Colors.dark.chatbotBackground,
    },
    textTimeChat: {
        fontSize: 10,
        color: Colors.dark.text,
        marginTop: 5,
    },
});
