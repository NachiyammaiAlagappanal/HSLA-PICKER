import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Input from '../components/Input';

const hueCount = 37;
const ten = 10;

const Hue = (saturation) => range(0, hueCount).map((value) =>
	`hsla(${ value * ten }, ${ saturation }%, 50%, 1)`);

const HueSlider = (context) => {
	const { state: { hue, saturation }} = context;

	return <div className="display">
		<label className="label">Hue</label>
		<input
			type="range"
			min="1"
			max="360"
			value={ hue }
			onChange={ (evt) => context.actions.updateHue(evt.target.value) }
			className="slider"
			style={ { backgroundImage: `linear-gradient(to right, ${ Hue(saturation) }` } }
		/>
		<Input { ...{ ...context, data: { data: hue,
			function: 'updateHue' }} }
		/>
	</div>;
};

export default HueSlider;
