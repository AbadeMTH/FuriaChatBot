import React from "react";
import { Text, ThemeProps, View } from "../Themed";
import { Image, StyleSheet } from "react-native";
interface props extends ThemeProps {
    message: string;
    time: string;
    isUser: boolean;
}

export function MessageBox(props: props) {
    return (
        <View
            style={[
                styles.containerChatbot,
                props.isUser ? styles.alignRight : styles.alignLeft,
            ]}
        >
            {props.isUser ? (
                <View
                    lightColor="boxMessageUserBackground"
                    darkColor="boxMessageUserBackground"
                    style={styles.boxMessageUser}
                >
                    <Text
                        darkColor="textMessage"
                        lightColor="textMessage"
                        style={styles.boxTextUser}
                    >
                        {props.message}
                    </Text>
                    <View
                        lightColor="boxMessageUserBackground"
                        darkColor="boxMessageUserBackground"
                        style={styles.boxTimeChat}
                    >
                        <Text
                            darkColor="textMessage"
                            lightColor="textMessage"
                            style={styles.textTimeChat}
                        >
                            {props.time}
                        </Text>
                    </View>
                </View>
            ) : (
                <View style={styles.containerBot}>
                    <View
                        darkColor="iconBackgroundColor"
                        lightColor="iconBackgroundColor"
                        style={styles.iconMessageChatContainer}
                    >
                        <Image
                            source={require("../../assets/images/logo-furia.png")}
                            style={styles.iconMessageChat}
                        />
                    </View>

                    <View
                        darkColor="chatbotBackground"
                        lightColor="chatbotBackground"
                        style={styles.boxMessageChat}
                    >
                        <Text
                            darkColor="textMessage"
                            lightColor="textMessage"
                            style={styles.boxTextChat}
                        >
                            {props.message}
                        </Text>
                        <View
                            darkColor="chatbotBackground"
                            lightColor="chatbotBackground"
                            style={styles.boxTimeChat}
                        >
                            <Text
                                darkColor="textMessage"
                                lightColor="textMessage"
                                style={styles.textTimeChat}
                            >
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
        borderTopEndRadius: 0,
        borderRadius: 10,
        padding: 10,
        maxWidth: "80%",
    },
    boxTextUser: {
        fontSize: 16,
    },
    iconMessageChatContainer: {
        borderRadius: 50,
        marginRight: 10,
        padding: 2,
    },
    iconMessageChat: {
        width: 20,
        height: 20,
    },
    boxMessageChat: {
        borderTopStartRadius: 0,
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
    },
    textTimeChat: {
        fontSize: 10,
        marginTop: 5,
    },
    containerBot: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
});
