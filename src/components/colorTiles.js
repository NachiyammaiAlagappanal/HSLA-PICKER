import { React } from 'react';

const ColorTiles = (context) => {
	const { state: { hue, saturation, lightness, alpha }} = context;

	return (
		<div
			className="tile"
			style={ { backgroundColor: `hsla(${ hue }, ${ saturation }%,
				${ lightness }%, ${ alpha })` } }
		/>);
};

export default ColorTiles;
