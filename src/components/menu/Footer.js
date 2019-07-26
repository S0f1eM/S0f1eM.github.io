import React from 'react';


const Footer = () => {

	return (
	<div className="ui secondary menu">
		<p className="ui centered text">2019 - This website is made with <a href="https://fr.reactjs.org/">
		<i className="react large icon"></i></a> - The repository is on <a href="https://github.com/S0f1eM/React-playground"><i className="github square large icon"></i></a> 
		</p>
		<div className="right menu">
		  <a href="https://twitter.com/S0f1eM" target="_blank" rel="noopener noreferrer"><i className="big twitter icon"></i></a>
      <a href="https://www.linkedin.com/in/sophie-marchand-web-developer/" target="_blank" rel="noopener noreferrer"><i className="big linkedin icon"></i></a>
      <a href="https://github.com/S0f1eM" target="_blank" rel="noopener noreferrer"><i className="big github alternate icon"></i></a>
		</div>
	</div>
	)
}


export default Footer;