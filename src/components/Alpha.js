/* eslint-disable no-magic-numbers */
import { React } from 'react';
import Input from './Input';
import Color from './Color';

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
			style={ { backgroundImage: `linear-gradient(to right,
				${ Color({ ...context, data: 'alpha' }) }` } }
		/>
		<Input { ...{ ...context, data: { data: state.alpha,
			function: 'updateAlpha' }} }
		/>
	</div>;
};

export default Alpha;
