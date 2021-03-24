import React from 'react';
import { StatusBar } from 'react-native';
import {Provider} from "react-redux";
import {persistor, store} from './redux';
import {PersistGate} from "redux-persist/integration/react";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import colors from './theme/colors';
import LoadingManager from "./components/LoadingManager";
import RootNavigator from "./navigators/RootNavigator";

const App: React.FC = () => {
	return (
		<React.Fragment>
			<StatusBar barStyle="dark-content"/>

			<Provider store={store}>
				<PersistGate
					loading={null}
					persistor={persistor}
				>
					<NavigationContainer
						theme={{
							...DefaultTheme,
							colors: {
								...DefaultTheme.colors,
								background: colors.white
							},
						}}
					>
						<RootNavigator/>
					</NavigationContainer>

					<LoadingManager/>
				</PersistGate>
			</Provider>
		</React.Fragment>
	);
};

export default App;
