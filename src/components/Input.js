import { React } from 'react';

const Input = (context) => {
	const { actions, state, data, data: { label }} = context;

	return (
		<input
			className="input"
			value={ state[label] }
			onChange={ (evt) => actions[data.function](evt.target.value) }
		/>);
};

export default Input;
