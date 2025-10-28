import { useState, useEffect } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
	value: LocalStorageReturnValue,
	{
		setItem: (value: LocalStorageSetValue) => void;
		removeItem: () => void;
	},
];

export const useLocalStorage: UseLocalStorage = (key) => {
	const [value, setValue] = useState<LocalStorageReturnValue>(null);

	const setItem = (value: LocalStorageSetValue) => {
		localStorage.setItem(key, value);
		setValue(value);
	}

	const removeItem = () => {
		localStorage.removeItem(key);
		setValue(null);
	}

	useEffect(() => {
		const item = localStorage.getItem(key);
		if (item) {
			setValue(item as LocalStorageSetValue);
		}
	}, [key]);

	return [value, { setItem, removeItem }];
}
