import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/data';


class ItemList extends React.Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList() {

	
	return this.props.posts.map( article => {

//set the article image or a default image when no image is found
		const articleIMG = `${article.cover_image}`;
		const defaultIMG = 'https://via.placeholder.com/150x60.png?text=Hello+World';
//create a const for leading to the twitter accout of the author
		const userTwitterAccount = `https://twitter.com/
									${article.user.twitter_username}
									`;

		return (

		<div className="ui list padded grid" key={article.id}>	    
			
			<div className="ui small floated image">
		    	<img src={ article.cover_image ? articleIMG : defaultIMG } alt="illustration" />
		    </div>
		    
		    <div className="content">
		        <a href={article.url}>
		        	<h3 className="ui header">{article.title}</h3>
		        </a>
		        <p>{article.description}</p>
		        <p className="author">{article.user.name} <a href={userTwitterAccount}> <i className="twitter icon medium"></i></a></p>
		         
		        <span className="ui label"><i className="olive tag icon"></i>{article.tag_list[0]}</span>
		        <span className="ui label"><i className="green tag icon"></i>{article.tag_list[1]}</span>
		    </div>
		<div className="ui divider"></div>

		</div>

		);
//load just the 5 first articles of the array fetch from the api
	}).slice(0,5);

};
	

	render() {
		return (
		<>
		<div>
		<h2 className="ui header">Last posts on DEV.to</h2>
		<div className="ui divider"></div>
		<div>{this.renderList()}</div>
		<div className="ui container">
			<h4 className="ui link item"><a href="https://dev.to/"> More articles on Dev.to</a></h4>
		</div>
		</div>
		</>
		)
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
}

export default connect(mapStateToProps, 
{ fetchPosts }
)(ItemList);