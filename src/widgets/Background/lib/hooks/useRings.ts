import { useThemeStore } from '@features/Theme';
import p5 from 'p5';
import { useEffect, useRef } from 'react';
import { ColorsByTheme } from '../constants/BackgroundColors';
import { type P5Color } from '../constants/P5Params';
import { p5Resize } from '../helpers/p5Resize';
import { p5Setup } from '../helpers/p5Setup';

export const useRings = (parentRef: React.RefObject<HTMLDivElement | null>) => {
	const p5Sketch = useRef<p5 | null>(null);
	const { theme } = useThemeStore();
	const colors = ColorsByTheme[theme];

	useEffect(() => {
		const rings: { radius: number }[] = [];
		const ringThickness = 30;
		const ringSpeed = 2;
		const ringInterval = 100;
		let frameCount = 0;

		if (parentRef.current)
			p5Sketch.current = new p5((p5Instance: p5) => {
				p5Instance.setup = () => {
					p5Setup(p5Instance);
				};

				p5Instance.draw = () => {
					p5Instance.background(colors.bg as P5Color);
					const centerX = p5Instance.width / 2;
					const centerY = p5Instance.height / 2;
					const maxRadius = Math.sqrt(centerX * centerX + centerY * centerY);

					if (frameCount % ringInterval === 0) {
						rings.push({ radius: 0 });
					}

					for (let i = rings.length - 1; i >= 0; i--) {
						const ring = rings[i];
						for (let x = 0; x < p5Instance.width; x += 12) {
							for (let y = 0; y < p5Instance.height; y += 12) {
								const dx = x - centerX;
								const dy = y - centerY;
								const distance = Math.sqrt(dx * dx + dy * dy);
								const isInRing =
									distance > ring.radius - ringThickness &&
									distance < ring.radius + ringThickness;

								if (isInRing) {
									p5Instance.fill(colors.color as P5Color);
									p5Instance.text('.', x + 6, y + 6);
								}
							}
						}
						ring.radius += ringSpeed;
						if (ring.radius > maxRadius + ringThickness) rings.splice(i, 1);
					}
					frameCount++;
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
