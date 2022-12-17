import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Input from '../components/Input';

const saturationCount = 5;
const twenty = 20;

const color = (hue, lightness) => range(0, saturationCount).map((value) =>
	`hsla(${ hue }, ${ value * twenty }%, ${ lightness }%, 1)`);

const Saturation = (context) => {
	const { state: { hue, saturation, lightness }, actions } = context;

	return <div className="display">
		<label className="label">Saturation</label>
		<input
			type="range"
			min="1"
			max="100"
			value={ saturation }
			onChange={ (evt) => actions.updateSaturation(evt.target.value) }
			className="slider"
			style={ { backgroundImage: `linear-gradient(to right, ${ color(hue, lightness) }` } }
		/>
		<Input { ...{ ...context, data: { data: saturation,
			function: 'updateSaturation' }} }
		/>
	</div>;
};

export default Saturation;
