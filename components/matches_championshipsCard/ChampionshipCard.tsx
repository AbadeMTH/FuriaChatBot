import React from "react";
import { Text, View } from "../Themed";
import { Image, StyleSheet } from "react-native";
import { Championships } from "./matches_championshipsCardUtils/macthes_championshipsMock";
import { paletteColor } from "@/constants/Colors";

export function ChampionshipCard(props: Championships) {
    return (
        <View  style={styles.container}>
            <View
                
                style={styles.championshipContainer}
            >
                <Image
                    source={props.imageChampionship}
                    style={styles.imageChampionship}
                />
                <Text lightColor="championShipTitle" style={styles.titleChampionship}>
                    {props.championship}
                </Text>
            </View>
            <Text
                darkColor="playerFullName"
                lightColor="dateChampionship"
                style={styles.dateChampionship}
            >
                {props.date}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "80%",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: "10%",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: paletteColor.r500,
        marginTop: 20,
        elevation: 6,
    },
    championshipContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
    },
    imageChampionship: {
        marginRight: "10%",
        height: 70,
        width: 70,
        margin: 20,
    },
    titleChampionship: {
        fontSize: 16,
        fontWeight: "bold",
        width: "60%",
    },
    dateChampionship: {
        marginBottom: 10,
        fontStyle: "italic",
    },
});
