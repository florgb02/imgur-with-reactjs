var React = require('react');
var Action = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	getInitialState: function(){
		return {
			hovering: false
		}
	},
	render: function(){
		return <div className="image-preview" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
			{this.props.animated && this.state.hovering ? this.video() : this.image()}
			{this.props.animated && !this.state.hovering ? this.icon() : null }
			{this.state.hovering ? this.inset() : null }
		</div> 
	},
	video: function(){
		return <Link to={"/images/"+this.props.id}>
			<video preload="auto" autoPlay="autoplay" loop='loop' webkit-playsinline>
			<source src={this.props.mp4} type="video/mp4"> </source>
			</video>
		</Link>
	},
	image: function(){
		var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';

		return <Link to={"/images/"+this.props.id}>
			<img src={link} />
		</Link>
		
	},
	icon: function(){
		return <span className="glyphicon glyphicon-play"></span>
	},
	inset:function(){
 		return <div className="inset">
 		Views: {this.props.views}
 		<br />
 		Upvotes: {this.props.ups}
 		</div>
	},
	handleMouseEnter: function(){
		this.setState({hovering: true});
	},
	handleMouseLeave: function(){
		this.setState({hovering: false});
	}

});