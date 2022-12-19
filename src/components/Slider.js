import { React } from 'react';
import Input from './Input';
import Color from './Color';

const Slider = (context) => {
	const { state, actions,
		data: { max, min, label, multiplier }, data } = context;

	return <div className="display">
		<label className="label">{label}</label>
		<input
			type="range"
			min={ min }
			max={ max }
			value={ state[label] * multiplier }
			onChange={ (evt) => actions[data.function](evt.target.value) }
			className="slider"
			style={ { backgroundImage: `linear-gradient(to right,
				${ Color({ ...context, data: label }) }` } }
		/>
		<Input { ...{ ...context, data: { data: state[label],
			function: data.function }} }
		/>
	</div>;
};

export default Slider;
