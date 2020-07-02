import React from 'react';


const NasaCard = props => {

//destructuring the data object from the api
	const { title, url, hdurl, media_type } = props.data;

	
	function renderContent() {

//switch button in order to be able to render the video or the photo depending on the media type
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
      <div>
		<h5 className="title" style={{fontFamily:"Pacifico", margin:'2em auto'}}>Image of the day : {title}</h5>
			{renderContent() }
	  </div>
	</div>
	)
}


export default NasaCard;
