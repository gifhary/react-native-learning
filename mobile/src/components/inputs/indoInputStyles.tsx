import colors from "../../theme/colors";

export default {
	inputBox: {
		borderRadius: 5,
		borderWidth: 1.3,
		borderColor: colors.navy,
		width: "100%",
		color: colors.black,
		padding: 12,
	},
	label: {
		fontWeight: "600",
		marginHorizontal: 15,
	},
	textarea: {
		textAlignVertical: "top",
		height: 120,
		paddingTop: 12, // have to set specifically to padding top for the multiline=true text input to look proper
	},
	dayLabel: {
		fontWeight: "600",
		marginBottom: 7,
		fontSize: 19,
	},
}
