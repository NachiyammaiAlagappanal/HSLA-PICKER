
const updateHue = (context) => ({
	hue: context.data,
});

const updateSaturation = (context) => ({
	saturation: context.data,
});

const actions = {
	updateHue,
	updateSaturation,

};

export default actions;
