import React from "react";
import {
    Pressable,
    StyleSheet,
    TextStyle,
    TouchableHighlightProps,
} from "react-native";
import IndoText from "../IndoText";
import colors from "../../theme/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
    onPress: any;
    color: string,
    disabled?: boolean,
    scale?: number,
}

const RoundButton: React.FC<IProps> = (props) => {
    const scale = props.scale ?? 1;

    return (
        <TouchableOpacity style={[style.button, { backgroundColor: props.disabled ? colors.gray : props.color, transform: [{ scale: scale }] }]} onPress={props.onPress} disabled={props.disabled}>
            <IndoText style={{ color: colors.black }}>3</IndoText>
        </TouchableOpacity>
    );
}

RoundButton.defaultProps = {
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

export default RoundButton;
