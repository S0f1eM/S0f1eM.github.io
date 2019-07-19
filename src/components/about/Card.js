import React from 'react';


const Card = () => {

	return (

		<div className="ui card">
    <div className="content">
      <div className="header">
        <img src="https://pbs.twimg.com/profile_images/1150092962300403712/4uGgrm1W_400x400.jpg" alt="Sophie M." className="ui avatar right spaced image" />
        Sophie Marchand
      </div>
      <div class="description">
        <p><i className="computer icon"></i> Front-end developer</p>
        <p> <i className="female icon"></i><i className="heart icon"></i><i className="child icon"></i>Proud Mom</p>
        <p> <i className="music icon"></i> Music Lover</p>
        <p> <i className="smile outline icon"></i> Rational Optimist </p>
        <p> <i className="world icon"></i>Living in France</p>
      </div>
    </div>
    <div class="ui two bottom attached buttons">
      <div class="ui button">
        <a href="https://twitter.com/S0f1eM" target="_blank" rel="noopener noreferrer"><i className="big twitter icon"></i></a>
      </div>
      <div class="ui button">
        <a href="https://github.com/S0f1eM" target="_blank" rel="noopener noreferrer"><i className="big github icon"></i></a>
      </div>
    </div>
  </div>
	)
}

export default Card;