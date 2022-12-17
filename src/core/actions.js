/* eslint-disable no-magic-numbers */

const updateHue = (context) => ({
	hue: context.data,
});

const updateSaturation = (context) => ({
	saturation: context.data,
});
const updateLightness = (context) => ({
	lightness: context.data,
});
const updateAlpha = (context) => ({
	alpha: context.data / 100,
});

const actions = {
	updateHue,
	updateSaturation,
	updateLightness,
	updateAlpha,

};

export default actions;
