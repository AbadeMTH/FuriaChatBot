import Colors from "@/constants/Colors";
import { Text as RNText, View as RNView } from "react-native";

export type TextProps = RNText["props"];
export type ViewProps = RNView["props"];

export function useThemeColor(
    theme: keyof typeof Colors,
    colorName: keyof typeof Colors.dark
) {
    return Colors[theme][colorName];
}

export function Text(props: TextProps) {
    const { style, ...otherProps } = props;
    const color = useThemeColor("dark", "text");

    return <RNText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
    const { style, ...otherProps } = props;
    const backgroundColor = useThemeColor("dark", "background");

    return <RNView style={[{ backgroundColor }, style]} {...otherProps} />;
}
