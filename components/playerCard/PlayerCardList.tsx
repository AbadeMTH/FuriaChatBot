import React from "react";
import { Text, View } from "../Themed";
import { FlatList, StyleSheet } from "react-native";
import { furiaTeam, TeamMember } from "./playerCardUtils/teamMock";
import { PlayerCard } from "./PlayerCard";

export function PlayerCardList() {
    const players: TeamMember[] = furiaTeam.filter((data) => data.id !=6 );
    const coach: TeamMember | undefined = furiaTeam.find((data) =>  data.id === 6)
    function renderItem({ item }: { item: TeamMember }) {
        return <PlayerCard {...item} />;
    }
    function renderFooterItem(coach: TeamMember) {
        
        return (
            <>
                <Text>Coach</Text>
                {coach && <PlayerCard {coach: }/>}
            </>
        )
    }
    

    return (
        <View style={styles.container}>
            <Text>Players</Text>
            <FlatList
                data={players}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.content}
                ListFooterComponent={renderFooterItem}
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
    content: {
        width: "100%"
    }
});
