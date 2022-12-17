import { React } from 'react';

const Input = (context) => {
	const { actions, data } = context;

	return (
		<input
			value={ data.data }
			onChange={ (evt) => actions[data.function](evt.target.value) }
		/>);
};

export default Input;
