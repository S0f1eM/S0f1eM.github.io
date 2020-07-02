import React from 'react';
import ReactPlayer from 'react-player';

class Video extends React.Component  {

	render() {
  		return (
  		   <div className="player-wrapper ui-embed">
            <ReactPlayer
                url={[
                    "https://www.youtube.com/watch?v=FG0fTKAqZ5g"
                ]}
                muted
                autoplay
                className="react-player"
                playing="true"
                controls
                width="100%"
                height="100%"
                config={{
                    file: {
                        attributes: {
                            crossOrigin: "true"
                        }
                    }
                }}
            />
        </div>		
  		)
	}

}

export default Video;