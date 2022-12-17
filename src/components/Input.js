import { React } from 'react';

const Input = (context) => {
	const { actions, state: { hue }} = context;

	return (
		<input
			value={ hue }
			onChange={ (evt) => actions.updateHue(evt.target.value) }
		/>);
};

export default Input;
