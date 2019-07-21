import React from 'react';


const NasaCard = props => {

	const { title, url, hdurl, explanation, media_type } = props.data;

	
	function renderContent() {
		
		switch(media_type) {

			case('video'):
				return (
					<iframe 
						title="Nasa Video"
						allowFullScreen
						frameBorder="0"
						height="auto"
						width="auto"
						src={url}>
			  		</iframe>
				)

			case('image'):
				return(
					<a href={hdurl} className="image">
						<img src={url} alt={title} height="auto" width="100%;"/>
					</a>
				)

			default: 
				return null

		}
	}


	return (


  <div className="ui item">
      <div className="ui segment">
		<h5 className="title">{title}</h5>
		<div className="ui divider"></div>

			{renderContent() }
					<div className="ui divider"></div>

			<p>{explanation}</p>		
		</div>
	</div>
	)
}


export default NasaCard;
