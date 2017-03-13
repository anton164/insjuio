const React = require('react');

const Header = React.createClass({
    render: function () {
      return (<head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Insj UiO</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link href="/styles/site.min.css" rel="stylesheet" />

                {/* Custom fonts */}
                <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css' />
                <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css' />

                {/* Plugin CSS */}
                <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet" />

                {/* To-do, fix this:
                {{!-- This file provides the default styling for the KeystoneJS Content Editor
                    - only renders when user is logged in and admin--}}
                {{{isAdminEditorCSS user}}}
                */}

            </head>);
    }

});

module.exports = Header;