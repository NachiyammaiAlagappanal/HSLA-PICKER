import { React } from 'react';
import Input from './Input';
import Color from './Color';

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
			style={ { backgroundImage: `linear-gradient(to right,
				${ Color({ ...context, data: 'lightness' }) }` } }
		/>
		<Input { ...{ ...context, data: { data: state.lightness,
			function: 'updateLightness' }} }
		/>
	</div>;
};

export default Lightness;
