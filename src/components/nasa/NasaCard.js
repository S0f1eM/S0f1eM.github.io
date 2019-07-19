import React from 'react';


const NasaCard = props => {

	const { title, url, hdurl, explanation, date, copyright, media_type } = props.data;

	
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
  	<h4>Nasa picture of the day</h4>
      <div className="ui segment">
		<h5 className="title">{title}</h5>

			{renderContent() }

			<p>{explanation}</p>

			<span>{date}, {copyright}</span>
		
		</div>
	</div>
	)
}


export default NasaCard;
