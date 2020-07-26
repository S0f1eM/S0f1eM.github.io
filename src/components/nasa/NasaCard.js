import React from 'react';


const NasaCard = props => {

	const { title, url, hdurl, media_type } = props.data;
	const urlNasa = 'https://www.nasa.gov/multimedia/imagegallery/iotd.html';
	
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
			<h3 className="title" style={{margin:'2em auto'}}>
			    <a href={urlNasa} target="_blank" rel="noopener noreferrer">Image of the day</a> : <br/>
			    {title}
			</h3>
				{renderContent()}
		</div>
	)
}

export default NasaCard;
