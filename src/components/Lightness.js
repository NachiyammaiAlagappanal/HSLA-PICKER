import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Input from './Input';

const LightnessCount = 100;

const color = ({ state: { hue, saturation, alpha }}) => range(0, LightnessCount)
	.map((value) =>
		`hsla(${ hue }, ${ saturation }%, ${ value }%, ${ alpha })`);

const Lightness = (context) => {
	const { state, actions } = context;

	return <div className="display">
		<label className="label">Lightness</label>
		<input
			type="range"
			min="1"
			max="100"
			value={ state.lightness }
			onChange={ (evt) => actions.updateLightness(evt.target.value) }
			className="slider"
			style={ { backgroundImage: `linear-gradient(to right, ${ color(context) }` } }
		/>
		<Input { ...{ ...context, data: { data: state.lightness,
			function: 'updateLightness' }} }
		/>
	</div>;
};

export default Lightness;
