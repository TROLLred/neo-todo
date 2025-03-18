import { P5Instance } from '../constants/P5Params';
import { setGrid } from './setGrid';

export const p5Resize = (p5Instance: P5Instance) => {
	p5Instance.resizeCanvas(p5Instance.windowWidth, p5Instance.windowHeight);
	setGrid(p5Instance);
};
