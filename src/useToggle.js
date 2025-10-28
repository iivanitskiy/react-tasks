import { useReducer } from 'react';

function useToggle(values = [true, false]) {
	const getInitialValue = () => {
		if (values.length === 0) return true;
		return values[0];
	};

	const getNextValue = (currentValue) => {
		if (values.length === 0) {
			return !currentValue;
		}

		const currentIndex = values.indexOf(currentValue);
		if (currentIndex === -1) {
			return values[0];
		}

		const nextIndex = (currentIndex + 1) % values.length;
		return values[nextIndex];
	};

	const toggleReducer = (state, action) => {
		if (typeof action === 'undefined') {
			return getNextValue(state);
		} else {
			if (values.includes(action)) {
				return action;
			}
			return state;
		}
	};

	const [value, dispatch] = useReducer(toggleReducer, null, getInitialValue);

	const toggle = (newValue) => {
		dispatch(newValue);
	};

	return [value, toggle];
}

export { useToggle };
