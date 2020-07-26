import React from 'react';
import ReactPlayer from 'react-player';

class Video extends React.Component  {

	render() {
  		return (

        <div className="column">
  		   <div className="player-wrapper ui-embed">
            <ReactPlayer
                url={[
                    "https://www.youtube.com/watch?v=FG0fTKAqZ5g&controls=0&playIcon=0&showinfo=0"
                ]}
                volume="0"
                muted
                autoplay
                loop
                className="react-player"
                playing="false"
                playIcon="false"
                pip="false"
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
    </div>	
  		)
	}

}

export default Video;