import { React } from 'react';
import Alpha from './Alpha';
import Hue from './Hue';
import Lightness from './Lightness';
import Saturation from './Saturation';

const Components = [Hue, Saturation, Lightness, Alpha];

const Sliders = (context) => <div className="colorPicker">
	{Components.map((Component, index) =>
		<Component key={ index }{ ...context }/>)}</div>;

export default Sliders;
