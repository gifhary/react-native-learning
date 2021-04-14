import * as React from "react";
import {Modal, ModalProps, StyleSheet, View} from "react-native";
import {getHeight, getWidth} from "../../utils/getDimensions";
import globalStyles from "../../theme/globalStyles";
import {ReactNode} from "react";
import ModalCard from "./ModalCard";
import IndoText from "../IndoText";
import IndoButton from "../buttons/IndoButton";

interface IProps extends ModalProps {
	animationType?: "slide" | "fade"
	title: string;
	children: ReactNode | string;
	visible: boolean;
	buttonText?: string;
	buttonDisabled?: boolean;
	showButton?: boolean;
	onClose?(): void;
	onDismiss?(): void;
}

const GenericMessageModal: React.FC<IProps> = (props) => {

	return (
		<Modal
			visible={props.visible}
			transparent={true}
			animationType={props.animationType}
		>
			<View style={[style.modalContent, globalStyles.pagePadding]}>
				<ModalCard
					title={props.title}
					titleStyle={style.textCenter}
					onClose={props.onClose}
				>

					{typeof props.children === "string" ? (
						<IndoText style={style.textCenter}>
							{props.children}
						</IndoText>
					) : (
						<React.Fragment>
							{props.children}
						</React.Fragment>
					)}

					{props.showButton && (
						<View style={style.alignCenter}>
							<IndoButton
								color="orange"
								style={style.dismissButton}
								disabled={props.buttonDisabled}
								onPress={props.onDismiss}
							>
								{props.buttonText}
							</IndoButton>
						</View>
					)}
				</ModalCard>
			</View>
		</Modal>
	);
};

const style = StyleSheet.create({
	modalContent: {
		height: getHeight(),
		width: getWidth(),
		backgroundColor: "rgba(0, 0, 0, 0.3)",
		justifyContent: "center",
	},
	textCenter: {
		textAlign: "center",
	},
	alignCenter: {
		alignItems: "center",
	},
	dismissButton: {
		marginTop: 15,
		alignSelf: "center",
	},
});

GenericMessageModal.defaultProps = {
	animationType: "fade",
	buttonText: "Close Window",
	showButton: true,
}

export default GenericMessageModal;
