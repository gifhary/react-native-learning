import {StyleProp, TextStyle} from "react-native";
import colors from "./colors";

export default {
	safeArea: {
		flex: 1,
	},
	pageMarginHorizontal: {
		marginHorizontal: 30,
	},
	pagePadding: {
		padding: 30,
	},
	h1: {
		fontSize: 30,
		fontWeight: "bold",
	} as StyleProp<TextStyle>,
	h2: {
		fontSize: 26,
		fontWeight: "bold",
	} as StyleProp<TextStyle>,
	h3: {
		fontSize: 22,
		fontWeight: "bold",
	} as StyleProp<TextStyle>,
	h4: {
		fontSize: 18,
		fontWeight: "600",
	} as StyleProp<TextStyle>,
	hr: {
		borderBottomColor: colors.gray,
		borderBottomWidth: 1,
	} as StyleProp<TextStyle>
}
