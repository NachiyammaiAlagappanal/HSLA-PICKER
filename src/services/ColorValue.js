/* eslint-disable object-shorthand */
/* eslint-disable no-console */

const ColorValue = {
	getHue: ({ state: { hue }, value, data }) => (data === 'hue' ? value : hue),

	getSaturation: ({ state: { saturation }, value, data }) =>
		(data === 'saturation' ? value : saturation),

	getLightness: ({ state: { lightness }, value, data }) =>
		(data === 'lightness' ? value : lightness),

	getAlpha: ({ state: { alpha }, value, data, config: { count }}) =>
		(data === 'alpha' ? value / count[data] : alpha),
};

export default ColorValue;
