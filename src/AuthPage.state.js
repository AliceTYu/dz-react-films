export const INITIAL_STATE = {
	isValid: {
		name: true
	},
	values: {
		name: ''
	},
	ifFormReadyToSubmit: false
};

export function inputFormReducer(state, action) {
	switch(action.type) {
	case 'RESET_VALIDITY':
		return {...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT': {
		const nameValidity = state.values.name?.trim().length;
		return {
			...state,
			isValid: {
				name: nameValidity
			},
			ifFormReadyToSubmit: nameValidity
		};
	}
	case 'CLEAR':
		return {...state, values: INITIAL_STATE.values, ifFormReadyToSubmit: false};
	case 'SET_VALUE':
		return {...state, values: {...state.values, ...action.payload}};
	}
}
