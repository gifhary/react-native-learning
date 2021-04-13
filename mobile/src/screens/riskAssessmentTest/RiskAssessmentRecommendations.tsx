import React, {useLayoutEffect, useState} from "react";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {View} from "react-native";
import ProductsCard from "../../components/elements/ProductsCard";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import IndoButton from "../../components/buttons/IndoButton";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
    navigation: StackNavigationProp<any>;
}

interface placeholderCardInfo {
    header: string;
    subHeader: string;
    leftHeader: string;
    leftSubHeader: string;
    rightHeader: string;
    rightSubHeader: string;
    aside?: string;
    description?: string;
    composition?: {
        stocks: string,
        bonds: string,
        moneyMarketFunds: string,

    };
}

const placeholderCardInfoArray: placeholderCardInfo[] = [
    {
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
    },
    {
        header: "Saham",
        subHeader: "Aberdeen Standard Indonesia Equity Fund",
        leftHeader: "Imbal hasil",
        leftSubHeader: "2,40%/th",
        rightHeader: "Harga/unit",
        rightSubHeader: "Rp 1.944,38",
        aside: "145",
        description: "A long standing mutual fund with strong historical performance. Perfect for moderate investors.",
        composition: {
            stocks: "40%",
            bonds: "30%",
            moneyMarketFunds: "30%",
        },
    },
    {
        header: "Saham",
        subHeader: "Aberdeen Standard Indonesia Equity Fund",
        leftHeader: "Imbal hasil",
        leftSubHeader: "2,40%/th",
        rightHeader: "Harga/unit",
        rightSubHeader: "Rp 1.944,38",
        aside: "45",
        description: "A long standing mutual fund with strong historical performance. Perfect for moderate investors.",
        composition: {
            stocks: "40%",
            bonds: "30%",
            moneyMarketFunds: "30%",
        },
    },
    {
        header: "Saham",
        subHeader: "Aberdeen Standard Indonesia Equity Fund",
        leftHeader: "Imbal hasil",
        leftSubHeader: "2,40%/th",
        rightHeader: "Harga/unit",
        rightSubHeader: "Rp 1.944,38",
        aside: "58",
        description: "A long standing mutual fund with strong historical performance. Perfect for moderate investors.",
        composition: {
            stocks: "40%",
            bonds: "30%",
            moneyMarketFunds: "30%",
        },
    },
]

const RiskAssessmentRecommendations: React.FC<IProps> = (props) => {

    const [selectedProduct, setSelectedProduct] = useState<placeholderCardInfo>();

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerShown: false
        });
    }, [props.navigation]);

    function createProductsCard(item: placeholderCardInfo, index: number) {

        const setData = () => {
            setSelectedProduct(item);
        }

        return (
            <ProductsCard
                key={`product-card-${index}`}
                header={item.header}
                subHeader={item.subHeader}
                leftHeader={item.leftHeader}
                leftSubHeader={item.leftSubHeader}
                rightHeader={item.rightHeader}
                rightSubHeader={item.rightSubHeader}
                aside={item?.aside}
                onPress={setData}
                selected={selectedProduct === item}
            />);
    }

    function nextPage() {
        props.navigation.push("InvestmentFlowNavigator");
    }

    return (
        <SafeAreaView style={[globalStyles.safeArea]}>
            <KeyboardAwareScrollView>
                <IndoText style={[globalStyles.h1, {textAlign: "center"}]}>What we Recommend</IndoText>
                <IndoText style={[globalStyles.pagePadding, {paddingVertical: 10}]}>Based on your goals, below are the
                    mutual funds we recommend you take a look at and incest in.
                    Tap the fund that you feel best suits your needs and add money towards your account today</IndoText>
                {placeholderCardInfoArray.map(createProductsCard)}
                {selectedProduct !== undefined &&
                <View style={{alignItems: "center"}}>
                    <View>
                        <IndoText
                            style={[globalStyles.h3, {textAlign: "center"}]}>{selectedProduct.subHeader}</IndoText>
                        <IndoText style={{textAlign: "center"}}>{selectedProduct.description}</IndoText>
                    </View>
                    <IndoText style={[globalStyles.h4, {paddingVertical: 10}]}>Composition:</IndoText>
                    <View style={{flexDirection: "row"}}>
                        <IndoText style={{
                            flex: 1,
                            textAlign: "center"
                        }}>{selectedProduct.composition?.stocks} Stocks</IndoText>
                        <IndoText
                            style={{flex: 1, textAlign: "center"}}>{selectedProduct.composition?.bonds} Bonds</IndoText>
                        <IndoText
                            style={{flex: 2, textAlign: "center"}}>{selectedProduct.composition?.moneyMarketFunds} Money
                            Market Funds</IndoText>
                    </View>
                </View>
                }
                <View style={{alignItems: "center", paddingVertical: 25}}>
                    <IndoButton disabled={selectedProduct === undefined} onPress={nextPage}>Make an
                        Investment</IndoButton>
                    <IndoButton color="outline-orange">Done</IndoButton>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default RiskAssessmentRecommendations;
