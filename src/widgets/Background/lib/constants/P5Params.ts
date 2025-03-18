import p5 from 'p5';

export type P5Instance = p5;

export type P5Color =
	| [number, number, number, number]
	| [number, number, number];

export type P5Grid = {
	nRows: number;
	nCols: number;
	size: number;
};

export const P5_GRID: P5Grid = {
	nRows: 0,
	nCols: 0,
	size: 10,
};
