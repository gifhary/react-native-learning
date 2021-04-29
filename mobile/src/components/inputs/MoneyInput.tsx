import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../theme/colors";
import IndoText from "../IndoText";

interface IProps {
    amount?: string,
}

const MoneyInput: React.FC<IProps> = (props) => {
    var value;
    if (props.amount === "" || props.amount === undefined) {
        value = "0";
    } else {
        value = props.amount;
    }

    return (
        <View>
            <View style={style.alignCenter}>
                <IndoText style={[style.text, { color: value === "0" ? colors.disabled : colors.body }]}>Rp{value}</IndoText>
            </View>
            <View style={[style.underline]} />
        </View>
    );
}

const style = StyleSheet.create({
    alignCenter: {
        alignItems: "center",
    },
    text: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 30,
    },
    underline: {
        height: 3,
        backgroundColor: colors.orange,
    },
});

export default MoneyInput;