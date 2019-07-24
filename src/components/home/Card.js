import React from 'react';


const Card = () => {

	return (

		<div className="ui segment computer only">
    <div className="content">
      <div className="header">
        <img src="https://pbs.twimg.com/profile_images/1152352433546379265/DB8JCSDS_200x200.jpg" alt="sophie" className="ui avatar right spaced image" />
        Sophie Marchand
      </div>
          <div className="ui divider"></div>
      <div class="description">
        <p><i className="terminal icon green"></i> Front-end developer <i className="computer icon olive"></i> </p>
        <p> <i className="female icon pink"></i>Proud Mom<i className="child icon teal"></i></p>
        <p> <i className="smile outline icon yellow"></i> Rational Optimist <i className="star icon yellow"></i></p>
        <p> <i className="world icon blue"></i>Living in France <i className="thumbtack icon brown"></i> </p>
      </div>
    </div>
      <div className="ui divider"></div>
     <div className="extra center aligned">
       <a href="https://twitter.com/S0f1eM?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @S0f1eM</a>
     </div>
  </div>
	)
}

export default Card;