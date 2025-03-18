import { P5_GRID, P5Instance } from '../constants/P5Params';
import { setGrid } from './setGrid';

export const p5Setup = (p5Instance: P5Instance) => {
	p5Instance.createCanvas(p5Instance.windowWidth, p5Instance.windowHeight);
	p5Instance.pixelDensity(1);
	p5Instance.frameRate(30);
	setGrid(p5Instance);
	p5Instance.textSize(P5_GRID.size);
	p5Instance.textAlign(p5Instance.CENTER, p5Instance.CENTER);
};
