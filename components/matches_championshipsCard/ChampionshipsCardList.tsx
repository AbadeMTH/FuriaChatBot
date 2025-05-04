import React from "react";
import { Text, View } from "../Themed";
import { FlatList, StyleSheet } from "react-native";
import {
    Championships,
    championships,
    matches,
} from "./matches_championshipsCardUtils/macthes_championshipsMock";
import { MatchesCard } from "./MatchesCard";
import { ChampionshipCard } from "./ChampionshipCard";

export function ChampionshipsCardList() {
    function renderItem({ item }: { item: Championships }) {
        return <ChampionshipCard {...item} />;
    }

    function renderHeaderItem() {
        return (
            <>
                <Text
                    darkColor="text"
                    lightColor="text"
                    style={styles.categoryTitle}
                >
                    Próximos Campeonatos
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

    function renderFooterItem() {
        return (
            <>
                <Text
                    darkColor="text"
                    lightColor="text"
                    style={styles.categoryTitle}
                >
                    Próximas Partidas
                </Text>
                <View style={styles.containerSeparator}>
                    <View
                        darkColor="separator"
                        lightColor="black"
                        style={styles.separador}
                    />
                </View>
                {matches.map((match) => (
                    <MatchesCard key={match.id} {...match} />
                ))}
            </>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={championships}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                ListHeaderComponent={renderHeaderItem}
                ListFooterComponent={renderFooterItem}
                contentContainerStyle={styles.content}
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
        marginTop: "8%",
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
