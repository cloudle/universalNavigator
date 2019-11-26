import React from 'react';

export type Action = {
	action: String,
}

export type Element = React.Element<*>;

export type Style =
	| { [key: string]: any }
	| number
	| false
	| null
	| void
	| Array<Style>;

export type LayoutEvent = {
	nativeEvent: {
		layout: {
			x: number,
			y: number,
			width: number,
			height: number,
		},
	},
};

export type Navigation = {
	navigate?: Function,
	goBack?: Function,
	getChildNavigation?: Function,
	getParam?: Function,
	setParam?: Function,
	dispatch?: Function,
	emit?: Function,
	state?: {
		key?: String,
		routeName?: String,
		params?: Object,
	},
};
