/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import HueSlider from './components/HueSlider';

const App = (context) => {
	console.log(context);
	return <div className="App">
		<HueSlider { ...context }/>
	</div>;
};

export default App;
