import { useThemeStore } from '@features/Theme';
import p5 from 'p5';
import { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise';
import { ColorsByTheme } from '../constants/BackgroundColors';
import { P5_GRID, type P5Color } from '../constants/P5Params';
import { SIMPLEX_CHARS } from '../constants/SimplexChars';
import { p5Resize } from '../helpers/p5Resize';
import { p5Setup } from '../helpers/p5Setup';

export const useSimplexNoise = (
	parentRef: React.RefObject<HTMLDivElement | null>,
) => {
	const p5Sketch = useRef<p5 | null>(null);
	const { theme } = useThemeStore();
	const colors = ColorsByTheme[theme];

	useEffect(() => {
		let zOff = 0;
		const noise = createNoise3D(() => 0.322);
		const steps = {
			x: 0.009,
			y: 0.009,
			z: 0.003,
		};

		if (parentRef.current)
			p5Sketch.current = new p5((p5Instance: p5) => {
				p5Instance.setup = () => {
					p5Setup(p5Instance);
				};

				p5Instance.draw = () => {
					p5Instance.background(colors.bg as P5Color);
					let yOff = 0;
					for (let y = 0; y < P5_GRID.nRows; y++) {
						let xOff = 0;
						for (let x = 0; x < P5_GRID.nCols; x++) {
							const char =
								SIMPLEX_CHARS[
									p5Instance.floor(
										noise(xOff, yOff, zOff) * (SIMPLEX_CHARS.length + 13),
									)
								];
							p5Instance.fill(colors.color as P5Color);
							p5Instance.text(
								char,
								x * P5_GRID.size + P5_GRID.size / 2,
								y * P5_GRID.size + P5_GRID.size / 2,
							);

							xOff += steps.x;
						}
						yOff += steps.y;
					}
					zOff += steps.z;
				};

				p5Instance.windowResized = () => {
					p5Resize(p5Instance);
				};
			}, parentRef.current);

		return () => {
			p5Sketch.current?.remove();
			p5Sketch.current = null;
		};
	}, [colors, parentRef]);

	return p5Sketch;
};
