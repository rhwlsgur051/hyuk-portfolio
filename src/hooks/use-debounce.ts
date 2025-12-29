import { debounce } from 'lodash';
import { useCallback } from 'react';

export const useDebounce = (callback: (...args: any) => any, dependencies?: any, wait?: number) => {
	return useCallback(debounce(callback, wait ? wait : 100), dependencies ?? []);
};
