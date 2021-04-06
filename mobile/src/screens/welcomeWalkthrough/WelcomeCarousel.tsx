import React, {ReactNode, useState} from "react";
import IndoText from "../../components/IndoText";
import SafeAreaView from "react-native-safe-area-view";
import globalStyles from "../../theme/globalStyles";
import {Image, ImageProps, TouchableOpacity, useWindowDimensions, View} from "react-native";
import StepTracker, {EStepTracker} from "../../components/elements/StepTracker";
import testImage from "../../../assets/icons/Artboard_1_copy_188x.png";
import {StackNavigationProp} from "@react-navigation/stack";
import colors from "../../theme/colors";
import IndoButton from "../../components/buttons/IndoButton";

interface IProps {
	navigation: StackNavigationProp<any>;
}

interface PageInfo {
	progress: EStepTracker;
	image: ImageProps;
	body: string;
}

enum EPage {
	PAGE1,
	PAGE2,
	PAGE3
}

const WelcomeCarousel: React.FC<IProps> = (props) => {
	const window = useWindowDimensions();
	const [page, setPage] = useState(EPage.PAGE1);

	function navigateToLandingPage() {
		props.navigation.replace("WelcomeLogin");
	}

	const pageData: PageInfo[] = [
		{
			progress: EStepTracker.START,
			image: testImage,
			body: "We sell Mutual Funds (This is important to mention) Introduction about our Company",
		},
		{
			progress: EStepTracker.MIDDLE,
			image: testImage,
			body: "Attract users with our attractive reward system. Tell users we will help them achieve their dreams (inspiring way)",
		},
		{
			progress: EStepTracker.END,
			image: testImage,
			body: "About us, we make things simple, easy, safe and fun!",
		},
	];

	function togglePage(page: EPage): void {
		setPage(page);
	}

	function createPage(data: PageInfo): ReactNode {
		return (<View style={{flex: 1, padding: 5}}>
			<View style={{alignItems: "center", paddingVertical: 5}}>
				<StepTracker progress={data.progress}/>
			</View>
			<View style={{flex: 1, alignItems: "flex-end", paddingHorizontal: 15}}>
				<TouchableOpacity onPress={navigateToLandingPage} activeOpacity={0.8} style={{padding: 5}}>
					<IndoText>Skip</IndoText>
				</TouchableOpacity>
			</View>
			<View style={{flex: 1, justifyContent: "center"}}>
				<Image source={data.image} style={{width: "100%", height: window.height / 3, resizeMode: "cover"}}/>
			</View>
			<View style={{flex: 1, justifyContent: "center"}}>
				<IndoText style={{textAlign: "center"}}>{data.body}</IndoText>
			</View>
		</View>);
	}

	return (
		<SafeAreaView style={globalStyles.safeArea}>
			{page === EPage.PAGE1 && createPage(pageData[0])}
			{page === EPage.PAGE2 && createPage(pageData[1])}
			{page === EPage.PAGE3 && createPage(pageData[2])}

			{(page === EPage.PAGE1 || page === EPage.PAGE2) && (
				<View style={{alignItems: "flex-end", paddingHorizontal: 25}}>
					<TouchableOpacity
						activeOpacity={0.8}
						style={{
							width: 50,
							height: 50,
							borderRadius: 25,
							overflow: "hidden",
							backgroundColor: colors.gray
						}}
						onPress={page === EPage.PAGE1 ? () => togglePage(EPage.PAGE2) : () => togglePage(EPage.PAGE3)}
					>
						<Image source={testImage} style={{width: "100%", height: "100%"}}/>
					</TouchableOpacity>
				</View>
			)}
			{page === EPage.PAGE3 && (
				<View style={{alignItems: "center", paddingHorizontal: 25}}>
					<IndoButton onPress={navigateToLandingPage}>Next</IndoButton>
				</View>
			)}
		</SafeAreaView>
	);
};

export default WelcomeCarousel;
