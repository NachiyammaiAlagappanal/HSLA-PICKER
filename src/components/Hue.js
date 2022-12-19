import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Input from './Input';

const hueCount = 360;

const color = ({ state: { saturation, lightness, alpha }}) =>
	range(0, hueCount).map((value) =>
		`hsla(${ value }, ${ saturation }%, ${ lightness }%, ${ alpha })`);

const Hue = (context) => {
	const { state, actions } = context;

	return <div className="display">
		<label className="label">Hue</label>
		<input
			type="range"
			min="1"
			max="360"
			value={ state.hue }
			onChange={ (evt) => actions.updateHue(evt.target.value) }
			className="slider"
			style={ { backgroundImage: `linear-gradient(to right, ${ color(context) }` } }
		/>
		<Input { ...{ ...context, data: { data: state.hue,
			function: 'updateHue' }} }
		/>
	</div>;
};

export default Hue;
