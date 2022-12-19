import { React } from 'react';
import './App.scss';
import ColorTile from './components/ColorTile';
import PickerFrame from './components/PickerFrame';

const App = (context) =>
	<div className="App">
		<ColorTile { ...context }/>
		<PickerFrame { ...context }/>
	</div>;

export default App;
