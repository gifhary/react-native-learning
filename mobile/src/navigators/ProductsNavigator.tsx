import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ProductsMain from "../screens/products/ProductsMain";
import ProductsDetails from "../screens/products/ProductsDetails";

const ProductsStack = createStackNavigator();

const ProductsNavigator: React.FC = () => {

	return (
		<ProductsStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="ProductsMain"
		>
			<ProductsStack.Screen
				name="ProductsMain"
				component={ProductsMain}
			/>

			<ProductsStack.Screen
				name="ProductsDetails"
				component={ProductsDetails}
			/>
		</ProductsStack.Navigator>
	);
};

export default ProductsNavigator;
