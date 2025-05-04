import React from "react";
import { Text, View } from "../Themed";
import { FlatList, StyleSheet } from "react-native";
import { furiaTeam, TeamMember } from "./playerCardUtils/teamMock";
import { PlayerCard } from "./PlayerCard";

export function PlayerCardList() {
    const players: TeamMember[] = furiaTeam.filter((data) => data.id != 6);
    const coach: TeamMember | undefined = furiaTeam.find(
        (data) => data.id === 6
    );
    const bench: TeamMember[] = furiaTeam.filter(
        (data) => data.id === 7 || data.id === 8
    );
    function renderItem({ item }: { item: TeamMember }) {
        return <PlayerCard {...item} />;
    }

    function renderHeaderItem() {
        return (
            <>
                <Text
                    darkColor="text"
                    lightColor="text"
                    style={styles.categoryTitle}
                >
                    Players Titulares
                </Text>
                <View style={styles.containerSeparator}>
                    <View
                        darkColor="separator"
                        lightColor="black"
                        style={styles.separador}
                    />
                </View>
            </>
        );
    }

    function renderFooterItem(bench: TeamMember[], coach: TeamMember) {
        return (
            <>
                <Text
                    darkColor="text"
                    lightColor="text"
                    style={styles.categoryTitle}
                >
                    Players Reservas
                </Text>
                <View style={styles.containerSeparator}>
                    <View
                        darkColor="separator"
                        lightColor="black"
                        style={styles.separador}
                    />
                </View>
                {bench.map((player) => (
                    <PlayerCard key={player.id} {...player} />
                ))}

                <Text
                    darkColor="text"
                    lightColor="text"
                    style={styles.categoryTitle}
                >
                    Coach
                </Text>
                <View style={styles.containerSeparator}>
                    <View
                        darkColor="separator"
                        lightColor="black"
                        style={styles.separador}
                    />
                </View>

                {coach && <PlayerCard {...coach} />}
            </>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={players}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.content}
                ListHeaderComponent={renderHeaderItem}
                ListFooterComponent={
                    coach ? () => renderFooterItem(bench, coach) : null
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
    },
    content: {
        width: "100%",
    },
    categoryTitle: {
        width: "100%",
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "5%",
    },
    containerSeparator: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    separador: {
        height: 1,
        width: "90%",
        opacity: 0.5,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 10,
    },
});
