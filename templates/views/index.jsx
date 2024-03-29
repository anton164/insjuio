const React = require('react');

function Index (props) {
    return (
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Insj UiO</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link href="/styles/site.min.css" rel="stylesheet" />

                {/*<!-- Custom fonts -->
                <!--<link href=".public/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">-->*/}
                <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css' />
                <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css' />

                {/*<!-- Plugin CSS -->*/}
                <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet" />

                {/*{{!-- This file provides the default styling for the KeystoneJS Content Editor
                    - only renders when user is logged in and admin--}}
                {{{isAdminEditorCSS user}}}*/}

            </head>
            <body>

                <div id="react-root"></div>
                <script src="/client/index.js"></script>
                {/*{{!--
                    //- jQuery 1.11.3 is included by default, and required by both Bootstrap
                    //- and the KeystoneJS Content Editor. If you are not targeting IE8,
                    //- you can upgrade to 2.1.4 (also bundled) for better performance.
                --}}*/}
                <script src="/js/jquery/jquery-1.11.3.min.js"></script>
                
                {/*<!-- javascript imports -->*/}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
                <script src="vendor/scrollreveal/scrollreveal.min.js"></script>
                <script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
                {/*{{!--
                    //- Customise which Bootstrap javascript files are served by including
                    //- them specifically here, instead of bootstrap-3.3.5.min.js
                --}}*/}
                <script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>
                <script src="/js/theme/creative.js"></script>
                <script src="https://use.fontawesome.com/24d0414047.js"></script>
                <script src="/js/segment/segment.js"></script>
                {/*{{{isAdminEditorJS user}}}*/}
            </body>
        </html>
    );
}
module.exports = Index;