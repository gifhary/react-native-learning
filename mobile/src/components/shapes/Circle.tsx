import React from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
    color: string,
    scale?: number,
    opacity?: number,
}

const size = 50;

const Circle: React.FC<IProps> = (props) => {
    const scale = props.scale ?? 1;
    const opacity = props.opacity ?? 1;
    return <View style={[style.circle, { backgroundColor: props.color, opacity: opacity, transform: [{ scale: scale }] }]} />;
}

const style = StyleSheet.create({
    circle: {
        width: size,
        height: size,
        borderRadius: size / 2,
    },
});

export default Circle;