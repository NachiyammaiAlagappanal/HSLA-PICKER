/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import Alpha from './components/Alpha';
import HueSlider from './components/HueSlider';
import Lightness from './components/Lightness';
import Saturation from './components/Saturation';

const App = (context) => {
	console.log(context);
	return <div className="App">
		<HueSlider { ...context }/>
		<Saturation { ...context }/>
		<Lightness { ...context }/>
		<Alpha { ...context }/>
	</div>;
};

export default App;
