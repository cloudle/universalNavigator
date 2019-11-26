import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { Button } from 'react-universal-ui';

import type { Navigation, } from '../../typeDefinition';

type Props = {
	navigation?: Navigation,
};

class HomeScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text style={styles.caption}>welcome Home!</Text>
			<Button
				title="About Page"
				onPress={this.gotoAbout}/>
		</View>;
	}

	gotoAbout = () => {
		const { navigation } = this.props;
		navigation.navigate('about');
	};
}

export default HomeScene;

const styles = StyleSheet.create({
	container: {

	},
	caption: {
		fontSize: 30,
		marginBottom: 20,
	},
});
