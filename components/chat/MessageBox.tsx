import React from "react";
import { Text, View } from "../Themed";
import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";
type props = {
    message: string;
    isUser: boolean;
};

export function MessageBox(props: props) {
    return (
        <View
            style={[
                style.containerChatbot,
                props.isUser ? style.alignRight : style.alignLeft,
            ]}
        >
            {props.isUser ? (
                <View style={style.boxMessageUser}>
                    <Text style={style.boxTextUser}>{props.message}</Text>
                </View>
            ) : (
                <View style={style.boxMessageChat}>
                    <Text style={style.boxTextChat}>{props.message}</Text>
                </View>
            )}
        </View>
    );
}

const style = StyleSheet.create({
    containerChatbot: {
        width: "100%",
        paddingHorizontal: 20,
        marginVertical: 2,
        flexDirection: "row",
    },
    alignRight: {
        justifyContent: "flex-end",
    },
    alignLeft: {
        justifyContent: "flex-start",
    },
    boxMessageUser: {
        backgroundColor: Colors.paletteColor.r600,
        borderRadius: 10,
        padding: 10,
        maxWidth: "80%",
        alignSelf: "flex-end",
    },
    boxTextUser: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    boxMessageChat: {
        backgroundColor: Colors.paletteColor.b500,
        borderRadius: 10,
        padding: 10,
        maxWidth: "80%",
    },
    boxTextChat: {
        color: "#FFFFFF",
        fontSize: 16,
    },
});
