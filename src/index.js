import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui';
import { connect, Provider } from 'react-redux';

import { AppNavigator } from './routes';
import { ruuiStore, appStore } from './store';
import * as appActions from './store/action/app';

type Props = {
	counter?: string,
	dispatch?: Function,
};

@connect(({ app }) => {
	return {
		counter: app.counter,
	};
})

class App extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<AppNavigator/>
		</View>;
	}
}

function AppContainer(props) {
	return <RuuiProvider store={ruuiStore}>
		<Provider store={appStore}>
			<App/>
		</Provider>

		<Tooltip/>
	</RuuiProvider>;
}

export default AppContainer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	buttonWrapper: {
		backgroundColor: '#00bcd4',
		marginTop: 20,
	},
	buttonIcon: {
		fontSize: 28,
		color: '#ffffff',
	},
});
