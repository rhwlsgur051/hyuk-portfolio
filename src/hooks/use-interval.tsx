/* https://velog.io/@rkio/Typescript-React%EC%97%90%EC%84%9C-setInterval-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0 */

'use client';
import { useEffect, useRef } from 'react';

interface IUseInterval {
	(callback: () => void, interval: number): void;
}

export const useInterval: IUseInterval = (callback, interval) => {
	const savedCallback = useRef<(() => void) | null>(null);

	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(() => {
		function tick() {
			if (savedCallback.current) {
				savedCallback.current();
			}
		}

		let id = setInterval(tick, interval);
		return () => clearInterval(id);
	}, [interval]);
};
