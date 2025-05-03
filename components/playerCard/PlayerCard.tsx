import React from "react";
import { Text, View } from "../Themed";
import { TeamMember } from "./playerCardUtils/teamMock";
import { Image, StyleSheet } from "react-native";

export function PlayerCard(props: TeamMember) {
    return (
        <View style={styles.container}>
            <View>
                <Image source={{uri: props.imageUrl}} />
            </View>
            <View>
                <View>
                    <Text>
                        {props.nickname} - {props.fullName}
                    </Text>
                </View>
                <View>
                    <Text>{props.country}</Text>
                    <Text>{props.role}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        height: 300,
    },
});
