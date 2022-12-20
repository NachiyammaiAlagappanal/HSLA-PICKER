import { range } from '@laufire/utils/collection';
import ColorValue from '../services/ColorValue';

const Color = (context) => {
	const { data, config: { limit }} = context;

	return range(
		0, limit[data].max, limit[data].step
	)
		.map((value) => `hsla(${ ColorValue.getHue({ ...context, value }) },
			${ ColorValue.getSaturation({ ...context, value }) }%,
			${ ColorValue.getLightness({ ...context, value }) }%,
			${ ColorValue.getAlpha({ ...context, value }) })`);
};

export default Color;
