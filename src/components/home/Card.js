import React from 'react';


const Card = () => {

	return (

		<div className="ui computer only">
    <div className="content">
      <h3 className="ui header">Hello World !</h3>
        <p className="description">
           This is my React Playground for training, testing, refactoring and improving.
      </p>
          <div className="ui divider"></div>

      <div className="header">
        <h2>I 'm Sophie M.</h2> 
        <img src="https://pbs.twimg.com/profile_images/1152352433546379265/DB8JCSDS_200x200.jpg" alt="sophie" className="ui small image" />
      </div>
          <div className="ui divider"></div>

      <div className="description">

        <p><i className="terminal icon green"></i>A Front-end developer <i className="computer icon olive"></i> </p>
        <p> <i className="female icon pink"></i>A Proud Mom<i className="child icon teal"></i></p>
        <p> <i className="smile outline icon yellow"></i>A Rational Optimist <i className="star icon yellow"></i></p>
      </div>

    </div>
  
    <div className="ui divider"></div>

  </div>
	)
}

export default Card;