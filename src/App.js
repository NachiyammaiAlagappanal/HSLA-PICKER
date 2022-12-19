/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import Alpha from './components/Alpha';
import Hue from './components/Hue';
import Lightness from './components/Lightness';
import Saturation from './components/Saturation';
import ColorTile from './components/ColorTile';

const App = (context) => {
	console.log(context);
	return <div className="App">
		<ColorTile { ...context }/>
		<div className="colorPicker">
			<Hue { ...context }/>
			<Saturation { ...context }/>
			<Lightness { ...context }/>
			<Alpha { ...context }/></div>
	</div>;
};

export default App;
