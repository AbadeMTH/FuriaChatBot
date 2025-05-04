import React from "react";
import { Text, View } from "../Themed";
import { Matches } from "./matches_championshipsCardUtils/macthes_championshipsMock";
import { Image, StyleSheet } from "react-native";
import { paletteColor } from "@/constants/Colors";

export function MatchesCard(props: Matches) {
    return (
        <View style={styles.container}>
            <Text
                lightColor="championShipTitle"
                style={styles.championshipName}
            >
                {props.championship}
            </Text>
            <View style={styles.containerVS}>
                <View>
                    <Image source={props.team1Image} style={styles.teamImage} />
                    <Text
                        lightColor="championShipTitle"
                        style={styles.teamName}
                    >
                        {props.team1}
                    </Text>
                </View>
                <Text lightColor="championShipTitle" style={styles.textVS}>
                    VS
                </Text>
                <View>
                    <Image source={props.team2Image} style={styles.teamImage} />
                    <Text
                        lightColor="championShipTitle"
                        style={styles.teamName}
                    >
                        {props.team2}
                    </Text>
                </View>
            </View>
            <Text
                darkColor="dateChampionship"
                lightColor="dateChampionship"
                style={styles.dateMatch}
            >
                {props.dateMatch}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        width: "80%",
        marginLeft: "10%",
        margin: 20,
        padding: 15,
        borderRadius: 10,
        borderColor: paletteColor.r500,
        paddingLeft: 10,
        borderWidth: 1,
        elevation: 6,
    },
    teamImage: {
        width: 50,
        height: 50,
        margin: 20,
    },
    containerVS: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    textVS: {
        marginHorizontal: 20,
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    teamName: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    dateMatch: {
        textAlign: "center",
        fontStyle: "italic",
    },
    championshipName: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
