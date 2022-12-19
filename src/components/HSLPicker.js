import { React } from 'react';
import Input from './Input';
import Label from './Label';
import RangePicker from './RangePicker';

const HSLPicker = (context) =>
	<div className="display">
		<Label { ...context }/>
		<RangePicker { ...context }/>
		<Input { ...context }/>
	</div>;

export default HSLPicker;
