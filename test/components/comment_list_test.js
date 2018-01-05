import {renderComponent , expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList' , () => {
	let component;
	const listProps = {
		comments: [
			'Hello, World!',
			'Comment',
			'Huzzah!'
		]
	};

	beforeEach(() => {
		component = renderComponent(CommentList, null, listProps);
	});

	it('has the correct class', () => {
		expect(component).to.have.class('comment-list');
	});

	it('shows an LI for each comment', () => {
		expect(component.find('li').length).to.equal(listProps.comments.length);
	});

	it('shows each comment that is provided', () => {
		for (var i=0; i<listProps.comments.length; i++) {
			expect(component).to.contain(listProps.comments[i]);
		}
	});
});
