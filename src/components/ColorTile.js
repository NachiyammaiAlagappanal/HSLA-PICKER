import { React } from 'react';

const ColorTile = (context) => {
	const { state: { hue, saturation, lightness, alpha }} = context;

	return (
		<div
			className="tile"
			style={ { backgroundColor: `hsla(${ hue }, ${ saturation }%,
				${ lightness }%, ${ alpha })` } }
		/>);
};

export default ColorTile;
