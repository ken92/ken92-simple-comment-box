import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comments Reducer' , () => {
	it('handles action with unknown type', () => {
		const result = commentReducer(undefined, {});
		expect(result).to.eql([]);
	});

	it('SAVE_COMMENT', () => {
		const comment = 'comment';
		const action = {
			type: SAVE_COMMENT,
			payload: comment
		};
		const result = commentReducer([], action);
		expect(result).to.eql([comment]);
	});
});
