import React from 'react';

const Footer = () => {

	return (

<div className="ui inverted vertical footer segment" style={{padding: "2em 1em", marginTop: "2em"}}>
    <div className="ui center aligned container">
        <div className="ui stackable inverted divided grid">         	    
      	    <div className="ten wide column">
      			<p className="ui centered text">Sophie Marchand - 2019 - This website is made with 
              <a href="https://fr.reactjs.org/"><i className="react large icon"></i></a>
            </p>
			</div> 
      		
      		<div className="five wide column">
  				  <a  href="https://twitter.com/S0f1eM" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="go to the twitter account"><i className="big twitter icon"></i>
            </a>
	      		<a  href="https://www.linkedin.com/in/sophie-marchand-web-developer/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="go to the linkedin account"><i className="big linkedin icon"></i>
            </a>
	      		<a  href="https://github.com/S0f1eM" 
                target="_blank"  
                rel="noopener noreferrer"
                aria-label="go to the github account"><i className="big github alternate icon"></i>
            </a>        
	      	</div>

    	</div>
  	</div>
 </div>

	)
}


export default Footer;