import { useNavigation, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "../Themed";
import { StyleSheet } from "react-native";

type Props = {
    path: `${string}`; //Tipando para que a string só venha em formato de rota
    title: string;
};

//Passamos props.path as any pois não estamos no diretório /app fazendo com que o componente não participe da inferência automática de rota do expo-router
export function ButtonNavigate(props: Props) {
    const router = useRouter();
    return (
        <>
            <TouchableOpacity
                darkColor="backgroundButtonNavigate"
                lightColor="backgroundButtonNavigate"
                style={styles.container}
                onPress={() => router.push(props.path as any)}
            >
                <Text style={styles.title}>{props.title}</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        padding: 20,
        borderRadius: 30,
        margin: 10,
        elevation: 6,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
});
