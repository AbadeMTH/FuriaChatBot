import { Text as RNText, View as RNView } from "react-native";
import { useColorScheme } from "./useColorScheme";
import { ColorPaletteKeys, Colors} from "@/constants/Colors";

export type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type TextProps = ThemeProps & RNText["props"];
export type ViewProps = ThemeProps & RNView["props"];

export function useThemeColor(
    props: { light?: string; dark?: string},
    colorName: ColorPaletteKeys
) {
    const theme = useColorScheme();
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return ColorPaletteKeys;
    }
}

export function Text(props: TextProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    return <RNText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background"
    );

    return <RNView style={[{ backgroundColor }, style]} {...otherProps} />;
}