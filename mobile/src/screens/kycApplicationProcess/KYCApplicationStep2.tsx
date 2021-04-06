import React from "react";
import {StyleSheet, View} from "react-native";
import IndoText from "../../components/IndoText";
import globalStyles from "../../theme/globalStyles";
import SafeAreaView from "react-native-safe-area-view";
import {StackNavigationProp} from "@react-navigation/stack";
import RFIndoTextInput from "../../components/inputs/IndoInput";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Field, formValueSelector, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {IStore} from "../../redux/defaultStore";
import IndoButton from "../../components/buttons/IndoButton";

interface IProps {
	navigation: StackNavigationProp<any>;
	dispatch?: any;
	formValues?: any,
}
interface formItem {
	header: string,
	fieldName: string,
}

const formData: formItem[] = [
	{
		header: "What is your country of nationality?",
		fieldName: "country",
	},
	{
		header: "ID No.",
		fieldName: "id",
	},
	{
		header: "Current Residency",
		fieldName: "residence",
	},
	{
		header: "Address",
		fieldName: "address",
	},
	{
		header: "City",
		fieldName: "city",
	},
	{
		header: "Educational Background",
		fieldName: "education",
	},
	{
		header: "Income Level",
		fieldName: "income",
	},
	{
		header: "Investment Objective",
		fieldName: "investmentObjective",
	},
	{
		header: "Source of Income & Funds",
		fieldName: "incomeSource",
	},
	{
		header: "Bank account number",
		fieldName: "bankNumber",
	},
];

const _KYCApplicationStep2: React.FC<IProps & InjectedFormProps<any, any, any>> = (props) => {

	function back() {
		props.navigation.goBack();
	}

	function submitForm() {
		console.log(props.formValues);
		props.navigation.replace("KYCApplicationSuccess")
	}

	function createFormInput(item: formItem, index: number) {
			return (
				<View key={`form-input-${index}`} style={[globalStyles.hr, style.formInputContainer]}>
					<View style={{flex: 1}}>
						<IndoText>{item.header}</IndoText>
					</View>
					<View style={{flex: 1, paddingHorizontal: 10}}>
						<Field name={item.fieldName} component={RFIndoTextInput}/>
					</View>
				</View>
			);
	}

	return (
		<SafeAreaView style={[globalStyles.safeArea, globalStyles.pagePadding]}>
			<KeyboardAwareScrollView>

				<View style={style.header}>
					<IndoText onPress={back} style={globalStyles.h1}>←</IndoText>
					<IndoText style={globalStyles.h1}>Credentials Form</IndoText>
				</View>
				{formData.map(createFormInput)}
				<View style={{alignItems: "center"}}>
					<IndoButton onPress={submitForm}>Continue</IndoButton>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	header: {
		margin: 15
	},
	formInputContainer: {
		marginHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		width: "100%"
	}
})

const selector = formValueSelector("credentialsForm");
const KYCApplicationStep2 = reduxForm({
	form: "credentialsForm",
	initialValues: {
		country: "",
		id: "",
		residence: "",
		address: "",
		city: "",
		education: "",
		income: "",
		investmentObjective: "",
		incomeSource: "",
		bankNumber: "",
	},
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: false,
})(_KYCApplicationStep2);

export default connect((store: IStore, props: IProps) => {
	return {
		formValues: selector(store, "country", "id", "residence", "address", "city", "education", "income", "investmentObjective", "incomeSource", "bankNumber"),
		...props,
	}
})(KYCApplicationStep2);
