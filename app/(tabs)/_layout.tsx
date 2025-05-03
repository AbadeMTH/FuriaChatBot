import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import { ThemeToggleButton } from "@/components/themeToggleButton/ThemeToggleButton";

//Função que renderiza um ícone na barra de navegação
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                headerShown: true,
                tabBarStyle: {
                    borderTopWidth: 1,
                    height: 60,
                },
                headerRight: () => (<ThemeToggleButton/>),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: "Chat FURIA",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="comment-o" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="matches"
                options={{
                    title: "Matches",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="gamepad" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="players"
                options={{
                    title: "Line-Up",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="user-o" color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
