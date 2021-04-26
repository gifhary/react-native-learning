import React from "react";
import { StyleSheet, View } from "react-native";
import constant from "./constant";

interface IProps {
    color: string,
    scale?: number,
    opacity?: number,
}

const Circle: React.FC<IProps> = (props) => {
    const scale = props.scale ?? 1;
    const opacity = props.opacity ?? 1;
    return <View style={[style.circle, { backgroundColor: props.color, opacity: opacity, transform: [{ scale: scale }] }]} />;
}

const style = StyleSheet.create({
    circle: {
        width: constant.dimension,
        height: constant.dimension,
        borderRadius: constant.dimension / 2,
    },
});

export default Circle;