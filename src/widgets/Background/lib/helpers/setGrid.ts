import { P5_GRID, type P5Instance } from '../constants/P5Params';

export const setGrid = (p5Instance: P5Instance) => {
	P5_GRID.nCols = p5Instance.floor(p5Instance.width / P5_GRID.size);
	P5_GRID.nRows = p5Instance.floor(p5Instance.height / P5_GRID.size);
};
