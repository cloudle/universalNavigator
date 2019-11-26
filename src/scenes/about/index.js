import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { Button } from 'react-universal-ui';

import type { Navigation, } from '../../typeDefinition';

type Props = {
	navigation?: Navigation,
};

class AboutScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text style={styles.caption}>well, this is About!</Text>
			<Button
				title="Home"
				onPress={this.goHome}/>
		</View>;
	}

	goHome = () => {
		const { navigation } = this.props;
		navigation.navigate('home');
	};
}

export default AboutScene;

const styles = StyleSheet.create({
	container: {

	},
	caption: {
		fontSize: 18,
		marginBottom: 20,
	},
});
