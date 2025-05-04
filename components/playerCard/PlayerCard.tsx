import React from "react";
import { Text, View } from "../Themed";
import { TeamMember } from "./playerCardUtils/teamMock";
import { Image, ImageBackground, StyleSheet } from "react-native";

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
                <ImageBackground
                    style={styles.backgroundImage}
                    source={require("../../assets/images/teams/logo-furia.png")}
                    imageStyle={styles.logoFuriaBackground}
                >
                    <Image source={props.imageUrl} style={styles.image} />
                </ImageBackground>
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
                    >
                        <Text
                            darkColor="text"
                            lightColor="white"
                            style={styles.subinfoTitle}
                        >
                            Rating
                        </Text>
                        <Text
                            darkColor="playerSubInfos"
                            lightColor="playerSubInfos"
                            style={styles.subinfo}
                        >
                            {props.rating}
                        </Text>
                    </View>

                    <View
                        darkColor="playerCardBackground"
                        lightColor="playerCardBackground"
                    >
                        <Text
                            darkColor="text"
                            lightColor="white"
                            style={styles.subinfoTitle}
                        >
                            K/R
                        </Text>
                        <Text
                            darkColor="playerSubInfos"
                            lightColor="playerSubInfos"
                            style={styles.subinfo}
                        >
                            {props.kr}
                        </Text>
                    </View>
                    <View
                        darkColor="playerCardBackground"
                        lightColor="playerCardBackground"
                    >
                        <Text
                            darkColor="text"
                            lightColor="white"
                            style={styles.subinfoTitle}
                        >
                            HS%
                        </Text>
                        <Text
                            darkColor="playerSubInfos"
                            lightColor="playerSubInfos"
                            style={styles.subinfo}
                        >
                            {props.hs}
                        </Text>
                    </View>
                    <View
                        darkColor="playerCardBackground"
                        lightColor="playerCardBackground"
                    >
                        <Text
                            darkColor="text"
                            lightColor="white"
                            style={styles.subinfoTitle}
                        >
                            Maps
                        </Text>
                        <Text
                            darkColor="playerSubInfos"
                            lightColor="playerSubInfos"
                            style={styles.subinfo}
                        >
                            {props.maps}
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
        elevation: 6,
    },
    imageContainer: {
        width: "100%",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        height: 200,
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
        justifyContent: "space-between",
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
    subinfoTitle: {
        fontSize: 14,
        fontWeight: "bold",
    },
    subinfo: {
        fontSize: 14,
        fontStyle: "italic",
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    logoFuriaBackground: {
        opacity: 0.2,
        resizeMode: "contain",
        position: "absolute",
        width: "100%",
        height: "100%",
    },
});
