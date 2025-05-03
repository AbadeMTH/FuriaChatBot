import React from "react";
import { View } from "../Themed";
import { FlatList, StyleSheet } from "react-native";
import { furiaTeam, TeamMember } from "./playerCardUtils/teamMock";
import { PlayerCard } from "./PlayerCard";

export function PlayerCardList() {
    function renderItem({ item }: { item: TeamMember }) {
        return <PlayerCard {...item} />;
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={furiaTeam}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        width: "100%"
    },
});
