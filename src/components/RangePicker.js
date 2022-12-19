import { React } from 'react';
import Color from './Color';

const RangePicker = (context) => {
	const { state, actions,
		data: { max, min, label, multiplier }, data } = context;

	return (
		<input
			type="range"
			min={ min }
			max={ max }
			value={ state[label] * multiplier }
			onChange={ (evt) => actions[data.function](evt.target.value) }
			className="slider"
			style={ {
				backgroundImage: `linear-gradient(to right,
				${ Color({ ...context, data: label }) }`,
			} }
		/>);
};

export default RangePicker;
