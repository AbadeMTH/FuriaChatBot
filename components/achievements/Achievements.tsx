import React from "react";
import { Text, View } from "../Themed";
import { AchievementsType } from "./achievementsUtils/achievementsMock";
import { Image, StyleSheet } from "react-native";
import { paletteColor } from "@/constants/Colors";

export function Achievements(props: AchievementsType) {
    return (
        <View style={styles.container}>
            <Text style={styles.championship}>{props.championship}</Text>
            <View style={styles.vsContainer}>
                <View style={styles.teamContainer}>
                    <Image source={props.team1Image} style={styles.teamImage} />
                    <Text style={styles.teamName}>{props.team1}</Text>
                </View>
                <Text style={styles.result}>{props.result}</Text>
                <View style={styles.teamContainer}>
                    <Image source={props.team2Image} style={styles.teamImage} />
                    <Text style={styles.teamName}>{props.team2}</Text>
                </View>
            </View>
            <View style={styles.infosContainer}>
                <View style={styles.infos}>
                    <Text style={styles.infoTitle}>Colocação</Text>
                    <Text style={styles.info}>{props.placement}</Text>
                </View>
                <View style={styles.infos}>
                    <Text style={styles.infoTitle}>Premiação</Text>
                    <Text style={styles.info}> {props.prize}</Text>
                </View>
            </View>
            <Text style={styles.date}>{props.date}</Text>
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
        marginVertical: "5%",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: paletteColor.r500,
        padding: 10,
        elevation: 6,
    },
    teamImage: {
        width: 50,
        height: 50,
    },
    championship: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
        margin: 10,
    },
    vsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    teamName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    result: {
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "italic",
        marginHorizontal: 15,
    },
    infosContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginTop: 10,
    },
    infos: {
        justifyContent: "center",
        alignItems: "center",
    },
    infoTitle: {
        fontSize: 12,
        fontWeight: "bold",
    },
    info: {
        fontSize: 12,
        fontStyle: 'italic'
    },
    date: {
        fontSize: 12,
        fontWeight: 'bold',
        fontStyle: 'italic',
        margin: 15,
    },
    teamContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
