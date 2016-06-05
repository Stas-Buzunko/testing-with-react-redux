import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions/index';

class CommentBox extends Component {

	constructor(props) {
		super(props);

		this.state = { comment: '' };
	}

	HandleChange(event) {
		this.setState({ comment: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({ comment: ''});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
				<h4>Add a comment</h4>
				<textarea 
					onChange={this.HandleChange.bind(this)} 
					value={this.state.comment} 
				/>
				<div>
					<button action='submit'>Submit comment</button>
				</div>
			</form>
		);
	}
}

export default connect(null, { saveComment })(CommentBox);