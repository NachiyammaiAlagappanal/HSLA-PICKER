const config = {
	limit: {
		hue: {
			max: 360,
			step: 1,
		},
		saturation: {
			max: 100,
			step: 1,
		},
		lightness: {
			max: 100,
			step: 1,
		},
		alpha: {
			max: 1,
			step: 0.1,
		},
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
			min: 1,
			max: 100,
			label: 'lightness',
			function: 'updateLightness',
			multiplier: 1,
		},
		{
			min: 1,
			max: 100,
			label: 'alpha',
			function: 'updateAlpha',
			multiplier: 100,
		},
	],
};

export default config;
