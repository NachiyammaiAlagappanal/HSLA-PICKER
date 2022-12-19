import { React } from 'react';
import Input from '../components/Input';
import Color from './Color';

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
			style={ { backgroundImage: `linear-gradient(to right,
				${ Color({ ...context, data: 'saturation' }) }` } }
		/>
		<Input { ...{ ...context, data: { data: state.saturation,
			function: 'updateSaturation' }} }
		/>
	</div>;
};

export default Saturation;
