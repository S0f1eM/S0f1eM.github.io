import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';


class ItemList extends React.Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList() {

	return this.props.posts.map( article => {
			
		const articleIMG = `${article.cover_image}`;

		return (

		<>
		  
		<div className="ui list padded grid" key={article.id}>
		 	    
		    <div className="ui small floated image"><img src={articleIMG} alt="illustration" /></div>
		    
		    <div className="content">
		        <a href={article.url}><h3 className="ui header">{article.title}</h3></a>
		        <p>{article.description}</p>
		        <p className="author">{article.user.name}</p>
		         
		        <span className="ui label"><i className="olive tag icon"></i>{article.tag_list[0]}</span>
		        <span className="ui label"><i className="green tag icon"></i>{article.tag_list[1]}</span>
		    </div>
		</div>
		<div className="ui divider"></div>
		</>


			);
		});
	};
	

	render() {
		return (
		<>
		<h3 className="ui header">Last articles on DEV.to</h3>
		<div className="ui segment">
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