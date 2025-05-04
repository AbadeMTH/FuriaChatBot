import React from "react";
import { Text, View } from "../Themed";
import { FlatList, StyleSheet } from "react-native";
import {
    achievements,
    AchievementsType,
} from "./achievementsUtils/achievementsMock";
import { Achievements } from "./Achievements";
import { ButtonNavigate } from "../buttonNavigate/ButtonNavigate";

export function AchievementsLists() {
    function renderItem({ item }: { item: AchievementsType }) {
        return <Achievements {...item} />;
    }

    function renderHeaderItem() {
        return (
            <View style={styles.containerHeader}>
                <Text style={styles.bemVindo}>Bem-Vindo à Pantera Móvel!</Text>
                <ButtonNavigate
                    path="(tabs)/chat"
                    title="Navegar para o Chat"
                />
                <ButtonNavigate
                    path="(tabs)/matches"
                    title="Visualizar próximos eventos"
                />
                <ButtonNavigate
                    path="(tabs)/players"
                    title="Ver a Line-Up Furiosa"
                />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={achievements}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.content}
                ListHeaderComponent={renderHeaderItem}
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
    containerHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    bemVindo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
