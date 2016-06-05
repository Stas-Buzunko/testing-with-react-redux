import { expect } from '../test_helper';
import CommentReducer from 	 '../../src/reducers/reducer_comment';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
	it('hadnles action with unknown type', () => {
			expect(CommentReducer(undefined, {})).to.eql([]);
	});

	it('SAVE_COMMENT', () => {
		const action = { type: SAVE_COMMENT, payload: 'new comment' };
		expect(CommentReducer([], action)).to.eql(['new comment']);
	});
})