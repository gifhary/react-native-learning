import React from "react";
import { StyleSheet } from "react-native";
import IndoText from "../IndoText";
import colors from "../../theme/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
    onPress: any;
    onLongPress?: any;
    color?: string,
    disabled?: boolean,
    scale?: number,
}

const CircleButton: React.FC<IProps> = (props) => {
    const scale = props.scale ?? 1;

    return (
        <TouchableOpacity onPressOut={props.onPress}
            onLongPress={props.onLongPress}
            style={[style.button, {
                backgroundColor: props.disabled
                    ? (props.color === undefined ? colors.gray : props.color)
                    : props.color, transform: [{ scale: scale }]
            }]}
            disabled={props.disabled}>
            <IndoText style={{ color: colors.black }}>{props.children}</IndoText>
        </TouchableOpacity>
    );
}

CircleButton.defaultProps = {
    disabled: false,
};

const style = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});

export default CircleButton;
