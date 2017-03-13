const React = require('react');

const Footer = React.createClass({
    render: function(){
        return(
            <div className="container">
			    <div id="footer">
				    <p>Powered by <a href="http://keystonejs.com" target="_blank">KeystoneJS</a>.</p>
				    <a href="https://www.facebook.com/"><i class="fa fa-2x fa-facebook-official text-primary sr-icons"></i></a>	
				    <a href="https://www.instagram.com/"><i class="fa fa-2x fa-instagram text-primary sr-icons"></i></a>
				    </div>
		    </div>
        );
    }
});

module.exports = Footer;