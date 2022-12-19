import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Input from '../components/Input';

const saturationCount = 100;

const color = ({ state: { hue, lightness, alpha }}) => range(0, saturationCount)
	.map((value) =>
		`hsla(${ hue }, ${ value }%, ${ lightness }%, ${ alpha })`);

const Saturation = (context) => {
	const { state, actions } = context;

	return <div className="display">
		<label className="label">Saturation</label>
		<input
			type="range"
			min="1"
			max="100"
			value={ state.saturation }
			onChange={ (evt) => actions.updateSaturation(evt.target.value) }
			className="slider"
			style={ { backgroundImage: `linear-gradient(to right, ${ color(context) }` } }
		/>
		<Input { ...{ ...context, data: { data: state.saturation,
			function: 'updateSaturation' }} }
		/>
	</div>;
};

export default Saturation;
