const ColorValue = {
	getHue: ({ state: { hue }, value, data }) =>
		(data === 'hue' ? value : hue),

	getSaturation: ({ state: { saturation }, value, data }) =>
		(data === 'saturation' ? value : saturation),

	getLightness: ({ state: { lightness }, value, data }) =>
		(data === 'lightness' ? value : lightness),

	getAlpha: ({ state: { alpha }, value, data }) =>
		(data === 'alpha' ? value : alpha),
};

export default ColorValue;
