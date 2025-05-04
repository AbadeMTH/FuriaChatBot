import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { Achievements } from "@/components/achievements/Achievements";
import { ButtonNavigate } from "@/components/buttonNavigate/ButtonNavigate";
import { AchievementsLists } from "@/components/achievements/AchievementsList";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <AchievementsLists />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
