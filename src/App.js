/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import ColorTile from './components/ColorTile';
import Sliders from './components/Sliders';

const App = (context) =>
	<div className="App">
		<ColorTile { ...context }/>
		<Sliders { ...context }/>
	</div>;

export default App;
