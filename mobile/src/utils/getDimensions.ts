import {Dimensions} from "react-native";

export function screen(): {height: number, width: number} {
	return Dimensions.get("screen");
}

export function getHeight(mod?: number): number {
	return mod !== undefined ? Dimensions.get("screen").height * mod : Dimensions.get("screen").height;
}

export function getWidth(mod?: number): number {
	return mod !== undefined ? Dimensions.get("screen").width * mod : Dimensions.get("screen").width;
}
