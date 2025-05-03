import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { PlayerCardList } from "@/components/playerCard/PlayerCardList";

export default function PlayersScreen() {
    return (
        <View style={styles.container}>
            <PlayerCardList />
            <View style={styles.separator} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
