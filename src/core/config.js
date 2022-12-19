const config = {
	count: {
		hue: 360,
		saturation: 100,
		lightness: 100,
		alpha: 10,
	},
	attributes: [
		{
			min: 1,
			max: 360,
			label: 'hue',
			function: 'updateHue',
			multiplier: 1,
		},
		{
			min: 1,
			max: 100,
			label: 'saturation',
			function: 'updateSaturation',
			multiplier: 1,
		},
		{
			min: 0,
			max: 100,
			label: 'lightness',
			function: 'updateLightness',
			multiplier: 1,
		},
		{
			min: 0,
			max: 100,
			label: 'alpha',
			function: 'updateAlpha',
			multiplier: 100,
		},
	],
};

export default config;
