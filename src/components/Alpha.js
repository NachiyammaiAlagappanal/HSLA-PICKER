/* eslint-disable no-magic-numbers */
import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Input from './Input';

const alphaCount = 10;
const color = ({ hue, saturation, lightness }) => range(0, alphaCount)
	.map((value) =>
		`hsla(${ hue }, ${ saturation }%, ${ lightness }%, ${ value / alphaCount })`);

const Alpha = (context) => {
	const { state, actions } = context;

	return <div className="display">
		<label className="label">Alpha</label>
		<input
			type="range"
			min="0"
			max="100"
			value={ state.alpha * 100 }
			onChange={ (evt) => actions.updateAlpha(evt.target.value) }
			className="slider"
			style={ { backgroundImage: `linear-gradient(to right, ${ color(state) }` } }
		/>
		<Input { ...{ ...context, data: { data: state.alpha,
			function: 'updateAlpha' }} }
		/>
	</div>;
};

export default Alpha;
