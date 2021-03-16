import React from 'react';
import { StatusBar } from 'react-native';
import {Provider} from "react-redux";
import {persistor, store} from './redux';
import {PersistGate} from "redux-persist/integration/react";
import {DefaultTheme, NavigationContainer, useNavigation} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import colors from './theme/colors';
import LoadingManager from "./components/LoadingManager";
import DemoPage from './screens/DemoPage';

const RootStackNavigator = createStackNavigator();

const App: React.FC = () => {
	return (
		<React.Fragment>
			<StatusBar barStyle={"dark-content"}/>

			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>

					<NavigationContainer
						theme={{
							...DefaultTheme,
							colors: {
								...DefaultTheme.colors,
								background: colors.white
							},
						}}
					>
						<RootStackNavigator.Navigator headerMode="none">

							<RootStackNavigator.Screen
								name="DemoPage"
								component={DemoPage}
							/>
						</RootStackNavigator.Navigator>
					</NavigationContainer>

					<LoadingManager/>

				</PersistGate>
			</Provider>
		</React.Fragment>
	);
};

export default App;
