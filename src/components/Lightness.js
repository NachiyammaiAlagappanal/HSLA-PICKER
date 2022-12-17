import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Input from './Input';

const LightnessCount = 5;
const twenty = 10;

const Hue = (hue, saturation) => range(0, LightnessCount).map((value) =>
	`hsla(${ hue }, ${ saturation }%, ${ value * twenty }%, 1)`);

const Lightness = (context) => {
	const { state: { hue, saturation, lightness }, actions } = context;

	return <div className="display">
		<label className="label">Lightness</label>
		<input
			type="range"
			min="1"
			max="100"
			value={ lightness }
			onChange={ (evt) => actions.updateLightness(evt.target.value) }
			className="slider"
			style={ { backgroundImage: `linear-gradient(to right, ${ Hue(saturation, hue) }` } }
		/>
		<Input { ...{ ...context, data: { data: lightness,
			function: 'updateLightness' }} }
		/>
	</div>;
};

export default Lightness;
