const React = require('react'),
	ReactDOM = require('react-dom'),
	Navigation = require('./navigation.js'),
	IdeaContact = require('./ideaContact.js'),
	TeamContact = require('./teamContact.js'),
	About = require('./about.js'),
	Header = require('./header.js'),
	Services = require('./services'),
	Footer = require('./footer.js')

const Index = React.createClass({
    render: function() {
        return (
			<div>
				{/* Header */}
				<Header />

				{/* Services */}
				<Services />

				{/* About us */}
				<About />
			</div>
        );
    }

});

ReactDOM.render(
	<Index />,
	document.getElementById('react-root')
);
