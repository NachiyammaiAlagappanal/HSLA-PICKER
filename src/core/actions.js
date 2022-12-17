
const updateHue = (context) => ({
	hue: context.data,
});

const updateSaturation = (context) => ({
	saturation: context.data,
});
const updateLightness = (context) => ({
	lightness: context.data,
});

const actions = {
	updateHue,
	updateSaturation,
	updateLightness,

};

export default actions;
