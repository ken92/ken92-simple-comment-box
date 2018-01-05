import {renderComponent , expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox' , () => {
	let component;

	beforeEach(() => {
		component = renderComponent(CommentBox);
	});

	it('has the correct class', () => {
		expect(component).to.have.class('comment-box');
	});

	it('has a text area', () => {
		expect(component.find("textarea")).to.exist;
	});

	it('has a button', () => {
		expect(component.find("button")).to.exist;
	});


	describe('text area', () => {
		const commentValue = 'comment';

		beforeEach(() => {
			component.find('textarea').simulate('change', commentValue);
		});

		it('shows entered text', () => {
			expect(component.find('textarea')).to.have.value(commentValue);
		});

		it('clears text input on submit', () => {
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		});
	});
});
