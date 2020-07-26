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
		const defaultIMG = '/default.jpg';
		const userTwitterAccount = `https://twitter.com/
									${article.user.twitter_username}
									`;

		return (		
			<div className="item itemlistDev" key={article.id}>

				<div className="ui segment">
					<div className="ui rounded image" style={{margin:'4% 0 8%'}}>
						<a href={article.url}>
				    		<img src={ article.cover_image ? articleIMG : defaultIMG } 
				    		     alt="" />
				   		</a>
				    </div>
				    
				    <div className="ui content">
				        <a href={article.url}>
				        	<h3 className="ui header">{article.title}</h3>
				        </a>
				        <p>{article.description}</p>
				        <p className="author">
				        	<a href={userTwitterAccount}> 
				        		<i className="twitter icon medium"></i>
				        		{article.user.name}
				        	</a> 
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
			<div className="ui column" style={{}}>
				<h2 className="ui center aligned header" style={{margin: '2em 0'}}>
					Last posts on <a href="https://dev.to/">DEV.to</a>
				</h2>
				<div className="ui very relaxed list horizontal">  
					{this.renderList()}
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