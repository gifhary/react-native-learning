import React from "react";
import { StyleSheet, View } from "react-native";
import constant from "./constant";

interface IProps {
    color: string,
    scale: number,
}

const Circle: React.FC<IProps> = (props) => {
    return <View style={[style.circle, { backgroundColor: props.color, transform: [{ scale: props.scale }] }]} />;
}

const style = StyleSheet.create({
    circle: {
        width: constant.dimension,
        height: constant.dimension,
        borderRadius: constant.dimension / 2,
    },
});

export default Circle;