import { React } from 'react';
import Slider from './Slider';

const Sliders = (context) => {
	const { config: { attributes }} = context;

	return <div className="colorPicker">
		{attributes.map((attribute, index) =>
			<Slider key={ index } { ...{ ...context, data: attribute } }/>)}
	</div>;
};

export default Sliders;
