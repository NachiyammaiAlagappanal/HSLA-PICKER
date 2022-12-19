import { React } from 'react';
import Input from './Input';
import Color from './Color';

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
			style={ { backgroundImage: `linear-gradient(to right,
				${ Color({ ...context, data: 'hue' }) }` } }
		/>
		<Input { ...{ ...context, data: { data: state.hue,
			function: 'updateHue' }} }
		/>
	</div>;
};

export default Hue;
