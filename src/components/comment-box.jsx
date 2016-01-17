var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');


var CommentStore = require('../stores/comments-store');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(CommentStore, 'onChange')
	],
	getInitialState: function(){
		return {
			comments: []
		}
	},
	componentWillMount: function(){
		Actions.getTopics();
	},

	render: function(){
		return <ul className="list-group">
				{this.renderComments()}
		</ul>
	},
	onChange: function(event, topics){
		this.setState({
			comments: comments
		});
	},
	renderComments: function(){
		return this.props.comments.slice(0, 20).map(function(comment){
			return <li className="list-group-item comment-box" key={comment.id}>
			<span className="badge">{comment.ups}</span>
			<h5>{comment.author}</h5>
			{comment.comment}
			
			</li>
		});
	}	
});