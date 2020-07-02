import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';


class ItemList extends React.Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList() {

	
	return this.props.posts.map( article => {
//set the article image or a default image when no image is found
		const articleIMG = `${article.cover_image}`;
		const defaultIMG = '';
		const userTwitterAccount = `https://twitter.com/
									${article.user.twitter_username}
									`;

		return (
		<div className="ui piled segment" key={article.id}>	    
			
			<div className="item">
				<div className="ui rounded image" style={{margin:'4% 0 8%'}}>
			    	<img src={ article.cover_image ? articleIMG : defaultIMG } alt={ article.cover_image ? "illustration" : "" } />
			    </div>
			    
			    <div className="content">
			        <a href={article.url}>
			        	<h3 className="ui header">{article.title}</h3>
			        </a>
			        <p>{article.description}</p>
			        <p className="author">
			        	<a href={userTwitterAccount}> <i className="twitter icon medium"></i></a> 
			        	{article.user.name}
			        </p>
			         
			        <span className="ui label"><i className="olive tag icon"></i>{article.tag_list[0]}</span>
			        <span className="ui label"><i className="green tag icon"></i>{article.tag_list[1]}</span>
			    </div>
			</div>
		</div>
		);
	}).slice(0,3);

};
	
	render() {
		return (
		<>
			<div className="column">
				<h2 className="ui center aligned header">Last posts on <a href="https://dev.to/">DEV.to</a></h2>
					<div>{this.renderList()}</div>					
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