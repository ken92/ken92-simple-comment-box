import {SAVE_COMMENT} from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case SAVE_COMMENT:
			if (action.payload) {
				return [...state, action.payload];
			} else
				return state;

		default:
			return state;
	}
};
