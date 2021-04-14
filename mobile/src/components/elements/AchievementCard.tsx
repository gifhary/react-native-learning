import React from "react";
import {
    Image, ImageSourcePropType,
    StyleSheet, TouchableOpacity, useWindowDimensions,
    View,
} from "react-native";
import colors from "../../theme/colors";
import IndoText from "../IndoText";

const chroma = require("chroma-js");

interface IProps {
    source: ImageSourcePropType;
    label: string;
    onPress?: any;
    selected?: boolean;
    size?: "md" | "lg";
}

const AchievementCard: React.FC<IProps> = (props) => {

    const {source, label, onPress} = props;
    const window = useWindowDimensions();

    if (onPress) {
        return (
            <TouchableOpacity style={[style.view, {width: (props.size === "md") ? "48%" : "100%", borderWidth: props.selected ? 3 : 0}]} onPress={onPress} activeOpacity={0.8}>
                <Image source={source}
                       style={[style.image]}
                />
                <View style={[style.header]}>
                    <IndoText style={{textAlign: "center", color: colors.black}}>{label}</IndoText>
                </View>
            </TouchableOpacity>
        );
    } else {

        return (
            <View style={[style.view, {width: (props.size === "md") ? "48%" : "100%", borderWidth: props.selected ? 3 : 0}]}>
                <Image source={source}
                       style={[style.image]}
                />
                <View style={[style.header]}>
                    <IndoText style={{textAlign: "center", color: colors.white}}>{label}</IndoText>
                </View>
            </View>
        );
    }
}


AchievementCard.defaultProps = {
    size: "md",
}

const style = StyleSheet.create({
    view: {
        height: 150,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.black,
        overflow: "hidden",
        borderRadius: 15,
        borderColor: colors.yellow,
		marginVertical: 5,
    },
    header: {
        flex: 1,
        alignSelf: "flex-end",
        backgroundColor: `${chroma(colors.white).alpha(0.6)}`,
        minHeight: 35,
        padding: 5,
        position: "absolute",
        borderTopWidth: 1,
        left: 0,
        right: 0,
    },
    image: {
        flex: 1,
        height: "100%",
        resizeMode: 'cover',
    },
});

export default AchievementCard;