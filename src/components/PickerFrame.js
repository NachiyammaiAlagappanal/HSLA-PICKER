import { React } from 'react';
import HSLPicker from './HSLPicker';

const PickerFrame = (context) => {
	const { config: { attributes }} = context;

	return <div className="colorPicker">
		{attributes.map((attribute, index) =>
			<HSLPicker key={ index } { ...{ ...context, data: attribute } }/>)}
	</div>;
};

export default PickerFrame;
