import React from "react";
import { Text, View } from "../Themed";
import { FlatList, ImageBackground, StyleSheet } from "react-native";
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
                <ImageBackground
                    imageStyle={styles.imageFuriaBackground}
                    source={require("../../assets/images/teams/logo-furia.png")}
                    style={styles.furiaBackground}
                >
                    <Text style={styles.bemVindo}>
                        Bem-Vindo(a) à Pantera Móvel!
                    </Text>

                    <ButtonNavigate
                        path="(tabs)/chat"
                        title="Navegar para o Chat Furioso"
                    />
                    <ButtonNavigate
                        path="(tabs)/events"
                        title="Visualizar próximos eventos da FURIA"
                    />
                    <ButtonNavigate
                        path="(tabs)/players"
                        title="Ver a Line-Up Furiosa"
                    />
                </ImageBackground>
                <Text
                    darkColor="text"
                    lightColor="text"
                    style={styles.categoryTitle}
                >
                    Conquistas da Pantera!
                </Text>
                <View style={styles.containerSeparator}>
                    <View
                        darkColor="separator"
                        lightColor="separator"
                        style={styles.separador}
                    />
                </View>
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
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    bemVindo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    furiaBackground: {
        flex: 1,
        width: "100%",
        paddingBottom: 20,
        alignItems: "center",
    },
    imageFuriaBackground: {
        opacity: 0.2,
        resizeMode: "contain",
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
