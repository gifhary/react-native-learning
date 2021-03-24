import React from "react";
import {
	ImageProps,
	StyleSheet,
	View,
	Image, ImageSourcePropType, ViewStyle,
} from "react-native";
import {getWidth} from "../../utils/getDimensions";

interface IProps extends ImageProps {
	source: ImageSourcePropType;
	mod?: number;
}

const ProfileImage: React.FC<IProps> = (props) => {


	const {source, mod} = props;
	const imageSize: number = getWidth(mod);

	return (

		<View style={[
			style.view,
			{
				width: imageSize,
				height: imageSize,
				borderRadius: imageSize / 2,
			},
		]}>
			<Image
				source={source}
				style={[style.image, {
					width: imageSize,
					height: imageSize,
				}, props.style]}
			/>
		</View>
	);
}


ProfileImage.defaultProps = {
	mod: 0.28,
}

const style = StyleSheet.create({
	view: {
		overflow: "hidden",
	},
	image: {
		resizeMode: 'contain',
	},
});

export default ProfileImage;