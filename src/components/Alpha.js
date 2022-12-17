/* eslint-disable no-magic-numbers */
import { React } from 'react';
import Input from './Input';

const color = ({ hue, saturation, lightness }) => [0, 0.2, 0.4, 0.6, 0.8, 1]
	.map((value) =>
		`hsla(${ hue }, ${ saturation }%, ${ lightness }%, ${ value })`);

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
