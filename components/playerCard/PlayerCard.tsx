import React from "react";
import { Text, View } from "../Themed";
import { TeamMember } from "./playerCardUtils/teamMock";
import { Image, StyleSheet } from "react-native";

export function PlayerCard(props: TeamMember) {
    return (
        <View
            darkColor="playerCardBackground"
            lightColor="playerCardBackground"
            style={styles.container}
        >
            <View
                darkColor="playerImageBackground"
                lightColor="playerImageBackground"
                style={styles.imageContainer}
            >
                <Image source={props.imageUrl} style={styles.image} />
            </View>
            <View
                darkColor="playerCardBackground"
                lightColor="playerCardBackground"
                style={styles.containerInfos}
            >
                <View
                    darkColor="playerCardBackground"
                    lightColor="playerCardBackground"
                >
                    <Text
                        darkColor="text"
                        lightColor="white"
                        style={styles.nickname}
                    >
                        {props.nickname}
                    </Text>
                    <Text
                        darkColor="playerFullName"
                        lightColor="playerFullName"
                        style={styles.fullName}
                    >
                        {props.fullName}
                    </Text>
                </View>
                <View
                    darkColor="playerCardBackground"
                    lightColor="playerCardBackground"
                    style={styles.infos}
                >
                    <View
                        darkColor="playerCardBackground"
                        lightColor="playerCardBackground"
                        style={{ width: "50%" }}
                    >
                        <Text
                            darkColor="text"
                            lightColor="white"
                            style={styles.countryTitle}
                        >
                            Nacionalidade
                        </Text>
                        <Text
                            darkColor="playerSubInfos"
                            lightColor="playerSubInfos"
                            style={styles.country}
                        >
                            {props.country}
                        </Text>
                    </View>

                    <View
                        darkColor="playerCardBackground"
                        lightColor="playerCardBackground"
                        style={{ width: "50%" }}
                    >
                        <Text
                            darkColor="text"
                            lightColor="white"
                            style={styles.countryTitle}
                        >
                            Role
                        </Text>
                        <Text
                            darkColor="playerSubInfos"
                            lightColor="playerSubInfos"
                            style={styles.country}
                        >
                            {props.role}
                        </Text>
                    </View>
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
        marginLeft: "10%",
        marginVertical: "5%",
        borderRadius: 30,
    },
    imageContainer: {
        width: "100%",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
    containerInfos: {
        width: "100%",
        padding: 30,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
    },
    infos: {
        flexDirection: "row",
        width: "100%",
    },
    nickname: {
        fontSize: 20,
        fontWeight: "bold",
    },
    fullName: {
        fontSize: 14,
        marginTop: 3,
        marginBottom: 15,
    },
    countryTitle: {
        fontSize: 14,
        fontWeight: "bold",
    },
    country: {
        fontSize: 14,
        fontStyle: "italic",
    },
});
