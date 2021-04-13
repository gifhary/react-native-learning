import React from "react";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {Image, ScrollView, StyleSheet, View} from "react-native";
import colors from "../../theme/colors";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import ProgressBar from "../../components/elements/ProgressBar";
import BannerImage from "../../components/elements/BannerImage";
import ArticleComponent from "../../components/elements/ArticleComponent";
import BannerInstructions from "../../components/elements/BannerInstructions";
import IndoCheckBox from "../../components/inputs/toggles/IndoCheckbox";
import ProductsCard from "../../components/elements/ProductsCard";
import AchievementCardDetailed from "../../components/elements/AchievementCardDetailed";
import {connect} from "react-redux";
import InvestingCard from "../../components/elements/InvestingCard";
import {StackNavigationProp} from "@react-navigation/stack";

const source = require("../../../assets/icons/Artboard_1_copy_188x.png");
const car = require("../../../assets/icons/car.jpeg");

const placeholderCar = {
	source: car,
	value: 90
}

const placeholderNewInvestment = {
    source: car,
    value: 15,
    header: "Dream Investing",
    bodyText: "Have a goal or something you are saving for? Read about how we helped other customers reach their goals.",
}

const placeholder1 = {
	header: "Wall Street's Dilemma: What are Tesla's Shares Worth?",
	source: "https://via.placeholder.com/300",
	buttonText: "View Article >",
};

const placeholder2 = {
	header: "Try our Launch feature!",
	subHeader: "Dont just earn money from investing, try our brand new game!",
	buttonText: "Play now!",
};

const placeholder3 = {
	header: "Saham",
	subHeader: "Aberdeen Standard Indonesia Equity Fund",
	leftHeader: "Imbal hasil",
	leftSubHeader: "2,40%/th",
	rightHeader: "Harga/unit",
	rightSubHeader: "Rp 1.944,38",
	aside: "945",
	description: "A long standing mutual fund with strong historical performance. Perfect for moderate investors.",
	composition: {
		stocks: "40%",
		bonds: "30%",
		moneyMarketFunds: "30%",
	},
};

const placeholder4 = {
	header: "Ways to Get Crystals",
	subHeader: `Earn crystals by completing the tasks below. Tap the "launch" tab to learn more.`,
	instructions: [
		{
			header: "Daily Login",
			value: "15",
		},
		{
			header: "Invest $1 or more",
			value: "25",
		},
		{
			header: "Invite a friend",
			value: "10",
		},
	],
};

const placeholder5 = {
	profileImage: source,
	source: car,
	header: "Saham",
	subHeader: "Aberdeen Standard Indonesia Equity Fund",
	labelHeader: "Saham",
	label: "Aberdeen Standard Indonesia Equity Fund",
	leftHeader: "Imbal hasil",
	leftSubHeader: "2,40%/th",
	rightHeader: "Harga/unit",
	rightSubHeader: "Rp 1.944,38",
	aside: "945",
	description: "A long standing mutual fund with strong historical performance. Perfect for moderate investors.",
	composition: {
		stocks: "40%",
		bonds: "30%",
		moneyMarketFunds: "30%",
	},
};

const placeholder5Array = [placeholder5, placeholder5];

interface IProps {
    navigation: StackNavigationProp<any>;
}

function createCrystalInstructionElement(item: any, index: number) {
	return (
		<IndoCheckBox key={`instruction-item-${index}`} value={false} setValue={() => {}}>
			<View style={style.instructionElement}>
				<IndoText style={{flex: 1}}>{item.header}</IndoText>
				<View style={{justifyContent: "center", alignItems: "center", flexDirection: "row", paddingRight: 10}}>
					<IndoText style={{paddingHorizontal: 15}}>{item.value}</IndoText>
					<Image style={{width: 20, height: 20}} source={{uri: "https://via.placeholder.com/300"}}/>
				</View>
			</View>
		</IndoCheckBox>
	);
}

function createAchievementCards(item: any, index: number) {
	return (
		<AchievementCardDetailed
			key={`achievement-card-${index}`}
			profileImage={item.profileImage}
			source={item.source}
			header={item.header}
			subHeader={item.subHeader}
			labelHeader={item.labelHeader}
			label={item.label}
			leftHeader={item.leftHeader}
			leftSubHeader={item.leftSubHeader}
			rightHeader={item.rightHeader}
			rightSubHeader={item.rightSubHeader}
		/>
	);
}

const DashboardHome: React.FC<IProps> = (props) => {

    return (
        <SafeAreaView style={[globalStyles.safeArea]}>
            <KeyboardAwareScrollView>

                <InvestingCard backgroundImage={placeholderCar.source} value={placeholderCar.value} newGoal={false} >
                    <View style={[globalStyles.pagePadding, {backgroundColor: colors.white, width: "100%"}]}>
                        <View style={{flexDirection: "row", justifyContent: "space-between", paddingBottom: 10}}>
                            <IndoText>I'm saving for a BMW</IndoText>
                            <IndoText>Edit {">"}</IndoText>
                        </View>
                        <ProgressBar progress={25} total={100}/>
                        <View>
                            <IndoText style={globalStyles.h1}>${122}</IndoText>
                            <IndoText>Balance</IndoText>
                        </View>
                    </View>
                </InvestingCard>

                <InvestingCard
                    newGoal={true}
                    header={placeholderNewInvestment.header}
                    headerColor={colors.white}
                    value={placeholderNewInvestment.value}
                    bodyText={placeholderNewInvestment.bodyText}
                    backgroundImage={placeholderCar.source}
                    onPress={() => console.log("hello")}
                />

                <ArticleComponent header={placeholder1.header} buttonText={placeholder1.buttonText}
                                  source={placeholder1.source}/>

                <BannerImage
                    header={placeholder2.header}
                    subHeader={placeholder2.subHeader}
                    buttonText={placeholder2.buttonText}
                />

                <View>
                    <IndoText style={[globalStyles.pagePadding, globalStyles.h2]}>My Portfolio</IndoText>
                    <ProductsCard header={placeholder3.header} subHeader={placeholder3.subHeader}
                                  leftSubHeader={placeholder3.leftSubHeader} rightHeader={placeholder3.rightHeader}
                                  leftHeader={placeholder3.leftSubHeader} rightSubHeader={placeholder3.rightSubHeader}/>
                </View>

                <BannerInstructions header={placeholder4.header} subHeader={placeholder4.subHeader}>
                    <View style={{justifyContent: "flex-start", width: "100%"}}>
                        {placeholder4.instructions.map(createCrystalInstructionElement)}
                    </View>
                </BannerInstructions>

                <IndoText style={[globalStyles.h1, {paddingHorizontal: 20, paddingVertical: 10}]}>Recent Goal
                    Achievements</IndoText>
                <ScrollView horizontal={true} style={[{flexDirection: "row"}]}>
                    {placeholder5Array.map(createAchievementCards)}
                </ScrollView>

                <View style={style.footerContainer}>
                    <IndoText style={globalStyles.h4}>News</IndoText>
                    <IndoText style={globalStyles.h4}>News</IndoText>
                    <IndoText style={globalStyles.h4}>News</IndoText>
                    <IndoText style={globalStyles.h4}>News</IndoText>
                    <IndoText style={globalStyles.h4}>News</IndoText>
                    <IndoText style={globalStyles.h4}>News</IndoText>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    instructionElement: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 20,
        backgroundColor: colors.gray
    },
})
export default connect()(DashboardHome);
