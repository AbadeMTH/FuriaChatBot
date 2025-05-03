import { Text as RNText, View as RNView, TouchableOpacity as RNTouchableOpacity, TextInput as RNTextInput} from "react-native";
import { useColorScheme } from "./useColorScheme";
import Colors from "@/constants/Colors";

export type ThemeProps = {
    lightColor?: keyof typeof Colors.light;
    darkColor?: keyof typeof Colors.dark;
};

export type TextProps = ThemeProps & RNText["props"];
export type ViewProps = ThemeProps & RNView["props"];
export type TouchableOpacityProps = ThemeProps & React.ComponentProps<typeof RNTouchableOpacity>; //Precisamos extrair os props do TouchableOpacity dessa forma
export type TextInputProps = ThemeProps & React.ComponentProps<typeof RNTextInput>; //Precisamos extrair os props do TextInput dessa forma

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.dark & keyof typeof Colors.light
) {
    const theme = useColorScheme();
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}

export function Text(props: TextProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor(
        {
            light: Colors.light[lightColor ?? "text"],
            dark: Colors.dark[darkColor ?? "text"],
        },
        "text"
    );

    return <RNText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        {
            light: Colors.light[lightColor ?? "background"],
            dark: Colors.dark[darkColor ?? "background"],
        },
        "background"
    );

    return <RNView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TouchableOpacity(props: TouchableOpacityProps){
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        {
            light: Colors.light[lightColor ?? "background"],
            dark: Colors.dark[darkColor ?? "background"],
        },
        "background"
    );

    return <RNTouchableOpacity style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(porps: TextInputProps) {
    const { style, lightColor, darkColor, ...otherProps } = porps;
    const backgroundColor = useThemeColor(
        {
            light: Colors.light[lightColor ?? "textinputBackground"],
            dark: Colors.dark[darkColor ?? "textinputBackground"],
        },
        "textinputBackground"
    );

    return <RNTextInput style={[{ backgroundColor }, style]} {...otherProps} />;
}